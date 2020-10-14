import React from 'react';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceItems = ({ service }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 }, }));

    return (
        <div className="col-lg-4">
            <animated.div
                class="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
            <div className="service-box">
                <div className="service-icon">
                    <img src={service.icon} alt="" />
                </div>
                <div className="service-details">
                    <h4>{service.service}</h4>
                    <p>{service.description}</p>
                </div>
            </div>
            </animated.div>
        </div>
    )
}

export default ServiceItems
