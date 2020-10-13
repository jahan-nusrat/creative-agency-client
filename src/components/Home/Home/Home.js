import React from 'react'
import Hero from '../Hero/Hero'
import Navbar from '../Nav/Navbar';
import Partners from '../Partners/Partners';
import Services from '../Services/Services';
import './home.style.css'

const Home = () => {
    return (
        <div className="home">
            <header>
                <Navbar />
                <Hero />
            </header>
            <Partners />
            <Services />
        </div>
        
    )
}

export default Home
