import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <div>
                <h1 className="text-4xl text-center py-10">Create your free account here</h1>
                <form className="text-center py-5 bg-slate-200 ml-72 mr-72 h-96 rounded-xl shadow-2xl">
                    <label className="block">Your Email: </label>
                    <input type="text" placeholder="Enter your email" className="border-2 border-gray-200 py-2 px-2 rounded-lg mb-6 w-72 text-center"></input>
                    <br />
                    <label className="block">Your Password: </label>
                    <input type="password" placeholder="Enter your password" className="border-2 py-2 px-2 rounded-lg mb-6 w-72 text-center"></input>
                    <br />
                    <label className="block">Contact Number: </label>
                    <input type="text" className="border-2 py-2 px-2 rounded-lg mb-6 w-72 text-center"></input>
                    <br />
                    <Link to="../pages/SignUpPage" target="_top">
                        <button type="button" className="bg-blue-400 px-5 py-2 rounded-lg font-medium hover:bg-blue-300 w-72">Create an account</button>
                    </Link>
                </form>
            </div>
        </>
    );
}

export default SignUp;