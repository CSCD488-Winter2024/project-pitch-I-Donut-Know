import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Team.css'
import donut from '../images/donut.png'
import monkey from '../media/monkey.mp4'
import omar from '../images/mudryk.jpg'


function Team() {
  return (
    <div className='Team'>

        <header id='teamHeader'>
          <img width='100vw' src={donut} alt='Donut' />
        </header>

        <Navbar />

        <section id='teamContent'>

            <p>Meet the Team:</p>
            <video src={monkey} controls width="300" height="560" ></video>

            <p>Manny:</p>
            <p>Beatz:</p>
            <p>Omar: Yo</p>
            <img src={omar} alt="" />

            
        </section>

        <footer id='footer'>
            Senior Project 2024 &copy;
        </footer>

    </div>
  )
}

export default Team