CREATE TABLE places (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    title TEXT,
    address TEXT,
    description TEXT,
    extra_info TEXT,
    check_in TEXT,
    check_out TEXT,
    max_guests INT
);

-- Perks Table
CREATE TABLE perks (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    place_id INT REFERENCES places(id) ON DELETE CASCADE,
);

 

-- Photos Table
CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    place_id INT REFERENCES places(id) ON DELETE CASCADE,
    photo_url TEXT
);