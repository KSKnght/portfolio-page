'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import WebApp from "./tabs/WebApp";
import GameDev from "./tabs/GameDev";
import Arts from "./tabs/Arts";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("WebApp"); // State to track the active project tab

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden overflow-y-auto">
      {/* Parallax Background */}
      <div
        className="fixed top-0 left-0 w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg/bg-1.png')",
          backgroundPositionY: `${scrollY * -0.05}px`,
        }}
      ></div>

      {/* Header */}
      <div
        className="fixed top-80 left-0 right-0 z-10 bg-opacity-80 body p-8 m-auto max-w-3xl flex flex-col justify-between"
        style={{
          opacity: Math.max(1 - scrollY / 300, 0), // Adjust opacity based on scroll
          transition: "opacity 0.2s ease-out", // Smooth fade effect
        }}
      >
        <div className="flex flex-row">
          <div className="mr-4">
            <Image
              src="/id.png"
              alt="Portrait of Karl Friedrich E. Foncardaz"
              width={200}
              height={200}
              className="profile-pic"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div>
              hi
            </div>
            <div>
              <h1 className="text-4xl font-bold text-left mb-1">Welcome to My Portfolio!</h1>
              <p className="text-xl font-regular font-iosevka">
                Karl Friedrich E. Foncardaz
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-left text-sm self-center">
          Scroll down to see my portfolio showcase!
        </p>
      </div>

      {/* Additional Content */}
      <div className="relative z-10 bg-opacity-80 body-transparent p-8 mt-128 mb-150 h-auto max-w-6xl m-auto top-120">
        <div className="flex flex-col justify-center items-center my-8 p-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg font-iosevka mb-4">
            I am a passionate developer with a love for creating beautiful and
            functional web applications. My journey in tech has been exciting,
            and I am always eager to learn more.
          </p>
          <p className="text-lg mb-4">
            In my free time, I enjoy exploring new technologies, contributing to
            open-source projects, and sharing my knowledge with others.
          </p>
        </div>

        {/* Projects Section with Tabs */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>

          {/* Tabs Navigation */}
          <div className="flex justify-center mb-8">
            <button
              className={`px-4 py-2 mx-2 ${
                activeTab === "WebApp" ? "bg-tab" : "bg-tab2"
              } rounded`}
              onClick={() => setActiveTab("WebApp")}
            >
              <div className="text-4xl mr-3">
               \udb80\udd69
              </div>
               Web and Apps
            </button>
            {/* <button
              className={`px-4 py-2 mx-2 ${
                activeTab === "GameDev" ? "bg-tab" : "bg-tab2"
              } rounded`}
              onClick={() => setActiveTab("GameDev")}
            >
              <div className="text-4xl mr-3">
                \udb80\udeb4   
              </div>
              Game Dev
            </button>
            <button
              className={`px-4 py-2 mx-2 ${
                activeTab === "Arts" ? "bg-tab" : "bg-tab2"
              } rounded`}
              onClick={() => setActiveTab("Arts")}
            > 
              <div className="text-4xl mr-3">
                
              </div>
              Arts
            </button> */}
          </div>


          {/* Tabs Content */}
          {activeTab === "WebApp" && (
            <div className="text-lg mb-4 w-full px-12">
              <WebApp />
            </div>
          )}
          {activeTab === "GameDev" && (
            <div className="text-lg mb-4 w-full px-12">
              <GameDev />
            </div>
          )}
          {activeTab === "Arts" && (
            <div className="text-lg mb-4 w-full px-12">
              <Arts />
            </div>
          )}
        </div>
          <div className="flex flex-col justify-center items-center my-8 p-8">
          <h2 className="text-2xl mb-4">More Projects to come soon!</h2>
          </div>

      </div>

      {/* Background Music */}
      <audio autoPlay loop>
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
