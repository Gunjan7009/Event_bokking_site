import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PushPinIcon from '@mui/icons-material/PushPin';

// Placeholder array (this will later be replaced by API data)
const moviePlaceholders = new Array(10).fill({
    title: "Love & Spirituality in the Age of AI",
    subtitle: "By Amogh Lila Prabhu | Anandam 3.0",
    date: "September 15 | 5PM",
    location: "Basketball Complex, Indore",
    price: "₹49 Onwards"
});

const TrendingCards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const newIndex =
            currentIndex === 0 ? moviePlaceholders.length - 4 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex =
            currentIndex >= moviePlaceholders.length - 4 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section id="movie-card" className="my-8 relative">
            <div className="card-heading text-left ml-10 mb-4 flex items-center">
                <WhatshotIcon style={{ fontSize: 50 }} />
                <h2 className="text-5xl font-semibold ml-2">Trending</h2>
            </div>

            <div className="relative container mx-auto">
                {/* Control Buttons */}
                <div className="absolute inset-y-0 left-0 flex items-center justify-center z-10">
                    <button
                        onClick={prevSlide}
                        className="text-purple-600"
                    >
                        <ArrowLeftIcon fontSize="large" />
                    </button>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center justify-center z-10">
                    <button
                        onClick={nextSlide}
                        className="text-purple-600"
                    >
                        <ArrowRightIcon fontSize="large" />
                    </button>
                </div>

                {/* Carousel Items */}
                <div className="overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
                    >
                        {moviePlaceholders.map((movie, index) => (
                            <div key={index} className="item flex-shrink-0 w-1/4 px-2">
                                <div className="bg-gray-200 h-64 rounded-lg p-4 mb-60 flex flex-col justify-between">
                                    {/* Placeholder Image (or div) */}
                                    <div className="bg-gray-300 h-32 rounded mb-4"></div>

                                    {/* Event Details */}
                                    <div>
                                        <h3 className="text-lg font-semibold">{movie.title}</h3>
                                        <p className="text-sm">{movie.subtitle}</p>
                                        <div className="flex items-center mt-2">
                                            <span className="text-pink-600">< CalendarMonthIcon /></span>
                                            <p>{movie.date}</p>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <span className="text-pink-600"><PushPinIcon /></span>
                                            <p>{movie.location}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <span className="font-bold text-pink-600">
                                                {movie.price}
                                            </span>
                                            <button className="bg-pink-600 text-white px-4 py-2 rounded">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingCards;
