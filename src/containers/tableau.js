import React, {useState, useEffect } from "react";
import TopBanner from "./topbanner";
import CenterScreenPlay from "./center_screen";
import GuardsGrid from "./guards_grid";
import PlayerGrid from "./player_grid";
import Footer from "./footer";

const Tableau = () => {

    const [position, setPosition] = useState(0);
    const [bullets, setBullets] = useState([]);
    const [guards, setGuards] = useState([]);

    useEffect(() => {
        const initializeGuards = () => {
            const numberOfGuards = 4; 
            const guardWidth = 120;
            const containerWith = window.innerWidth;
            const spacing = (containerWith - (numberOfGuards * guardWidth)) / (numberOfGuards + 1);

            const initialGuards = Array.from({length: numberOfGuards}).map((_, index) => ({
                id: index+1,
                x: spacing + index * (guardWidth + spacing),
                y:300,
                health: 100
            }));
            setGuards(initialGuards);
        };

        initializeGuards();
    }, []);

    const updateBullets = () => {
        setBullets((prevBullets) =>
            prevBullets.map((bullet) => ({ ...bullet, y: bullet.y + 20 }))
                       .filter((bullet) => {
                            const bulletRect = {
                                left: bullet.x,
                                right: bullet.x + 40,
                                top: window.innerHeight - bullet.y - 75,
                                bottom: window.innerHeight - bullet.y,
                            };

                            const newGuards = guards.map((guard) => {
                                const guardRect = {
                                    left: guard.x,
                                    right: guard.x + 120,
                                    top: guard.y,
                                    bottom: guard.y + 300,
                                };

                                const isColliding =
                                    bulletRect.right > guardRect.left && bulletRect.left < guardRect.right &&
                                    bulletRect.bottom > guardRect.top && bulletRect.top < guardRect.bottom;

                                console.log("Is it colliding: " + isColliding);

                                if (isColliding) {
                                    return {...guard, health: guard.health - 10};
                                }

                                return guard;
                            });

                            setGuards(newGuards.filter((guard) => guard.health > 0));

                            return bullet.y > 0 && !newGuards.some((guard) => {
                                const guardRect = {
                                    left: guard.x,
                                    right: guard.x + 120,
                                    top:guard.y,
                                    bottom:guard.y+300,
                                };

                                return (
                                    bulletRect.right > guardRect.left &&
                                    bulletRect.left < guardRect.right && 
                                    bulletRect.bottom > guardRect.top &&
                                    bulletRect.top < guardRect.bottom
                                );
                            });
                        
                       })
        );
    };

    useEffect(() => {
        const interval = setInterval(updateBullets, 50);
        return () => {
            clearInterval(interval);
        };
    },[guards]);

    return (
        <div className="tc bg-black">
            <TopBanner />
            <CenterScreenPlay/>
            <GuardsGrid guards={guards} />
            <PlayerGrid position={position} setPosition={setPosition} bullets={bullets} setBullets={setBullets} />
            <Footer/>
        </div>
    );
}
export default Tableau;