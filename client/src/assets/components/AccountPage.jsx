import { useContext, useState } from "react"
import { UserContext } from "../../UserContex"
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../../AccountNav";
import ProfielInfor from "./profileInfor";

export default function Profilepage() {

    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext);
    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/logout');

        setRedirect('/');
        setUser(null);

    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    if (!ready) {
        return "Loading..."
    }
    if (ready && !user) {
        return <Navigate to={'/login'} />
    }


    // console.log(subpage);
   
    return (
        <div>
            <AccountNav/>

            {subpage === 'profile' && (
                <div>

                     <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.username} ({user.email}) <br />
                    <button onClick={logout} className="primary max-w-sm mt-2"  >Logout</button>
                </div>
                <div className="w-4/12 m-auto bg-gray-50">
                    {/* <ProfielInfor/> */}
                </div>
                </div>
               
            )}
            {subpage === "places" && (
                <PlacesPage />
            )}
        </div>
    )



}