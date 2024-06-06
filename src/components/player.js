import React from "react";
import playerImg from '../images/player.png';
import './styles/player.css'

const Player = ({position}) => {
    return (
        <div className="player"
             style={{ transform: `translateX(${position}px)`}}>
            <img className="player-img" src={playerImg} alt="Player" />
        </div>

    );
}
export default Player;