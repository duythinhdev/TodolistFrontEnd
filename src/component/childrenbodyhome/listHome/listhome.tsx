import React from 'react';
import "./listhome.scss";

const Listhome = () => {
    return (
        <div className="container--project" >
            <div className="container--project__top">
                <div className="container--project__toptitle">
                    <div>Tasks Due Soon</div>
                    <div><a href="#">See all my tasks</a></div>
                </div>
                <div className="container--project__content">
                    123
                </div>
            </div>
            <div className="container--project__bottom">
                <div className="container--project__toptitles">
                    <div>Recent Projects</div>
                    <div>123</div>
                </div>
                <div className="container--project__createproject">
                    <div className="createProject">
                    </div>
                    <div className="createProjectName">
                        <span>NewProject</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Listhome;
