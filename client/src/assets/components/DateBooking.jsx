import { differenceInCalendarDays, format } from "date-fns";

export default function DateBooking({booking}) {
    const prices = Number(booking.price) + (Number(booking.price) / 5);
    return (
        <div className="py-2 px-4 grow">
         
        {/* <p>{booking.address}</p> */}
        {/* {booking.place_id} */}
        <div>
            <div className=" flex gap-1 text-gray-700 text-md  pt-2 pb-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>

            {format(new Date(booking.check_in), 'dd/MM/yyyy')}  -    {format(new Date(booking.check_out), 'dd/MM/yyyy')}
        </div>
        <div className="text-gray-700 text-sm">
            {differenceInCalendarDays(new Date(booking.check_out), new Date(booking.check_in))} nights | Total price : 
            ₹{prices}
        </div>
        </div>
        



    </div>
    )
}