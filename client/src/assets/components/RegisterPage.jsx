import { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"

export default function RegisterPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(ev) {
        ev.preventDefault();
        try {
            await axios.post('/register', {
                name,
                email,
                password,
            });
            alert("Registration successfully done")
        } catch (error) {
            alert("Registration failed", error)
        }

        // .then(response => {
        //     console.log(response.data);
        // })
        // .catch(error => {
        //     console.error('There was an error!', error);
        // });
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-44" >
                <h1 className="text-4xl text-center mb-4 "  >Register</h1>
                <form className="max-w-md mx-auto " onSubmit={handleSubmit} >
                    <input type="text"
                        placeholder="Pussy"
                        value={name}
                        onChange={ev => setName(ev.target.value)}
                    />
                    <input type="email"
                        placeholder="email"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                    />
                    <input type="password"
                        placeholder="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
                    <button className="primary">Register</button>
                    <div className="mt-2 text-center text-gray-500">
                        Already have an account? <Link to={'/login'} className="underline text-black" >Login now</Link>
                    </div>
                </form>

            </div>

        </div>
    );
}