import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import pg from 'pg';
import env from 'dotenv';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import cookieParser from 'cookie-parser';

import imageDownloader from 'image-downloader'
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import multer from 'multer';
import { isContext } from 'vm';





const app = express();
const saltRounds = 10;

env.config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60,
        // secure: true,
    },
}));

app.use(passport.authenticate('session'));
app.use(passport.initialize());
app.use(passport.session());


const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
db.connect();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get("/test", (req, res) => {
    res.json('test ok');
});

app.post('/register', async (req, res) => {
    try {
        console.log(req.user,"req.user");
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Log the input data for debugging
        // console.log('Received data:', { name, email, password });

        const checkEmail = await db.query("SELECT * FROM users WHERE email = $1", [email]);

        if (checkEmail.rows.length > 0) {
            return res.status(400).json({ error: "Email already registered" });
        } else {
            const hash = await bcrypt.hash(password, saltRounds);
            const values = [name, email, hash];
            
            // Log the values before inserting to debug the error
            // console.log('Values to insert:', values);

            const result = await db.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *", values);
            const user = result.rows[0];

            // console.log("Successfully registered");
            return res.status(201).json({ user });
        }
    } catch (err) {
        console.error('Error during registration:', err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});



app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });

        req.login(user, (err) => {
            if (err) return next(err);
            console.log("Login", req.user);
            return res.json(user);
        });
    })(req, res, next);
});





app.get('/profile', (req, res,) => {
    console.log('Checking authentication status...');
    console.log('Cookies:', req.cookies);
    console.log('Session:', req.session);
    console.log("req", req.user);

    if (req.isAuthenticated()) {
        // res.json({ user: req.user, status: "authenticated" });
        const {id,username,email}= req.user;
        res.json({id,username,email});
    } else {
        res.json({ status: "not authenticated" });
    }
});


passport.use(
    "local",
    
    new LocalStrategy({usernameField:"email"},async function verify(email, password, cb) {
        try {
            const result = await db.query("SELECT * FROM users WHERE email = $1", [email,]);

            if (result.rows.length > 0) {
                const user = result.rows[0];
                const storedHashPassword = user.password;
                bcrypt.compare(password, storedHashPassword, (err, valid) => {
                    if (err) {
                        console.log("Error comparing pasword:", err);
                        return cb;
                    } else {
                        if (valid) {
                            return cb(null, user);
                        } else {
                            return cb(null, false);
                        }
                    }
                });
            } else {
                return cb("User not found");
            }
        } catch (error) {
console.log(error);
        }
    })
)



app.post('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            }
            res.clearCookie('connect.sid', { path: '/' });
            res.json({ message: 'Logged out successfully' });
        });
    });
});

 
    
   

passport.serializeUser(async(user, done) => {
    // console.log('serializeUser', user)
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
        if (result.rows.length > 0) {
            // console.log('deserializeUser', result.rows[0])
            done(null, result.rows[0]);
        } else {
            done(new Error('User not found'));
        }
    } catch (error) {
        done(error);
    }
});





const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

app.post('/upload_by_link', async (req, res) => {
    const { link } = req.body;
    const newName = "photo" +Date.now() + '.jpg';
    const destinationPath = path.join(uploadsDir, newName);

    try {
        await imageDownloader.image({
            url: link,
            dest: destinationPath
        });
        
        res.json(newName);
    } catch (error) {
        console.error('Error downloading image:', error);
        res.status(500).json({ error: 'Failed to download image' });
    }
});












const photosMiddleware = multer({ dest: 'uploads/'});
app.post('/upload', photosMiddleware.array('photos',100)   , (req,res)=>{

    const uploadedFiles =[];
    for(let i =0; i<req.files.length;i++){
        const {path:tempPath,originalname} = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length-1];
        const newPath = `${tempPath}.${ext}`;

        fs.renameSync(tempPath,newPath);
        // uploadedFiles.push(newPath.replace('uploads/',''));
        uploadedFiles.push(path.basename(newPath));
        console.log(uploadedFiles);
        
    }

    res.json(uploadedFiles);
})

 
 
app.post("/places", async(req,res)=>{
    const userId = req.user.id;
    
    const {title, type, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests,price, bedrooms,bathrooms,beds} = req.body;
    console.log("before",addedPhotos);
    const flattenArray = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
    const flattenedPhotos = flattenArray(addedPhotos);
    console.log("after",flattenedPhotos);


    try {
        const result = await db.query(
            `INSERT INTO places (user_id, title, type, address, description, extra_info, check_in, check_out, max_guests, perks, photos, price,bedrooms,bathrooms,beds)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *`,
            [userId, title, type, address, description, extraInfo, checkIn, checkOut, maxGuests, perks, flattenedPhotos,price,bedrooms,bathrooms,beds]
        );

        const place = result.rows[0];
        console.log(place);
        res.status(201).json({ place });
    } catch (err) {
        console.error('Error inserting place:', err);
        res.status(500).json({ error: "Internal Server Error" });
    }


})

app.get("/user-places", async(req,res)=>{
    const userId = req.user.id;
    try {
        const result = await db.query("SELECT * FROM places WHERE user_id = $1 ORDER BY id DESC", [userId]);
        res.json(result.rows);
    } catch (error) {
        console.log("Cannot get places",error);
    }
})



app.get("/places/:id", async(req,res)=>{
    const {id} = req.params;
    try {
        const result = await db.query("SELECT * FROM places WHERE id = $1", [id]);
        if(result.rows.length===0){
            return res.status(404).json({error:"Place not found"});
        }
        console.log(result.rows[0]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching place:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


app.put('/places/:id', async (req, res) => {
    const { id } = req.params;
    const { title, type, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests,price, bedrooms,bathrooms,beds } = req.body;
    //   console.log(title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests);


      console.log("before",addedPhotos);
    const flattenArray = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
    const flattenedPhotos = flattenArray(addedPhotos);
    console.log("after",flattenedPhotos);

    try {
      const result = await db.query(
        `UPDATE places 
         SET title = $1,  address = $2, photos = $3, description = $4, perks = $5, extra_info = $6, check_in = $7, check_out = $8, max_guests = $9 ,price = $10,bedrooms = $11,bathrooms = $12,beds = $13,type = $14
         WHERE id = $15
         RETURNING *`,
        [title, address, flattenedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price, bedrooms,bathrooms,beds, type, id]
      );
  
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Place not found' });
      }
  
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Error updating place:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


app.get('/places', async (req, res)=>{
    try {
        const result = await db.query("SELECT * FROM places ORDER BY id DESC");
        res.json(result.rows);
    } catch (error) {
        
    }
  
})

app.post('/bookings', async(req,res)=>{
    const {userId, placeId, checkIn, checkOut, numberOfGuests, name, phone, email, price} = req.body;
    console.log(userId, placeId, checkIn, checkOut, numberOfGuests, name, phone, email, price);
    try {
        const result = await db.query("INSERT INTO booking_details (user_id, place_id, check_in, check_out, name, phone,price, mail,num_guests ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *", [userId, placeId, checkIn, checkOut, name,phone, price, email,numberOfGuests]);
        console.log("success")
     res.json(result.rows[0]);
    } catch (error) {
        console.log(error);
    }
     
})

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
