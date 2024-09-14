import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import WhatshotIcon from "@mui/icons-material/Whatshot";

// Import images
import image1 from "../assets/event1.jpeg";
import image2 from "../assets/event2.jpeg";
import image3 from "../assets/event3.jpeg";
import image4 from "../assets/event4.jpeg";
import image5 from "../assets/event5.jpeg";
import image6 from "../assets/event6.jpeg";
import image7 from "../assets/event7.jpeg";
import image8 from "../assets/event4.jpeg";
import image9 from "../assets/event3.jpeg";
import image10 from "../assets/event7.jpeg";

const movieImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const TrendingCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0 ? movieImages.length - 4 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex >= movieImages.length - 4 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="movie-card" className="my-8 relative">
      <div className="card-heading text-left ml-10 mb-4 flex">
        <span>
                  <WhatshotIcon style={{ fontSize: 50 }} />
        </span>
        <h2 className="text-5xl font-semibold ">Trending</h2>
      </div>

      <div className="relative container mx-auto">
        {/* Control Buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center justify-center z-10">
          <button
            onClick={prevSlide}
            className="bg-red-600 text-white p-2 rounded-full "
          >
            <ArrowLeftIcon fontSize="large" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center justify-center z-10">
          <button
            onClick={nextSlide}
            className="bg-red-600 text-white p-2 rounded-full "
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
            {movieImages.map((src, index) => (
              <div key={index} className="item flex-shrink-0 w-1/4 px-2">
                <img
                  src={src}
                  alt={`Movie ${index}`}
                  className="item-image w-full h-64 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCards;
