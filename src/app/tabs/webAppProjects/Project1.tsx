import React, { useState, useEffect } from 'react';

const Project1 = () => {
  const [isPortrait, setIsPortrait] = useState(false); // Default state

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

  return (
    <div className="mb-10">
      <h3 className="flex flex-row items-center text-2xl font-bold mb-1 font-color-purple">
        {/* Icons */}
        <div className="text-5xl mr-3 font-FiraCodeNerd">
          <span className="mr-3">{"\ue83e"}</span>
          <span>{"\ue8b6"}</span>
        </div>

        {/* Project Title */}
        <strong>Likha Design+Build Project Management System</strong>
      </h3>
      {/* Project Date */}
      <div>
        <p>Jul 2024</p>
      </div>
      <div className="flex flex-col items-center">
        {/* Web Preview */}
        <div
          className="relative"
          style={{
            width: isPortrait ? "375px" : "667px",
            height: isPortrait ? "370px" : "400px",
          }}
        >
          <iframe
            src="https://likhadesignbuild.vercel.app"
            title="Web Preview"
            className="absolute top-0 left-0"
            style={{
              transform: isPortrait ? "scale(0.25)" : "scale(0.5)",
              transformOrigin: "top left",
              width: isPortrait ? "1500px" : "1334px",
              height: isPortrait ? "1334px" : "750px",
              border: "0",
            }}
          ></iframe>
        </div>
        {/* Project Description */}
        <div className="px-10 items-justified">
          <p className="text-lg mb-4 text-justified">
            A project management system for the Likha+Design team, built with NextJS for Frontend and Supabase as database and backend.
            I've work mostly on the backend side, creating the database and API endpoints for the frontend to consume.
          </p>
          <p className="text-lg mb-4">This project is currently in development.</p>
        </div>

        {/* Project Links */}
        <div className="flex flex-row justify-center items-center mt-4 mb-4">
          <a href="https://github.com/KSKnght/frontend-test.git" className="font-color-blue hover:underline mr-4">
            View on GitHub
            </a>
        </div>    
      </div>
    </div>
  );
};

export default Project1;