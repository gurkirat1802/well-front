import React from "react";
import myImage from "../images/bg.jpg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="flex bg-slate-100" id="home">
                <div style={{ width: '100%', backgroundImage: `url(${myImage})`, backgroundSize: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <h1 className="font-black text-6xl font-serif mt-32 mb-8 ml-32">Eat well, live well.</h1>
                    <div>
                        <h3 className="text-4xl font-semibold mb-6 ml-32">Reach your goals with WELLBEING.</h3>
                        <h3 className="text-2xl font-normal w-1/3 ml-32">Build healthy habits with the all-in-one food, exercise, and calorie tracker.</h3>
                    </div>
                    <Link to="../forms/SignUp" target="_top">
                        <button type="button" className="ml-72 mt-10 mb-12 font-semibold text-lg bg-blue-500 px-5 py-2 rounded-xl hover:bg-blue-400 w-60">GET STARTED</button>
                    </Link>
                </div>

            </section>
        </>
    );
}

export default Home;