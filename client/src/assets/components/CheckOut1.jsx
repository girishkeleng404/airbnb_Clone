
import { useContext, useEffect, useState } from "react";
import Popup from "reactjs-popup";
// import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import { UserContext } from "../../UserContex";
import { differenceInCalendarDays } from 'date-fns'
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";




export default function CheckOut1({ checkIn, checkOut, numberOfGuests, name, phone, email, check ,setPopUp, setCheckOut, setCheckIn, setNumberOfGuests, setName, setPhone, setEmail , }) {

    const [isOpenDate, setIsOpenDate] = useState(false);
    const [isOpenGuest, setIsOpenGuest] = useState(false);
    const [isOpenName, setIsOpenName] = useState(false);
    const [isOpenPhone, setIsOpenPhone] = useState(false);
    const [isOpenEmail, setIsOpenEmail] = useState(false);
    const[placeData, setPlaceData] = useState([])
    const [redirect, setRedirect] = useState();
    let rent = 10000;

    let numberOfDays = 0;



    {
        checkIn && checkOut && (
            numberOfDays = differenceInCalendarDays(new Date(checkOut), new Date(checkIn))
        );
    }

    const {user} = useContext(UserContext)
    const {id} = useParams()



useEffect(()=>{
    axios.get(`/places/${id}`).then((res)=>{
        setPlaceData(res.data)
        console.log(res.data)
    })
},[])


 async function bookThisPlace(){
    
        const response = await axios.post('/bookings', {
            userId: user.id,
            placeId: id,
            checkIn: checkIn,
            checkOut: checkOut,
            numberOfGuests: numberOfGuests,
            name: name,
            phone: phone,
            price:numberOfDays * rent,
            email: email
        });
      const bookingId = response.data.id;
      setRedirect(`/account/bookings/${bookingId}`)
  }

if(redirect){
    return <Navigate to={redirect}/>
}

    return (
        <div className="">
            <div className="grid grid-cols-2">
                <div className=" flex flex-col ">
                    <div className="relative flex items-center justify-start ">
                        <button onClick={() => setPopUp(false)} className="bg-transparent absolute -left-8">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <h1 className="text-2xl px-2">Request to book</h1>
                    </div>
                    <div className="my-4 text-xl">
                        <h1>Your trip</h1>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <h2>Dates</h2>
                            <p className="text-sm">{checkIn} - {checkOut}</p>
                        </div  >
                      
                        <button onClick={() => setIsOpenDate(true)} className="bg-primary text-white font-bold py-2 px-4 rounded">
                            Edit
                        </button>
                       
                        <Popup open={isOpenDate} closeOnDocumentClick onClose={() => setIsOpenDate(false)}>
                            <div className="popup-content p-4 bg-white rounded drop-shadow-2xl">
                                <h3 className="text-2xl font-semibold my-2">Edit Dates</h3>
                                <div className="my-2 grid grid-cols-2">
                                    <label>Check-in:</label>
                                    <input 
                                        type="date"
                                        value={checkIn}
                                        onChange={(e) => setCheckIn(e.target.value)}
                                        className="border p-1 rounded"
                                    />
                                </div>
                                <div className="my-2 grid grid-cols-2">
                                    <label>Check-out:</label>
                                    <input
                                        type="date"
                                        value={checkOut}
                                        onChange={(e) => setCheckOut(e.target.value)}
                                        className="border p-1 rounded"
                                    />
                                </div>
                                <button onClick={() => setIsOpenDate(false)} className="mt-2 bg-primary text-white font-semibold py-1 px-2 rounded-lg">
                                  Save
                                </button>
                            </div>
                        </Popup>
       
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col my-8">
                            <h2 className="text-xl">Guests</h2>
                            <p>{numberOfGuests} {numberOfGuests>1 ? "guests" : "guest"} </p>
                        </div>
                        
                        <button onClick={() => setIsOpenGuest(true)} className="bg-primary text-white font-bold py-2 px-4 rounded">
                            Edit
                        </button>
                        <Popup open={isOpenGuest} closeOnDocumentClick={false} onClose={()=>isOpenGuest(false)}>
                                  <div className="popup-content p-4 bg-white rounded shadow-lg">
                                    <h3 className="text-2xl font-semibold">Guests</h3>
                                    <div>
                                    <label>Number of guests</label>
                                    <input
                                        type="number"
                                        value={numberOfGuests}
                                        onChange={(e) => setNumberOfGuests(e.target.value)}
                                        className="border p-1 rounded"
                                    />
                                </div>

                                  <button className="bg-primary text-white font-semibold py-1 px-2 rounded-lg" onClick={()=>setIsOpenGuest(false)}>Save</button>
                                  </div>
                        </Popup>
                        
                    </div>

                        <div className="flex items-center justify-between">
                        <div className="flex flex-col my-8">
                            <h2 className="text-xl">Name</h2>
                            <p>{name} </p>
                        </div>
                        
                        <button onClick={() => setIsOpenName(true)} className="bg-primary text-white font-bold py-2 px-4 rounded">
                            Edit
                        </button>
                        <Popup open={isOpenName} closeOnDocumentClick={false} onClose={()=>isOpenName(false)}>
                                  <div className="popup-content p-4 bg-white rounded shadow-lg">
                                    <h3 className="text-2xl font-semibold">Name</h3>
                                    <div>
                                    <label>Edit your name here</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="border p-1 rounded"
                                    />
                                </div>

                                  <button className="bg-primary text-white font-semibold py-1 px-2 rounded-lg" onClick={()=>setIsOpenName(false)}>Save</button>
                                  </div>
                        </Popup>
                        </div>
                        <div className="flex items-center justify-between">
                        <div className="flex flex-col my-8">
                            <h2 className="text-xl">Phone number</h2>
                            <p>{phone} </p>
                        </div>
                        
                        <button onClick={() => setIsOpenPhone(true)} className="bg-primary text-white font-bold py-2 px-4 rounded">
                            Edit
                        </button>
                        <Popup open={isOpenPhone} closeOnDocumentClick={false} onClose={()=>isOpenPhone(false)}>
                                  <div className="popup-content p-4 bg-white rounded shadow-lg">
                                    <h3 className="text-2xl font-semibold">Phone number</h3>
                                    <div>
                                    <label>Edit your phone number here</label>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="border p-1 rounded"
                                    />
                                </div>

                                  <button className="bg-primary text-white font-semibold py-1 px-2 rounded-lg" onClick={()=>setIsOpenPhone(false)}>Save</button>
                                  </div>
                        </Popup>
                        </div>

               <hr className="border-gray-400" />
                      {/* <RegisterPage/> */}
                      {!user && <LoginPage/>}
                      {user && (
                    <button   onClick={() => {
                        if (checkIn && checkOut && numberOfGuests && name && phone) {
                            bookThisPlace();
                        } else {
                            alert('Please fill all the data');
                        }
                    }}  className= "mt-12  bg-primary text-white font-semibold py-1 px-2 rounded-lg">
                          Continue
                        </button>
                      )}
                      
                </div>
                
                <div className="h-screen flex items-start justify-center">



                    <div className=" w-9/12 h-2/5 mt-20 border border-gray-300 rounded-xl shadow-2xl py-4 px-6"> 

                    <div className="flex flex-col">
                        <div className=" grid grid-cols-3 my-3">
                            <div className="col-span-1 ">
                                 <img className=" w-9/12 object-cover aspect-square rounded-lg " src={`http://localhost:4000/uploads/${placeData.photos?.[2]}`} alt="photo" />
                            </div>
                            <div className="col-span-2">
                                <h1 className="text-lg font-semibold">{placeData.title}</h1>
                                <p className="text-sm">Entire {placeData.type} </p>
                                <p>Rating and reviews</p>
                            </div>

                       
                       </div>
                       <hr className="border-gray-300 my-4" />

                       <div className="mb-4 mt-2">
                        <h1 className="text-2xl font-semibold">Price details</h1>
                       </div>
                       <div className="flex justify-between text-gray-600">
                        <span>{placeData.price} x {numberOfDays} night</span>
                        <span>₹ {rent * numberOfDays}</span>
                       </div>
                       <div className="flex justify-between text-gray-600">
                        <span>AirBnb service </span>
                        <span>₹ {rent * numberOfDays/5}</span>
                       </div>
                       <hr  className="border-gray-300 my-4"/>
                       <div className="flex justify-between text-gray-900">
                        <span className="font-semibold text-lg">Total (INR) </span>
                        <span className="font-semibold">₹ { (rent * numberOfDays) + (rent * numberOfDays/5)}</span>
                       </div>

                    </div>
                     
                    </div>


                </div>
 
            </div>

        </div>
    )
}