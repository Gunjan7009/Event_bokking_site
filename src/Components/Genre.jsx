import React from 'react';
import EventIcon from '@mui/icons-material/ConfirmationNumber';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

const genres = [
    { name: 'Comedy', eventsCount: 4, icon: <TheaterComedyIcon fontSize="large" /> },
    { name: 'Music', eventsCount: 3, icon: <MusicNoteIcon fontSize="large" /> },
    { name: 'Concert', eventsCount: 2, icon: <MicExternalOnIcon fontSize="large" /> },
    { name: 'Workshops', eventsCount: 2, icon: <EventIcon fontSize="large" /> },
    { name: 'Health & Wellness', eventsCount: 2, icon: <DomainAddIcon fontSize="large" /> },
   
];

const Genre = () => {
    return (
        <section className="genre-section ">
            {/* Title */}
            <div className="flex items-center mb-6 pl-6">
                <span className='text-red-600'><EventIcon style={{ fontSize: 50 }} /></span>
                <h2 className="text-4xl font-bold ml-2 text-red-600">Browse Events by Genre</h2>
            </div>

            {/* Genre Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                {genres.map((genre, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Genre Icon */}
                        <div className="icon mb-3 text-red-600">{genre.icon}</div>

                        {/* Genre Title */}
                        <h3 className="text-lg font-semibold text-gray-800 truncate">{genre.name}</h3>

                        {/* Event Count */}
                        <p className="text-sm text-gray-500">
                            {`${genre.eventsCount} event${genre.eventsCount > 1 ? 's' : ''}`}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Genre;
