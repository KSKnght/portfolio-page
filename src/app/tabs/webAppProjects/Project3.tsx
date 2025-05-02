import React, { useEffect, useState } from 'react';

const Project3 = () => {
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
      <h3 className="flex flex-row items-center text-2xl font-bold mb-1 font-color-red">
        {/* Icons */}
        <div className="text-5xl mr-3 font-FiraCodeNerd">
          <span>{"\ue60e"}</span>
        </div>

        {/* Project Title */}
        <strong>OpZon Printing Press ERP System</strong>
      </h3>
      {/* Project Date */}
      <div>
        <p>Mar 2025</p>
      </div>
      <div className="flex flex-col items-center">
        {/* Video Preview */}
        <div
          className="relative"
          style={{
            width: isPortrait ? "375px" : "667px",
            height: isPortrait ? "250px" : "420px",
          }}
        >
          <video
            loop
            muted
            autoPlay
            className="absolute top-0 left-0"
            style={{
              width: "100%",
              height: "100%",
              border: "0",
            }}
          >
            <source src="/media/OpZon Demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Project Description */}
        <div className="px-10 items-justified">
          <p className="text-lg mb-4 text-justified">
            This is a project that I helped with the flow and design of the ERP system. And I also helped on the design for thier file generators such as the report pdfs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project3;