import { useEffect, useState  } from "react"
import PhotosUploader from "../../PhotosUploader";
import Perks from "../../Perks";
import AccountNav from "../../AccountNav";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
export default function PlacesFormPage() {

    const {id} = useParams();
    console.log(id);
   
  
  const [error, setError] = useState(null);

    
    const [title, setTitle] = useState("");
    const [type, setType] = useState('');
    const [address, setAddress] = useState("");
    const [addedPhotos, setAddedPhotos] = useState([]);
    // const [photoLink, setPhotoLink] = useState("");
    const [description, setDescription] = useState("");
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [maxGuests, setMaxGuests] = useState(1);
    const [price, setPrice]= useState(100);
    const [bedrooms, setBedrooms] = useState('');
    const [beds, setBeds] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [redirect,setRedirect] = useState(false);

  useEffect(()=>{
           if(!id){
            return;
           } 
           const fetchData = async () => {
            try {
              const response = await axios.get(`/places/${id}`);
              setTitle(response.data.title);
              setType(response.data.type);
              setAddress(response.data.address);
              setAddedPhotos(response.data.photos);
              setDescription(response.data.description);
              setPerks(response.data.perks);
              setExtraInfo(response.data.extra_info);
              setCheckIn(response.data.check_in);
              setCheckOut(response.data.check_out);
              setMaxGuests(response.data.max_guests);
              setBedrooms(response.data.bedrooms);
              setBeds(response.data.beds);
              setBathrooms(response.data.bathrooms);
              setPrice(response.data.price);
            } catch (err) {
              setError(err.message);
            }  
          };
      
          fetchData();
  },[id]);



      

      function inputHeader(text) {
        return <h2 className="text-2xl mt-4">{text}</h2>;
      }
      function inputDescription(text) {
        return <p className="text-gray-500 text-sm">{text}</p>;
      }
      function preInput(header, description) {
        return (
          <div>
            {inputHeader(header)}
            {inputDescription(description)}
          </div>
        ); 
      }









     async function savePlace(ev) {
        ev.preventDefault();
        const placeData = {
          title,type, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests,price,bedrooms,beds,bathrooms
        }
         if(id){
         await axios.put(`/places/${id}`,{ ...placeData  })  // id could also be a data like placeData
         } else{
          const { data } = axios.post('/places', placeData);   // of as a object {...placeData}
         }


        
     
         
        setRedirect(true);
    
      }
      if(redirect){
        return <Navigate to={"/account/places"}/>
      }

    return(
        <div>
          <AccountNav/>
        <form onSubmit={savePlace}>
          {preInput("Title", "Title for your place like a name of you place")}

          <input type="text" placeholder="title" value={title} onChange={ev => setTitle(ev.target.value)} />

          {preInput("Type", "Villa, apartment, house,etc")}
          <input type="text" placeholder="Apartment" value={type} onChange={ev => {setType(ev.target.value)}} />


          {preInput("Address", "Address for your place")}

          <input type="text" placeholder="address" value={address} onChange={ev => setAddress(ev.target.value)} />

          {preInput(
            "Add a photo",
            "Click here to add a photo to your place."
          )}
          <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />


          {preInput("description", "description for your place")}
          <textarea value={description} onChange={ev => setDescription(ev.target.value)} />

          {preInput("Perks", "Select all the perks")}
          <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">

            <Perks selected={perks} onChange={setPerks} />
          </div>


          {preInput("Extra info", "House rules, etc")}

          <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />

          {preInput(
            "Check in&out times, max guests",
            "Add checkIn and checkOut times, remember"
          )}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div>
              <h3 className="mt-2 -mb-1">Check in time</h3>
              <input type="text" placeholder="14" value={checkIn} onChange={ev => setCheckIn(ev.target.value)} />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Check out time</h3>
              <input type="text" placeholder="11" value={checkOut} onChange={ev => setCheckOut(ev.target.value)} />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Max guests</h3>
              <input type="number" value={maxGuests} onChange={ev => setMaxGuests(ev.target.value)} />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Bedrooms</h3>
              <input type="number" value={bedrooms} onChange={ev => setBedrooms(ev.target.value)} />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Bathrooms</h3>
              <input type="number" value={bathrooms} onChange={ev => setBathrooms(ev.target.value)} />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Beds</h3>
              <input type="number" value={beds} onChange={ev => setBeds(ev.target.value)} />
            </div>

            <div>
              <h3 className="mt-2 -mb-1">Price per night</h3>
              <input type="number" value={price} onChange={ev => setPrice(ev.target.value)} />
            </div>
          </div>
          <button className="primary my-4">Save</button>
        </form>
      </div>
    );
}