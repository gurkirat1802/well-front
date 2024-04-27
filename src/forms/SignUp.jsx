import React, { useState } from "react";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://localhost:44344/Signup', {
                method: 'POST',
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, contactNumber }),
            });
            if (!response.ok) {
                throw new Error('Failed to sign up');
            }
            // If sign up is successful, redirect or perform any other action
            // You can also handle the response data if needed
            console.log('Sign up successful!');
        } catch (error) {
            setError('Failed to sign up');
        }
    };

    return (
        <>
            <div>
                <h1 className="text-4xl text-center py-10">Create your free account here</h1>
                {error && <p>{error}</p>}
                <form className="text-center py-5 bg-slate-200 ml-72 mr-72 h-96 rounded-xl shadow-2xl" onSubmit={handleSignUp}>
                    <label className="block">Your Email: </label>
                    <input type="text" placeholder="Enter your email" className="border-2 border-gray-200 py-2 px-2 rounded-lg mb-6 w-72 text-center" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    <br />
                    <label className="block">Your Password: </label>
                    <input type="password" placeholder="Enter your password" className="border-2 py-2 px-2 rounded-lg mb-6 w-72 text-center" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                    <br />
                    <label className="block">Contact Number: </label>
                    <input type="text" placeholder="Enter your phone number" className="border-2 py-2 px-2 rounded-lg mb-6 w-72 text-center" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required></input>
                    <br />
                    <button type="submit" className="bg-blue-400 px-5 py-2 rounded-lg font-medium hover:bg-blue-300 w-72">Create an account</button>
                </form>
            </div>
        </>
    );
}

export default SignUp;
