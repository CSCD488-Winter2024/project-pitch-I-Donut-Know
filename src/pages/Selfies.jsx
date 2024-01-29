import React from 'react'
import Navbar from '../components/Navbar'
import Omar from '../images/omar.png'
import '../styles/Shots.css'

function Selfies() {
    return (
      <div className='Selfie'>
  
          <header id='mugHead'>
              <h1>Selfies</h1>
          </header>
  
          <Navbar />
  
          <section id='mugContent'>

            <h2>omar5o9</h2>
            <img src={Omar} alt="omar" />

            <h2>mannypoptart</h2>
            <img src="src/images/manny.png" alt="manny" />

            <h2>cr7</h2>
            <img src="src/images/beto.png" alt="beto" />
           
            
          </section>
  
          <footer id='footr'>
              Senior Project 2024 &copy;
          </footer>
      </div>
      
  
    )
  }
  
  export default Selfies