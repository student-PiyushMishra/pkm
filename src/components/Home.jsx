import React from 'react'
import "../assets/App.css"
import Intro from "./Intro"
import News from "./News.jsx"
import Outputs from "./Outputs.jsx"
import Footer from './Footer.jsx'

const Home = () => {
  return (
    <div>

	<Intro />
      <div className="binder">
        <News />
        <Outputs />
      </div>
      
    </div>
  )
}

export default Home;
