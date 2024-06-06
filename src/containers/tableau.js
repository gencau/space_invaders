import React from "react";
import TopBanner from "./topbanner";
import CenterScreenPlay from "./center_screen";
import GuardsGrid from "./guards_grid";
import PlayerGrid from "./player_grid";
import Footer from "./footer";

const Tableau = () => {

    return (
        <div className="tc bg-black">
            <TopBanner />
            <CenterScreenPlay/>
            <GuardsGrid/>
            <PlayerGrid/>
            <Footer/>
        </div>
    );
}
export default Tableau;