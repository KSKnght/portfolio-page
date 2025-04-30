'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

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

      {/* Content Section */}
      <div className="relative z-10 bg-opacity-80 body p-8 m-auto max-w-3xl mt-80 flex flex-col justify-between h-full">
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
      <div className="relative z-10 bg-opacity-80 body-transparent p-8 mt-128 mb-20 h-400 max-w-6xl m-auto">
        <p className="text-center">More content here...</p>
      </div>

      {/* Background Music */}
      <audio autoPlay loop>
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
