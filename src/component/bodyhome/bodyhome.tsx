import React from 'react';
import "./bodyhome.scss"
import Navigation from "../Navigation/Navigation";
import Childrenbodyhome from "../childrenbodyhome/childrenbodyhome";
function Bodyhome() {
    return (
        <div className="containerHome">
            <Navigation  />
            <Childrenbodyhome />
        </div>
    );
}

export default Bodyhome;
