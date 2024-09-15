import React, { useState } from 'react';
import AuthPage from './AuthPage'; // Import your AuthPage component

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showAuthPage, setShowAuthPage] = useState(false); // State to control AuthPage visibility

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
            <nav className="bg-red-600 text-white py-3 px-6 flex items-center justify-between">
                {/* Left section: Logo */}
                <div className="flex items-center space-x-4">
                    <span className="font-bold text-lg">LeisureBookings.in</span>
                </div>

                {/* Right section: Options */}
                <div className="flex items-center space-x-4">
                    <button className="px-4 py-2 border border-white rounded-full bg-transparent hover:bg-white hover:text-black transition">
                        Add your event
                    </button>

                    {!isLoggedIn ? (
                        <button
                            onClick={() => setShowAuthPage(true)} // Show AuthPage when clicked
                            className="px-4 py-2 border border-white rounded-full bg-transparent hover:bg-white hover:text-black transition"
                        >
                            Login / Register
                        </button>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 border border-white rounded-full bg-transparent hover:bg-white hover:text-black transition"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </nav>

            {/* Conditionally render the AuthPage when showAuthPage is true */}
            {showAuthPage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative">
                        <AuthPage onClose={() => setShowAuthPage(false)} /> {/* Pass the close function */}
                    </div>
                </div>
            )}

        </>
    );
};

export default Navbar;
