import React, { useState } from 'react'

import Dashboard from "./dashboard"
import Owerview from "./owerview"
import "./styles/app.scss"

function App() {
  const [light, toggleLight] = useState("dark")

  return (
    <div className={`app app_${light}`}>
      <Dashboard light={light} toggleLight={toggleLight}/>
      <Owerview light={light}/>
      
      <div className={`app__footer app__footer_${light}`}>
        Challenge by<a href="https://www.frontendmentor.io?ref=challenge"> Frontend Mentor</a>.
        Coded by <a href="https://github.com/sashansk3?tab=projects">sasha_nsk3</a>.
      </div>
    </div>
  )
}

export default App
