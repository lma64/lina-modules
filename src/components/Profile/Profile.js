import React from 'react';
import "./Profile.css";
import groupphoto from "../../assets/photos/members-full.jpg";
import { useSpring, animated } from 'react-spring';

function Number({ n }){
    const { number } = useSpring ({
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10},
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

export default function Profile() {
  return (
    <div className='profile'>
        <img src={groupphoto} width="100%">
        </img>

        <div className='about-section'>
            <h1>
                <Number n={14143040} />
            </h1>
        </div>
    </div>
  )
}
