import React, { useEffect, useState } from 'react';

const Project5 = () => {
  const [isPortrait, setIsPortrait] = useState(false); // Default state
    const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/media/project5/1.png',
    '/media/project5/2.png',
    '/media/project5/3.png',
  ];
  
  useEffect(() => {
    // Check orientation on the client side
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mb-10">
      <h3 className="flex flex-row items-center text-2xl font-bold mb-1 font-color-red">
        {/* Icons */}
        <div className="text-5xl mr-3 font-FiraCodeNerd">
          <span>{"\ue7dd"}</span>
          <span>{"\ue7d5"}</span>
        </div>

        {/* Project Title */}
        <strong>English and Filipino SMS Phishing Detection Application Using Finetuned CNN-Extended-mbERT Hybrid Model</strong>
      </h3>
      {/* Project Date */}
      <div>
        <p>Jun 2025 - Nov 2025</p>
      </div>
      <div className="flex flex-col items-center">
        {/* Slide Preview */}
        {/* Slide Preview */}
        <div className="relative overflow-hidden rounded-2xl bg-transparent" style={{ width: isPortrait ? '375px' : '667px', height: isPortrait ? '250px' : '420px' }}>
          <img
            src={images[currentIndex]}
            alt={`Project screenshot ${currentIndex + 1}`}
            className="w-full h-full object-contain"
          />

          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60"
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60"
            aria-label="Next slide"
          >
            ›
          </button>

          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Project Description */}
        <div className="px-10 items-justified">
          <p className="text-lg mb-4 text-justified">
                        On our thesis project, we developed a mobile application that utilizes a 
            finetuned CNN-Extended-mbERT hybrid model to detect SMS phishing attempts 
            in both English and Filipino languages. I specifically worked on the development of the mobile application using Flutter,
            and the local deployment of the machine learning model using FastAPI. The application provides users with a user-friendly 
            interface to input SMS messages and receive real-time feedback on whether the message is potentially a phishing attempt. 
            The finetuned CNN-Extended-mbERT hybrid model was trained on a dataset of SMS messages in both English and Filipino, 
            allowing it to effectively identify phishing attempts in both languages. This project demonstrates my ability to 
            integrate machine learning models into mobile applications and deploy them locally for efficient performance.
          </p>
        </div>
        {/* Project Links */}
        <div className="flex flex-col justify-center items-center mt-4 mb-4">
          <a href="https://github.com/KSKnght/thesis_backend.git" className="font-color-blue hover:underline mr-4">
            Backend Repository
          </a>
          <a href="https://github.com/KSKnght/thesis_prototype" className="font-color-blue hover:underline mr-4">
            Frontend Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project5;