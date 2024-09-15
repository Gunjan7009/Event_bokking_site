import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close'; // Import Close Icon for the X button

const AuthPage = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and register

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="relative bg-white p-8 rounded shadow-lg w-96">
            {/* Close Button (X) */}
            <button
                onClick={onClose} // Call onClose prop to close the AuthPage
                className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
            >
                <CloseIcon />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
                {isLogin ? 'Login' : 'Register'}
            </h2>

            {/* Form */}
            <form>
                {!isLogin && (
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                )}

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>

                {!isLogin && (
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                >
                    {isLogin ? 'Login' : 'Register'}
                </button>
            </form>

            {/* Toggle Button */}
            <p className="mt-4 text-center">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                <button
                    onClick={toggleAuthMode}
                    className="text-red-600 font-bold ml-1 underline"
                >
                    {isLogin ? 'Register here' : 'Login here'}
                </button>
            </p>
        </div>
    );
};

export default AuthPage;
