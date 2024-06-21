export default function InformationPage({details}) {
    return (
      
        <div className="border py-5 px-6 flex items-center gap-8 rounded-2xl my-12   justify-around">
        <div className="w-12 overflow-hidden">
            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.639 31.64" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M3.196,16.127c0,0,0.589-1.382-0.406-2.824c-0.996-1.443-2.501-1.696-2.501-1.696s-0.647,1.634,0.323,3.038 C1.583,16.054,3.196,16.127,3.196,16.127z"></path> <path d="M5.882,16.292c0,0,1.523-0.533,2.049-2.16c0.527-1.624-0.563-3.001-0.563-3.001S6,11.804,5.459,13.472 C4.92,15.139,5.882,16.292,5.882,16.292z"></path> <path d="M6.522,18.091c-0.316,1.725,0.787,2.741,0.787,2.741s1.441-0.729,1.752-2.408c0.307-1.682-0.953-2.903-0.953-2.903 S6.841,16.366,6.522,18.091z"></path> <path d="M10.069,23.767c0,0,1.367-0.861,1.518-2.562c0.148-1.701-1.221-2.801-1.221-2.801s-1.184,0.961-1.338,2.707 C8.875,22.856,10.069,23.767,10.069,23.767z"></path> <path d="M13.692,26.503c0,0,1.062-1.219,0.716-2.891c-0.348-1.674-1.976-2.332-1.976-2.332s-0.857,1.263-0.502,2.979 C12.286,25.976,13.692,26.503,13.692,26.503z"></path> <path d="M4.375,12.533c0,0,1.257-0.821,1.229-2.574c-0.027-1.751-1.14-2.798-1.14-2.798S3.021,8.16,3.048,9.869 C3.075,11.577,4.375,12.533,4.375,12.533z"></path> <path d="M4.114,19.625c0,0,0.154-1.492-1.221-2.577c-1.377-1.086-2.889-0.883-2.889-0.883s-0.139,1.752,1.203,2.809 C2.55,20.032,4.114,19.625,4.114,19.625z"></path> <path d="M6.199,22.915c0,0-0.182-1.491-1.763-2.243c-1.584-0.753-3.013-0.218-3.013-0.218s0.255,1.736,1.796,2.47 C4.764,23.657,6.199,22.915,6.199,22.915z"></path> <path d="M6.358,23.821c-1.736-0.237-2.938,0.701-2.938,0.701s0.77,1.58,2.462,1.813c1.692,0.231,2.834-0.911,2.834-0.911 S8.095,24.06,6.358,23.821z"></path> <path d="M9.8,26.457c-1.752-0.027-2.83,1.05-2.83,1.05s0.951,1.479,2.659,1.505c1.709,0.027,2.706-1.243,2.706-1.243 S11.554,26.485,9.8,26.457z"></path> <path d="M4.803,13.47l-0.82-0.166c-0.018,0.089-1.667,9,11.177,15.211l0.363-0.752C3.294,21.849,4.734,13.81,4.803,13.47z"></path> <path d="M22.606,12.493c0-0.99,0.055-8.198,0.055-8.198l0.005-0.578L22.126,3.51c-0.095-0.036-2.338-0.882-6.302-0.882 c-0.006,0-0.01,0-0.016,0v0.005c-3.96,0.001-6.2,0.846-6.295,0.882L8.975,3.722L8.98,4.3c0,0,0.055,7.208,0.055,8.198 c0,1.517,2.294,5.901,6.672,5.901c0.043,0,0.083-0.006,0.126-0.006v-0.005c0.034,0.003,0.067,0.005,0.103,0.005 C20.313,18.396,22.606,14.01,22.606,12.493z M10.704,12.498c0-0.813-0.038-5.819-0.051-7.591c0.835-0.228,2.611-0.605,5.163-0.605 c0.006,0,0.01,0,0.016,0V4.297c2.547,0.001,4.321,0.378,5.155,0.605c-0.013,1.771-0.051,6.777-0.051,7.591 c-0.006,0.58-1.539,4.232-5.002,4.232c-0.043,0-0.083-0.006-0.126-0.007v0.007c-0.034,0.002-0.067,0.004-0.103,0.004 C12.243,16.731,10.71,13.078,10.704,12.498z"></path> <path d="M28.444,16.122c0,0,1.613-0.073,2.584-1.481c0.971-1.404,0.323-3.038,0.323-3.038s-1.505,0.253-2.501,1.695 C27.855,14.74,28.444,16.122,28.444,16.122z"></path> <path d="M25.758,16.287c0,0,0.963-1.153,0.424-2.82c-0.541-1.668-1.909-2.341-1.909-2.341s-1.09,1.377-0.563,3.001 C24.235,15.754,25.758,16.287,25.758,16.287z"></path> <path d="M22.579,18.419c0.312,1.68,1.752,2.408,1.752,2.408s1.104-1.018,0.787-2.741c-0.318-1.725-1.586-2.57-1.586-2.57 S22.272,16.737,22.579,18.419z"></path> <path d="M21.274,18.399c0,0-1.369,1.1-1.222,2.801c0.15,1.701,1.519,2.562,1.519,2.562s1.194-0.908,1.041-2.656 C22.458,19.358,21.274,18.399,21.274,18.399z"></path> <path d="M17.232,23.606c-0.346,1.672,0.716,2.892,0.716,2.892s1.406-0.527,1.762-2.244c0.355-1.716-0.502-2.979-0.502-2.979 S17.58,21.935,17.232,23.606z"></path> <path d="M27.266,12.528c0,0,1.3-0.956,1.326-2.664c0.027-1.709-1.417-2.708-1.417-2.708s-1.111,1.047-1.14,2.798 C26.008,11.707,27.266,12.528,27.266,12.528z"></path> <path d="M31.635,16.16c0,0-1.512-0.203-2.889,0.883c-1.375,1.085-1.221,2.577-1.221,2.577s1.563,0.406,2.906-0.651 C31.774,17.912,31.635,16.16,31.635,16.16z"></path> <path d="M27.204,20.667c-1.581,0.752-1.763,2.243-1.763,2.243s1.436,0.741,2.979,0.009c1.541-0.732,1.796-2.471,1.796-2.471 S28.788,19.914,27.204,20.667z"></path> <path d="M25.282,23.815c-1.736,0.237-2.358,1.604-2.358,1.604s1.143,1.144,2.834,0.911c1.692-0.233,2.463-1.812,2.463-1.812 S27.019,23.579,25.282,23.815z"></path> <path d="M19.306,27.763c0,0,0.996,1.271,2.706,1.244c1.708-0.027,2.658-1.505,2.658-1.505s-1.078-1.077-2.83-1.05 C20.086,26.481,19.306,27.763,19.306,27.763z"></path> <path d="M27.658,13.299l-0.82,0.166c0.068,0.34,1.51,8.379-10.719,14.293l0.363,0.752C29.325,22.299,27.675,13.388,27.658,13.299z "></path> </g> </g> </g></svg>

        </div>
        <h1 className="text-xl font-semibold">One of the most loved homes on <br /> Airbnb, acording to guests</h1>
        <div>
            <h1 className="text-3xl pb-1">4.93</h1>
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3">
                    <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3">
                    <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3">
                    <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3">
                    <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3">
                    <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
                </svg>


            </div>



        </div>

        <div className=' border-l border-gray-600 pl-12'>

            <h1 className="text-3xl  ">45</h1>
            <p className="text-sm underline">Reviews</p>
        </div>







    </div>
    )
}