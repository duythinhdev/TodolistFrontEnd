import React from 'react';
import Navigation from "../Navigation/Navigation";
import "./bodytask.scss";
import Childrenbodytask from "../childrenbodytask/childrenbodytask";
const  Bodytask = () => {
    return (
        <div className="containerTask">
            <Navigation />
            <Childrenbodytask />
        </div>
    );
}

export default Bodytask;
