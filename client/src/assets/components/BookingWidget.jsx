import { useState } from "react"
import { differenceInCalendarDays } from 'date-fns'
import { Popup } from 'reactjs-popup'


export default function BookingWidget({ details, setPopUp,checkIn,checkOut,numberOfGuests,name,phone,email,setCheckIn,setCheckOut,setNumberOfGuests,setEmail,setName,setPhone }) {

    // const [checkIn, setCheckIn] = useState('');
    // const [checkOut, setCheckOut] = useState('');
    // const [numberOfGuests, setNumberOfGuests] = useState('');
    
    // const[name, setName]= useState('');
    // const[phone, setPhone] = useState('');
    // const [email, setEmail] = useState('');

    let numberOfDays = 0;



    {
        checkIn && checkOut && (
            numberOfDays = differenceInCalendarDays(new Date(checkOut), new Date(checkIn))
        );
    }

    
    //  if(popUp){
    //     return(
    //         <div>
    //         <div className="h-full bg-red">
    //             Fuck
    //         </div>
    //     </div>
    //     )
    //  }


    return (

        <div className=" h-auto px-4 py-6 border border-gray-300 shadow-2xl  rounded-2xl">
            <span className="text-2xl  "> ${details.price} night</span>
            <div className=" border mt-5 rounded-lg" >
                <div className="flex border  ">
                    <div className="px-3 ">
                        <label className="text-xs" > Check in:</label>
                        <input className="text-sm" type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)} />
                    </div>
                    <div className="px-3 border-l border-gray-400">
                        <label className="text-xs " > Check out:</label>
                        <input className="text-sm" type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)} />
                    </div>
                </div>
                <div className="w-full px-3">
                    {/* <label className="text-sm">GUESTS</label> */}
                    <input className="outline-none" type="number" placeholder="Guests"
                        value={numberOfGuests}
                        onChange={(e) => setNumberOfGuests(e.target.value)} />
                    {/* <select className="w-full h-8 py-3 bg-transparent" name="guests" id="guests">
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adult</option>
                </select> */}
                </div>

            </div>

            {/* <button onClick={()=>setPopUp(true)} className="bg-primary text-white w-full p-3 mt-4 rounded-2xl">
                Reserve
            </button> */}
            {/* <button className="bg-primary text-white w-full p-3 mt-4 rounded-2xl">
               
            </button> */}
             <Popup className="bg-primary text-white w-full p-3 mt-4 rounded-2xl "
              trigger={<button  className="bg-primary text-white w-full p-3 mt-4 rounded-2xl"> Reserve</button>} position="top">
                <div className="md:h-7/12 md:w-5/12 sm:w-6/12 backdrop-blur-xl bg-white/30 py-12 px-8 rounded-xl opacity-95 drop-shadow-2xl ">
                     <label  >Name :</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="  " type="text" />
                    <label  >Phone number :</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className=" " type="text" />
                    <label  >Email :</label>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} className="  " placeholder="optional" type="tel" />
                    <button onClick={()=>setPopUp(true)} className="bg-primary text-white w-full p-3 mt-4 rounded-2xl">Next</button>
                    
                    
                   
                </div>
            </Popup>
            



            <p className="text-sm text-center pt-2">You won't be charged yet</p>
            <div className="flex justify-between px-2 mt-4  text-gray-700">

                <span className="text-md text-gray-700 underline">{details.price + ' x ' + numberOfDays + ' nights'} </span>
                <span>  ₹{details.price * numberOfDays}</span>
            </div>
            {numberOfDays > 1 && (
                <div className="flex justify-between px-2 py-1   text-gray-800">
                    <span className="underline text-gray-700"> Cleaning fee</span>
                    <span>  ₹{details.price / 10}</span>
                </div>
            )}
            <div className="flex justify-between px-2  text-gray-800">
                <span className="underline text-gray-700"> AirBnb service fee</span>
                <span>  ₹{details.price * numberOfDays / 5}</span>
            </div>
            <hr className="my-6 border-gray-600" />
            <div className="flex justify-between px-2  text-gray-600">
                <span className=" font-semibold text-gray-700"> Total before taxes</span>
                <span className="font-semibold">  ₹{(details.price * numberOfDays / 5) + (details.price * numberOfDays) + (numberOfDays > 1 ? details.price / 10 : 0)} </span>
            </div>


        </div>
    )
}