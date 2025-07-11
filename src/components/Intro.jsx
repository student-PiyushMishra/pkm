import React from 'react'
import "../assets/Intro.components.css"
const Intro = () => {
  return (
    <div className='main'>
      <h1>Piyush Mishra</h1>
      <div className="intro">
        <div className="img">
          <img src="https://res.cloudinary.com/degc4ydyf/image/upload/v1752008393/avatar_vn7z6s.jpg" alt="Piyush Mishra's pic" />
          <span className="addr">Bihar, India</span>
        </div>
        <div className="text">
          I am a student, at Cambridge Prep./Public School, in 10th standard. But this is my partial intro, I am a tech enthusiast and a bit geeky or inclined towards cyber tech and virtual science. I am into Coding since 2023, when I first wrote my first "Hello World program" in Python. And through the time I evolved to an extent that now, I am able to create a bunch of fancy things. My comfortable TechStack is MERN, and have a decent idea about GenAI.
        </div>

      </div>
    </div>
  )
}

export default Intro