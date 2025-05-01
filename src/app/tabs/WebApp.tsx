import React from 'react'

const WebApp = () => {
  return (
    <div>
        <p className="mb-12 text-center">Here are some of my web and app projects:</p>
        <div>
            <h3 className='flex flex-row items-center text-2xl font-bold mb-1 font-color-purple'>
                <div className='text-4xl mr-3 font-FiraCodeNerd'>
                    {"\ue83e"}
                </div>
                <strong>
                    Likha+Design Project Management System 
                </strong>
            </h3>
            <div className='flex flex-col items-center'>
                <div className="relative" style={{ width: '850px', height: '350px' }}>
                    <iframe 
                        src="https://likhadesignbuild.vercel.app"
                        title="Web Preview"
                        className="absolute top-4 left-0"
                        style={{
                            transform: "scale(0.5)",
                            transformOrigin: "top left",
                            width: "1700px",  // 850 * 2
                            height: "600px", // 600 * 2
                            border: "0"
                          }}>
                    </iframe>
                </div>
                <div>
                    <p className='text-lg mb-4'>A project management system for the Likha+Design team, built with React and Node.js.</p>
                    <p className='text-lg mb-4'>This project is currently in development.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WebApp