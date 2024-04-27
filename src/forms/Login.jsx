import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://cors-anywhere.herokuapp.com/https://localhost:44344/Signin', {
                username,
                password
            });
            // Assuming your backend returns a token upon successful login
            const token = response.data.token;
            // Here you can save the token to local storage or session storage for future use
            console.log('Login successful! Token:', token);
            // Reset the form fields
            setUsername('');
            setPassword('');
            setError('');
        } catch (error) {
            setError('Invalid username or password');
        }
    };
    return (
        <>
            <div>
                <h1 className="text-4xl text-center py-10">Login to your account</h1>
                {error && <p>{error}</p>}
                <form className="text-center py-20 bg-slate-200 ml-96 mr-96 h-96 rounded-xl shadow-2xl" onSubmit={handleLogin}>
                    <input type="text" placeholder="Email or username" className="border-2 border-gray-200 py-2 px-2 rounded-lg mb-8 w-72 text-center" onChange={(e) => setUsername(e.target.value)} required></input>
                    <br />
                    <input type="password" placeholder="Password" className="border-2 py-2 px-2 rounded-lg mb-5 w-72 text-center" onChange={(e) => setPassword(e.target.value)} required></input>
                    <br />
                    <a href="" className="block mb-10 underline -ml-40">Forgot Password?</a>
                    <Link to="../pages/LosePage" target="_top">
                        <button type="submit" className="bg-blue-400 px-5 py-2 rounded-lg font-medium hover:bg-blue-300 w-72">Log In</button>
                    </Link>
                </form>
            </div>
            <Link to="../pages/GainPage" target="_top">
                <button type="button" className="bg-blue-400 px-5 py-2 rounded-lg font-medium hover:bg-blue-300 w-72">gain</button>
            </Link>
            <Link to="../pages/MaintainPage" target="_top">
                <button type="button" className="bg-blue-400 px-5 py-2 rounded-lg font-medium hover:bg-blue-300 w-72">maintain</button>
            </Link>
        </>
    );
}

export default Login;
