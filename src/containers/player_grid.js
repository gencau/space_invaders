import React, {useState, useEffect} from "react";
import Player from "../components/player";
import './styles/player-container.css';
import bulletImg from '../images/pngegg.png';

const PlayerGrid = () => {
    const [position, setPosition] = useState(0);
    const [bullets, setBullets] = useState([]);

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight')
            setPosition((prevPosition) => prevPosition + 10);
        else if (event.key === 'ArrowLeft')
            setPosition((prevPosition) => prevPosition - 10);
        else if (event.key === ' ')
            fireBullet();
    };

    const fireBullet = () => {
        const playerElement = document.querySelector('.player-img');
        if (playerElement){
            const rect = playerElement.getBoundingClientRect();
            const bulletX = rect.left - rect.width/2; // center of player
            const bulletY = window.innerHeight - rect.top; // top of player

            setBullets((prevBullets) => [
                ...prevBullets,
                {id: Date.now(), x:bulletX, y:bulletY},
            ]);
        }
    }

    const updateBullets = () => {
        setBullets((prevBullets) =>
            prevBullets.map((bullet) => ({ ...bullet, y: bullet.y + 10 }))
                       .filter((bullet) => bullet.y < window.innerHeight)
        );
    };

    useEffect(() => {
        const interval = setInterval(updateBullets, 50);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            clearInterval(interval);
        };
    },[]);

    return (
        <div className="player-container">
            <Player position={position} />
            {bullets.map((bullet) => (
                <div key={bullet.id}
                    className="bullet"
                    style={{left: `${bullet.x}px`, bottom: `${bullet.y}px`}}
                >
                    <img class="bullet-img" src={bulletImg} alt="Bullet" />
                </div>
            ))}        
        </div>
    );
}
export default PlayerGrid;