import React from 'react';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
    return (
        <nav className="bg-[#0A1023] text-white py-3 px-6 flex items-center justify-between">
            {/* Left section: Logo */}
            <div className="flex items-center space-x-4">
                <span className="font-bold text-lg">LeisureBookings</span>
            </div>
            {/* Right section: Options */}
            <div className="flex items-center space-x-4">
                <button className="px-4 py-2 border border-white rounded-full bg-transparent hover:bg-white hover:text-black transition">
                    Add your event
                </button>
                <button className="px-4 py-2 border border-white rounded-full bg-transparent hover:bg-white hover:text-black transition">
                    Logout
                </button>

                <button className="px-3 py-2 bg-transparent border border-white rounded-full">
                    <PersonIcon />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
