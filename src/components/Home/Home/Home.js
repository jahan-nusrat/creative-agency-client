import React from 'react'
import Hero from '../Hero/Hero'
import Navbar from '../Nav/Navbar';
import Partners from '../Partners/Partners';
import Services from '../Services/Services';
import Works from '../Works/Works';
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
            <section className="work-section">
                <Works />
            </section>

        </div>
        
    )
}

export default Home
