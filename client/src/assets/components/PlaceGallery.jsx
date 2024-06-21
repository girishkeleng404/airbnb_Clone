import { useState } from "react";

export default function PlaceGallery({details}) {

    const [showAllPhotos, setShowAllPhotos] = useState(false);
    const [image, setImage] = useState('');



    if (showAllPhotos) {
        return (
            <div className="absolute inset-0 bg-white ">
                <div className="p-8 gird  gap-2">
                    <div className=" grid grid-cols-2">
                        <button onClick={() => setShowAllPhotos(false)} className="fixed bg-transparent text-black   grid grid-cols-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                                


                        </button>
                    </div>
                    <div className="w-7/12 grid grid-cols-3 m-auto gap-2">
                        {details.photos.length > 0 && details.photos.map((photo, index) => (
                            <button className=" h-min object-cover flex " onClick={() => setImage(photo)} key={index}>

                                <img className="oject-contain h-min" src={`http://localhost:4000/uploads/${photo}`} alt="" />
                            </button>

                        ))}
                    </div>


                </div>



                {image.length > 0 && (

                    <div className="fixed inset-0 bg-black pt-8">

                        <div className=" ">
                            <button onClick={() => setImage('')} className="fixed bg-transparent text-white ml-8 py-1 px-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>

                            </button>
                        </div>

                        <div className=" flex items-center justify-center h-5/6 w-10/12 m-auto">


                            <div className="h-7/12 w-7/12 m-auto">

                                <img className=" object-conver" src={`http://localhost:4000/uploads/${image}`} alt="" />

                            </div>
                        </div>


                    </div>

                )}


            </div>




        );
    }


    return (
        <div className="relative rounded-xl mt-10 overflow-hidden shadow-lg shadow-gray-500 ">
        <div className="grid gap-2 grid-cols-2 rounded-xl overflow-hidden">

            <div className="flex items-center justify-center">
                {details.photos?.[0] && (
                    <img onClick={() => setShowAllPhotos(true)} className="object-cover aspect-square cursor-pointer " src={`http://localhost:4000/uploads/${details.photos?.[0]}`} alt="" />
                )}
            </div>

            <div className="grid gap-2">
                <div className=" grid gap-2 grid-cols-2 overflow-hidden">

                    <div className="flex items-center justify-center overflow-hidden">
                        {details.photos?.[1] && (
                            <img onClick={() => setShowAllPhotos(true)} className="object-cover aspect-square relative  cursor-pointer   " src={`http://localhost:4000/uploads/${details.photos?.[1]}`} alt="" />
                        )}
                    </div>
                    <div className="flex items-center justify-center overflow-hidden">
                        {details.photos?.[2] && (
                            <img onClick={() => setShowAllPhotos(true)} className="object-cover aspect-square relative   cursor-pointer  " src={`http://localhost:4000/uploads/${details.photos?.[2]}`} alt="" />
                        )}
                    </div>


                </div>


                <div className=" grid gap-2 grid-cols-2 overflow-hidden">

                    <div className="flex items-center justify-center overflow-hidden">
                        {details.photos?.[3] && (
                            <img onClick={() => setShowAllPhotos(true)} className="object-cover aspect-square relative   cursor-pointer " src={`http://localhost:4000/uploads/${details.photos?.[3]}`} alt="" />
                        )}
                    </div>
                    <div className="flex items-center justify-center overflow-hidden">
                        {details.photos?.[4] && (
                            <img onClick={() => setShowAllPhotos(true)} className="object-cover aspect-square relative  cursor-pointer " src={`http://localhost:4000/uploads/${details.photos?.[4]}`} alt="" />
                        )}
                    </div>


                </div>
            </div>


        </div>

        <button onClick={() => setShowAllPhotos(true)} className="  gap-1 flex absolute bottom-3 right-3 py-1 px-4 bg-white opacity-80 rounded-md shadow-md shadow-gray-800">
            <svg className="w-7" viewBox="-6.24 -6.24 36.48 36.48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#464646" strokeWidth="0.00024000000000000003" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z" fill="#464646"></path> <path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z" fill="#464646"></path> <path d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z" fill="#464646"></path> <path d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z" fill="#464646"></path> <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#464646"></path> <path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z" fill="#464646"></path> <path d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z" fill="#464646"></path> <path d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z" fill="#464646"></path> <path d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z" fill="#464646"></path> </g></svg>

            Show all Photos
        </button>

    </div>

    )
}