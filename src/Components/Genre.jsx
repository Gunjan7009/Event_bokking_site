import React from 'react';
import EventIcon from '@mui/icons-material/ConfirmationNumber'; // Example icon
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // Another example icon

const genres = [
    { name: 'Navratri ', eventsCount: 4, icon: <EventIcon fontSize="large" /> },
    { name: 'Music', eventsCount: 3, icon: <MusicNoteIcon fontSize="large" /> },
    { name: 'Festival', eventsCount: 2, icon: <EventIcon fontSize="large" /> },
    { name: 'Performance', eventsCount: 2, icon: <EventIcon fontSize="large" /> },
    { name: 'Storytelling', eventsCount: 2, icon: <EventIcon fontSize="large" /> },
    { name: 'DIY', eventsCount: 1, icon: <EventIcon fontSize="large" /> },
    { name: 'Date Meet', eventsCount: 1, icon: <EventIcon fontSize="large" /> },
    { name: 'Experiences', eventsCount: 1, icon: <EventIcon fontSize="large" /> },
];

const Genre = () => {
    return (
        <section className="genre-section my-8 px-4">
            <div className="flex items-center mb-6">
                <EventIcon style={{ fontSize: 50 }} />
                <h2 className="text-5xl font-semibold ml-2">Browse Events by Genre</h2>
            </div>

            <div className="grid grid-cols-8 gap-6">
                {genres.map((genre, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="icon mb-4">{genre.icon}</div>
                        <h3 className="text-lg font-semibold">{genre.name}</h3>
                        <p className="text-sm text-gray-500">{`${genre.eventsCount} event${genre.eventsCount > 1 ? 's' : ''}`}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Genre;
