import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PlaceGallery from "./PlaceGallery";
import TypeAddress from "./TypeAddress";
 
import DateBooking from "./DateBooking";

export default function BookingSinglePage() {
    const { id } = useParams();
    const [booking, setBooking] = useState(null);
    useEffect(() => {
        axios.get('/bookings').then((res) => {
            const foundBooking = res.data.find((id) => id === id)
            if (foundBooking) {
                setBooking(foundBooking)
            }
        })
    }, [id]);

    if (!booking) {
        return <h1>Booking not found</h1>
    }

    
    return (
        <div className="bg-gray-50 -mx-8">
            <div className=" w-7/12 mx-auto  py-3">

                <div>
                    <h1 className="text-3xl">{booking.title}</h1>
                </div>
                <div className="flex bg-gray-100 my-6 rounded-xl hover:drop-shadow-lg transition-all duration-500 justify-between">
                    <div className="flex flex-col">
                    <h2 className="pt-2 px-4 -mb-1 text-xl">Your booking information</h2>

                    <DateBooking booking={booking}/>
                </div>
                <div className="flex flex-col p-4">
                   

                </div>
                </div>
                
                 
                <PlaceGallery details={booking} />
                <TypeAddress details={booking} />
            </div>

        </div>
    )
}