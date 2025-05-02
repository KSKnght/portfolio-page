import React from 'react'
import Project1 from './webAppProjects/Project1'
import Project2 from './webAppProjects/Project2'
import Project3 from './webAppProjects/Project3'

const WebApp = () => {
  return (
    <div>
        <p className="mb-12 text-center">Here are some of my web and app projects:</p>
        <Project1 />
        <Project3 />
        <Project2 />
    </div>
  )
}

export default WebApp