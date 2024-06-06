import React from "react";

import './styles/alien.css'

const Alien = ({array, imgSrc}) => {
    return (
        <div className="alien-grid">
                {array.map((value, index) => (
                    value === 1 ?
                    <img src={imgSrc} alt="Alien" />
                    :
                    <div key={index} className="empty" />
                ))}
        </div>
    );
}
export default Alien;