import React from "react";
import guardsImg from '../images/guard.jpeg';
import damageImg from '../images/guard-damage1.jpeg'
import './styles/guards.css';

const Guards = ({guard}) => {
    return (
        <div className="guards-container" style={{left: `${guard.x}px`, top: `${guard.y}px`}}>
            <div><img className="guards-img" src={guard.health === 100 ? guardsImg : damageImg} alt='Guard'></img></div>
        </div>
    );
}
export default Guards;