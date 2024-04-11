import React from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
    return (
        <>
            <div className="bg-slate-100 py-5">
                <div className="text-4xl text-justify px-10 py-2">
                    <h1>Hey, please provide us with your basic details and your fitness goal to achieve.</h1>
                </div>
                <div className="mt-10 px-10 py-3">
                    <form>
                        <label className="text-xl">What is your first name?</label>
                        <input type="text" className="border-2 border-gray-400 py-1 px-2 rounded-lg w-72 mb-5 ml-16"></input>
                        <br />
                        <label className="text-xl">What is your Last name?</label>
                        <input type="text" className="border-2 border-gray-400 py-1 px-2 rounded-lg w-72 mb-5 ml-16"></input>
                        <br />
                        <label className="text-xl">What is your Email?</label>
                        <input type="text" className="border-2 border-gray-400 py-1 px-2 rounded-lg w-72 mb-5 ml-28"></input>
                        <br />
                        <label className="text-xl">What is your Phone Number?</label>
                        <input type="text" className="border-2 border-gray-400 py-1 px-2 rounded-lg w-72 mb-5 ml-6"></input>
                        <br />
                        <label className="text-xl">What is your age?</label>
                        <input type="text" className="border-2 border-gray-400 py-1 px-2 rounded-lg w-72 mb-5 ml-32"></input>
                        <br />
                        <label className="text-xl">What is your gender?</label>
                        <input type="text" className="border-2 border-gray-400 py-1 px-2 rounded-lg w-72 mb-5 ml-24"></input>
                        <br />
                        <label className="text-xl">What is your height?</label>
                        <input type="text" className="border-2 border-gray-400 py-1 px-2 rounded-lg w-72 mb-5 ml-24"></input>
                        <br />
                        <label className="text-xl">What is your weight?</label>
                        <input type="text" className="border-2 border-gray-400 py-1 px-2 rounded-lg w-72 mb-5 ml-24"></input>
                        <br />
                        <label className="text-xl">What is your goal?</label>
                        <br/>
                        <input type="radio" className="mb-5 mt-5 cursor-pointer" id="option1" name="options" value="option1"></input>
                        <label className="ml-3 text-lg mr-32">Lose Weight</label>
                        <input type="radio" className="mb-5 cursor-pointer" id="option1" name="options" value="option1"></input>
                        <label className="ml-3 text-lg mr-32">Maintain Weight</label>
                        <input type="radio" className="mb-5 cursor-pointer" id="option1" name="options" value="option1"></input>
                        <label className="ml-3 text-lg">Gain Weight</label>
                        <br />
                        <label className="text-xl">What is your exercise level?</label>
                        <br/>
                        <input type="radio" className="mb-5 mt-5 cursor-pointer" id="option1" name="options" value="option1"></input>
                        <label className="ml-3 text-lg mr-32">Not Active</label>
                        <input type="radio" className="mb-5 cursor-pointer" id="option1" name="options" value="option1"></input>
                        <label className="ml-3 text-lg mr-32">Active</label>
                        <input type="radio" className="mb-5 cursor-pointer" id="option1" name="options" value="option1"></input>
                        <label className="ml-3 text-lg">Highly Active</label>
                        <br/>
                        <label className="text-xl">Are you vegeterian or non-vegeterian?</label>
                        <br/>
                        <input type="radio" className="mb-5 mt-5 cursor-pointer" id="option1" name="options" value="option1"></input>
                        <label className="ml-3 text-lg mr-32">Vegeterian</label>
                        <input type="radio" className="mb-5 cursor-pointer" id="option1" name="options" value="option1"></input>
                        <label className="ml-3 text-lg">Non-Vegeterian</label>
                    </form>
                </div>
                <div className="flex justify-center items-center mb-10">
                    <Link to="../forms/Login" target="_top">
                        <button type="button" className="bg-blue-400 px-4 py-2 text-xl rounded-xl mt-5 w-48 hover:bg-blue-300">Submit</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default SignUpPage;