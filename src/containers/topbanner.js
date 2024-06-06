import React from "react";
import './styles/topbanner.css';
import lifeImageSrc from '../images/player.png';

const TopBanner = () => {

    let lives = 3;
    let score = 0;

    const lifeImages = Array.from({length:lives});

    return (
        <div class="banner">
            <ul class="tableau">
                <li>SCORE</li>
                <li class="num">{score}</li>
                <li class="push">LIVES</li>
                <li>{lifeImages.map((_,index) => 
                    <img key={index} src={lifeImageSrc} alt={`Life ${index + 1}`} />
                )}</li>
            </ul>
        </div>
    );
}
export default TopBanner;