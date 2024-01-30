import React from 'react'
import Navbar from '../components/Navbar'
import bell from '../media/belligol_vid.mp4'
import '../styles/Belligol.css'
import donut from '../images/donut.png'


function belligol() {
  return (
    <div className='Belli'>

        <header id='belliHead'>
          <img width='100vw' src={donut} alt='Donut' />
        </header>

        <Navbar />

        <section id='belliContent'>
          <h2>Belligol</h2>
          <p>&nbsp;&nbsp;&nbsp;</p>
        
          <iframe width="320" height="360" src={bell} title="Belligol Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <p>&nbsp;&nbsp;&nbsp;</p>

          <p>
          BELLIGOOOOOOOOOOOOOOL
          BELLIGOL
          BELLINGHAM, E ELE 
          O ILUMINADO, DO BELLINGHAM
          </p>
          <p>&nbsp;&nbsp;&nbsp;</p>

          
          <img width='360' height='360'src="https://i.kym-cdn.com/photos/images/newsfeed/002/691/290/48e.jpg" alt="belligol" />
          <p>&nbsp;&nbsp;&nbsp;</p>

        </section>

        <footer id='foot'>
            Senior Project 2024 &copy;
        </footer>
    </div>
    

  )
}

export default belligol