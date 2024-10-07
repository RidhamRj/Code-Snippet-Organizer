import React from 'react'
import { Link } from 'react-router-dom'
import MainImg from '../Images/Dashboard.png'

function Header() {
    const scrollToWatchDemo = () => {
        const watchDemoSection = document.getElementById('watch-demo-section');
        if (watchDemoSection) {
            watchDemoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative flex flex-col justify-between min-h-screen bg-gradient-to-br from-gray-900 to-gray-900 overflow-hidden">
            <div className="flex-grow flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
                <div className="flex items-center justify-center flex-col text-center mt-16 sm:mt-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] text-white font-bold mb-3 sm:mb-5">Organising code, Simplified.</h1>
                    <h3 className="text-base sm:text-lg text-gray-300 font-extralight mb-6 sm:mb-8 px-4">Keep your code organized and accessible with Code Vault.</h3>
                    <Link to="/signup">
                        <button className="px-6 sm:px-8 py-3 bg-blue-600 text-white text-sm sm:text-md rounded-md mb-4 cursor-pointer shadow-md flex items-center hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
                            Get started for free
                        </button>
                    </Link>
                    <p className="text-blue-400 hover:text-blue-300 cursor-pointer text-sm" onClick={scrollToWatchDemo}>See demo</p>
                </div>
            </div> 

            <div className="w-full mt-8 pt-8 sm:mt-0 max-w-screen-xl mx-auto">
                <img src={MainImg} alt="Dashboard" className="w-full h-auto max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto rounded-lg shadow-2xl" />
            </div>
        </div>
    )
}

export default Header
