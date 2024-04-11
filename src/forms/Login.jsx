import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div>
                <h1 className="text-4xl text-center py-10">Login to your account</h1>
                <form className="text-center py-20 bg-slate-200 ml-96 mr-96 h-96 rounded-xl shadow-2xl">
                    <input type="text" placeholder="Email or username" className="border-2 border-gray-200 py-2 px-2 rounded-lg mb-8 w-72 text-center"></input>
                    <br />
                    <input type="password" placeholder="Password" className="border-2 py-2 px-2 rounded-lg mb-5 w-72 text-center"></input>
                    <br />
                    <a href="" className="block mb-10 underline -ml-40">Forgot Password?</a>
                    <Link to="../pages/LosePage" target="_top">
                        <button type="button" className="bg-blue-400 px-5 py-2 rounded-lg font-medium hover:bg-blue-300 w-72">Log In</button>
                    </Link>
                </form>
            </div>
        </>
    );
}

export default Login;