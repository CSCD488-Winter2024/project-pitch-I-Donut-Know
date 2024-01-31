import React from 'react'
import Navbar from '../components/Navbar'
import donut from '../images/donut.png'
import '../styles/Home.css'
import parade from '../images/parade.png'

function Home() {
  return (
    <div className='Home'>

        <header id='homeHeader'>
            <img width='100vw' src={donut} alt='Donut' />
        </header>

        <Navbar />

        <section id='homeContent'>

            <p>Project Overview</p> 

            <img width="50%" src={parade} alt="shop" />    

            <section id='homeInfo'>
              <p>Description: </p>
                <p id="info"> Our project seeks to create a website for local business, The Donut Parade, which allows users to place orders, and allows employees access to those orders in an easy to access process that works for both the customer and the employees. The website will allow employees to update the current stock of donuts from their end that can be accessible to customers on their end. The customer will be able to place an order for donuts reflected by the current stock and pick a pickup time that matches current stock. Orders will come in an organized fashion to employees that allows them to have a central location for all of their orders. The database on the backend of the site can be easily updated by employees to reflect the current stock in store and display it to customers via the website. 
                </p>
              <p>Contact The Donut Parade: </p>

              <address>
                <a href="https://www.facebook.com/donutparadespokane/" target="_blank" class="facebook-button">visit their Facebook Page</a> <br />
                <a href="tel:5094739870" class="phone-button">Call Us: (509) 473-9870</a>
              </address>

            </section>

        </section>

        <footer id='footer'>
            Senior Project 2024 &copy;
        </footer>

    </div>
  )
}

export default Home