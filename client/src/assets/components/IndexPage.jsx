import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

 
export default function IndexPage() {

  const [places, setPlaces]=useState([]);

  useEffect(()=>{
    axios.get('/places').then(response=>{
     setPlaces( response.data );
    })


  },[])

    return(
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8 mt-12 w-11/12 m-auto">
    {places.length > 0 && places.map((place,inx)=>(
      <Link to={'/details/'+place.id} key={inx}>
        <div className="bg-gray-500 min-h-32 rounded-2xl overflow-hidden flex items-center justify-center mb-2  ">
           {place.photos?.[0] && (
          <img className="object-cover w-full rounded-2xl aspect-square" src= {`http://localhost:4000/uploads/${place.photos?.[0]}`} alt="" />
        )}
        </div>
       
        <h2 className="font-bold truncate leading-4">{place.address}</h2>
        <h3 className="text-sm leading-6">{place.title}</h3>
        <div className="mt-1">
          <span className="font-bold"> ₹ {place.price}  </span>
         night
        </div>
      </Link>
       
    ))}

      </div>
    );
}