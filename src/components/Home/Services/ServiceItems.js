import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { selectedService } from '../../redux/action';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceItems = ({ service }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 }, }));
    const [orderService, setOrderService] = useState({
        id: service._id,
        icon: service.icon,
        service: service.service,
        description: service.description,
        price: service.price
    })
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(selectedService(orderService))
    }

    return (
        <div className="col-lg-4 service-info" onClick={handleClick}>
            <Link to={`/customer/order?${service._id}`} className="nav-link">
            <animated.div
                className="card"
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
            </Link>

        </div>
    )
}

export default ServiceItems
