import React from "react";
import guardsImg from '../images/guard.jpeg';
import damageImg from '../images/guard-damage1.jpeg'
import './styles/guards.css';

const Guards = ({guard}) => {
    let damageLevel = 0;
    
    return (
        <div className="guards-container">
            <div><img className="guards-img" src={damageLevel === 0 ? guardsImg : damageImg} alt='Guards'></img></div>
            <div><img className="guards-img" src={guardsImg} alt='Guards'></img></div>
            <div><img className="guards-img" src={guardsImg} alt='Guards'></img></div>
            <div><img className="guards-img" src={guardsImg} alt='Guards'></img></div>
        </div>
    );
}
export default Guards;