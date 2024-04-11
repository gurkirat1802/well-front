import React from "react";
import { Link } from "react-router-dom";

const LosePage = () => {
    return(
        <>
            <div>
                <h1 className="text-4xl font-serif text-center italic font-semibold mt-10 py-2 px-5 bg-slate-200">Hey username, Welcome to the ultimate guide for your fitness</h1>
            </div>
            <p className="text-2xl text-justify font-medium px-10 mt-10">Your current BMI is above 25 which means you are overweight and you have to lose your weight. Let's take steps together to make you healthy and lose your weight. Here is a basic workout plan to lose fat.</p>
            <Link to="../components/Fatloss" target="_top">
                <button type="button" className="mt-10 ml-20 font-semibold text-lg bg-green-500 px-5 py-2 rounded-xl hover:bg-green-400 w-48">FATLOSS PLAN</button>
            </Link>
        </>
    );
}

export default LosePage;