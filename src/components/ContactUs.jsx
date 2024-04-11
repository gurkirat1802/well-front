import React, { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleClick = () => {
        alert("Submitted Successfully");

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        });
    };

    return (
        <>
            <section className="mt-20 bg-slate-50 py-10" id="contact">
                <div>
                    <h1 className="text-center text-5xl font-semibold ">Contact Us Here</h1>
                </div>
                <div className="mt-16 mx-96 shadow-2xl rounded-xl bg-slate-100 px-10 py-10">
                    <form method="POST" action="/submit" id="contact">
                        <label for="name" id="name" className="text-lg font-semibold text-gray-800">First Name:</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" className="mx-5 px-2 py-1 my-3 rounded" id="name" required></input>
                        <br />
                        <label className="text-lg font-semibold text-gray-800">Last Name:</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" className="ml-6 px-2 py-1 rounded my-3" id="name" required></input>
                        <br />
                        <label className="text-lg font-semibold text-gray-800">Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="ml-16 px-2 py-1 rounded my-3 w-72" id="name" required></input>
                        <br />
                        <div className="flex">
                            <label className="text-lg font-semibold text-gray-800 mt-4">Your Message:</label>
                            <textarea type="text" name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message here" className="px-2 py-1 rounded-xl my-3 w-96 h-40 resize-none" id="name" required></textarea>
                        </div>
                        <br />
                        <div className="mb-5">
                            <button type="button" className="float-right font-medium text-base mx-3 bg-blue-400 px-5 py-2 rounded-xl hover:bg-blue-300 w-32" onClick={handleClick}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
            <div className="text-center">
                <hr></hr>
                <p className="p-2">All rights reserved @2024</p>
            </div>
        </>
    );
}

export default ContactUs;