import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import AccountNav from "../../AccountNav";
import axios from "axios";
 
export default function PlacesPage() {
  // const { action } = useParams();





  const [placesR, setPlacesR]= useState([]);
  


 

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const response = await axios.get('/user-places');
        setPlacesR(response.data);
      } catch (error) {
        console.error('Error fetching places:', error.response ? error.response.data : error.message);
      }
    }

    fetchPlaces();
  }, []);

   

  return (
    
      <div>  
      <AccountNav/>
      
        <div className="text-center">
          <Link
            className=" text-center inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
            to={"/account/places/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new place
          </Link>
        </div>
           <div>
           { placesR.length > 0 && (
        <div className="mt-4 flex flex-col">
         {placesR.map((place,inx)=>( 
            <Link to={'/account/places/'+place.id} key={inx} className="flex gap-4 my-4 cursor-pointer bg-gray-100">
                <div className="flex w-40 gap-4 bg-gray-100 overflow-hidden  ">  
              {place.photos.length>0 && place.photos.map((photo,inx)=>(
                <div key={inx} className=" w-36 h-32  flex gap-4 grow shrink-0 " >
                  <img  className=" object-cover " src={`http://localhost:4000/uploads/${photo}`} alt="" />
                </div>
              ))}
           </div>
           <div className="grow-0 shrink">  

             <h2 className="text-xl">{place.title}</h2>
              <p className="text-sm mt-2">{place.description}</p>
           </div>
             
            </Link>
         ))}
        </div>
      )}
           </div>
        
     

      
    </div>
  );
}
