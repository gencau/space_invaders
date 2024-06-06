import React from "react";
import Alien from "../components/alien";
import yellowAlien from '../images/yellow.png';
import redAlien from '../images/red.png'
import blueAlien from '../images/extra.png'
import greenAlien from '../images/green.png'
import './styles/alien-grid.css';

const AlienGrid = () => {
    let yellowAlive = new Array(16).fill(1);
    let greenAlive = new Array(16).fill(1);
    let redAlive = new Array(16).fill(1);
    let blueAlive = new Array(16).fill(1);

    return (
        <div className="flex-container">
            <Alien array={yellowAlive} imgSrc={yellowAlien}/>        
            <Alien array={redAlive} imgSrc={redAlien}/> 
            <Alien array={greenAlive} imgSrc={greenAlien}/> 
            <Alien array={blueAlive} imgSrc={blueAlien}/> 
        </div>
    );
}
export default AlienGrid;