import React from 'react'
import Navbar from '../components/Navbar'
import donut from '../images/donut.png'
import '../styles/Home.css'

function Home() {
  return (
    <div className='Home'>

        <header id='homeHeader'>
            <img width='100vw' src={donut} alt='Donut' />
        </header>

        <Navbar />

        <section id='homeContent'>

            <p>Project Overview:</p>

            
        </section>

        <footer id='footer'>
            Senior Project 2024 &copy;
        </footer>

    </div>
  )
}

export default Home