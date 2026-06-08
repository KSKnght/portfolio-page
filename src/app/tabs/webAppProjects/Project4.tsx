import React, { useEffect, useState } from 'react';

const Project4 = () => {
  const [isPortrait, setIsPortrait] = useState(false); // Default state
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/media/project4/exer_1.png',
    '/media/project4/exer_2.png',
    '/media/project4/exer_3.png',
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
          <span>{"\ue648"}</span>
        </div>

        {/* Project Title */}
        <strong>Desktop Development College Elective</strong>
      </h3>
      {/* Project Date */}
      <div>
        <p>2025 - 2026</p>
      </div>
      <div className="flex flex-col items-center">
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
            For my Desktop Development elective course, We specifically focused on C# Windows Forms development. The project involved creating a desktop application that allows users to manage their tasks and schedules effectively. The application features a user-friendly interface where users can add, edit, and delete tasks, as well as set reminders and categorize their tasks for better organization. The project was developed using C# and Windows Forms, showcasing my ability to create functional and visually appealing desktop applications. We also implemented features such as data persistence using a local database specifically MySQL, allowing users to save their tasks and access them across sessions. Overall, this project demonstrates my proficiency in desktop application development and my ability to create practical solutions for task management.
          
          </p>
        </div>
        {/* Project Links */}
        <div className="flex flex-col justify-center items-center mt-4 mb-4">
          <a href="https://github.com/KSKnght/ContactListManager" className="font-color-blue hover:underline mr-4">
            Project 1 Repository
          </a>
          <a href="https://github.com/KSKnght/Exer_2" className="font-color-blue hover:underline mr-4">
            Project 2 Repository
          </a>
          <a href="https://github.com/KSKnght/Activity3" className="font-color-blue hover:underline mr-4">
            Project 3 Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project4;