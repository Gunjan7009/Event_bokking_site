import React, { useState, useEffect } from "react";
import api from "../data/api";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const MusicEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchMusicEvents = async () => {
            try {
                const response = await api.get('/api/events/events');
                // Filter for Music category
                const musicEvents = response.data.filter(event => event.category === "Music");
                setEvents(musicEvents);
            } catch (error) {
                console.error("Error fetching music events:", error);
            }
        };

        fetchMusicEvents();
    }, []);

    return (
        <section className="my-8 p-6 w-full">
            <div className="flex items-center mb-6 pl-1">
                <span className='text-red-600'>
                    <MusicNoteIcon style={{ fontSize: 50 }} />
                </span>
                <h2 className="text-4xl font-semibold ml-2 text-red-600">Music Events</h2>
            </div>
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${0 * (100 / Math.min(4, events.length))}%)` }}>
                    {events.length > 0 ? (
                        events.map((event, index) => (
                            <div key={index} className="flex-shrink-0 w-full sm:w-1/4 px-2">
                                <div className="bg-white shadow-lg rounded-lg p-4 border h-full">
                                    {/* Event Image */}
                                    <div className="image-container h-60 bg-gray-200 rounded-t-lg mb-4 overflow-hidden">
                                        {event.images && event.images.length > 0 ? (
                                            <img
                                                src={`https://online-event-management-backend.onrender.com/uploads/${event.images[0]}`}
                                                alt={event.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-gray-500">
                                                No Image Available
                                            </div>
                                        )}
                                    </div>

                                    {/* Event Details */}
                                    <div className="h-1/3 flex flex-col justify-between">
                                        <h3 className="text-md font-semibold text-gray-800 truncate">{event.title}</h3>
                                        <p className="text-sm text-gray-600 mb-2 truncate">{event.description}</p>
                                        <div className="flex items-center mt-2 text-gray-600">
                                            <span className="text-red-600"><CalendarMonthIcon /></span>
                                            <p className="ml-2 text-sm">{new Date(event.date).toLocaleDateString()}</p>
                                        </div>
                                        <div className="flex items-center mt-2 text-gray-600">
                                            <span className="text-red-600"><HistoryToggleOffIcon /></span>
                                            <p className="ml-2 text-sm">{event.time}</p>
                                        </div>
                                        <div className="flex items-center mt-2 text-gray-600">
                                            <span className="text-red-600"><LocationOnIcon /></span>
                                            <p className="ml-2 text-sm">{event.location}</p>
                                        </div>

                                        {/* Price and Buy Button */}
                                        <div className="flex items-center justify-between mt-4">
                                            <span className="font-bold text-gray-600">₹{event.ticketPricing} ONWARDS</span>
                                            <button className="bg-red-600 text-white px-3 py-1 rounded text-sm shadow">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MusicEvents;
