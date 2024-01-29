import React from 'react'
import Navbar from '../components/Navbar'
import bell from '../media/belligol_vid.mp4'
import '../styles/Belligol.css'


function belligol() {
  return (
    <div className='Belli'>

        <header id='belliHead'>
            <h1>Belligol</h1>
        </header>

        <Navbar />

        <section id='belliContent'>
          <h2>Belligol</h2>
        
          <iframe width="320" height="360" src={bell} title="Belligol Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <p>
          BELLIGOOOOOOOOOOOOOOL
          BELLIGOL
          BELLINGHAM, E ELE 
          O ILUMINADO, DO BELLINGHAM
          </p>
          
          <img width='360' height='360'src="https://i.kym-cdn.com/photos/images/newsfeed/002/691/290/48e.jpg" alt="belligol" />
        </section>

        <footer id='foot'>
            Senior Project 2024 &copy;
        </footer>
    </div>
    

  )
}

export default belligol