import React from 'react';
import './works.style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';


const Works = () => {
    const carousels = [carousel1, carousel2, carousel3, carousel4, carousel5]
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="container work-container py-5">
            <h3>Here are some of <span style={{ color: '#7AB259' }}>our works</span></h3>
            <div className="swiper-container">
                <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000}
                    keyBoardControl={true} dotListClass="custom-dot-list-style" showDots={true}>
                    {
                        carousels.map((carousel, idx) => {
                            return (
                                <div key={idx}>
                                    <img className='slider-image' src={carousel} alt="" />
                                </div>
                            )
                        })
                    }
                </Carousel>;
            </div>
        </div>
    )
}

export default Works
