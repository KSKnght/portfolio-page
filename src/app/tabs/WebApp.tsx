import React from 'react'
import Project1 from './webAppProjects/Project1'
import Project2 from './webAppProjects/Project2'
import Project3 from './webAppProjects/Project3'
import Project4 from './webAppProjects/Project4'
import Project5 from './webAppProjects/Project5'

const WebApp = () => {
  return (
    <div>
        <p className="mb-12 text-center">Here are some of my web and app projects:</p>
        <Project4 />
        
        <Project5 />

        <Project3 />

        <Project1 />
        
        <Project2 />
    </div>
  )
}

export default WebApp