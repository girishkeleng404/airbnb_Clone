import { Link, Navigate } from "react-router-dom"
import axios from "axios"
import { useContext, useState } from "react";
import { UserContext } from "../../UserContex";
export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
     const {setUser} = useContext(UserContext);

     async function handleSubmit(ev){
         ev.preventDefault();
        try {
            
      const {data} = await axios.post('/login',{
        email, password
      });
      setUser(data);
      alert("Login successfully done");
      setRedirect(true);
        } catch (error) {
            alert("Login failed in jsx", error);
        }
  
     }

     if(redirect){
        return <Navigate to={'/'}/>
     }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-44" >
                <h1 className="text-4xl text-center mb-4 ">Login</h1>
                <form className="max-w-md mx-auto " onSubmit={handleSubmit} >
                    <input type="email" 
                        placeholder="email"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                    />
                    <input type="password" name="" id="" 
                        placeholder="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
                    <button className="primary">Login</button>
                    <div className="mt-2 text-center text-gray-500">
                        do not have an account yet? <Link to={'/register'} className="underline text-black" >Register now</Link>
                    </div>
                </form>

            </div>

        </div>
    );
}