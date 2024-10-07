import React, { useState } from "react";
import Navbar from "../components/landing page/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4488/register", {
                name, email, password
            }, {"Content-Type": "application/json"});
            console.log(res);
        }
        catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-xl shadow-2xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-blue-400">Sign Up</h2>
                        <p className="mt-2 text-sm text-gray-400">
                            Join us today and start your journey
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-2">
                        <div>
                            <label
                                className="block text-sm font-medium text-gray-300"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="w-full px-3 py-2 mt-1 text-gray-300 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="name"
                                type="name"
                                placeholder="Name Surname"
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray-300"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 mt-1 text-gray-300 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray-300"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 mt-1 text-gray-300 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button
                                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center justify-center">
                        <div className="text-sm">
                            <Link to={"/signin"} className="font-medium text-blue-400 hover:text-blue-300">
                                Already a member?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
