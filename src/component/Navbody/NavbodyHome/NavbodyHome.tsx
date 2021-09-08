import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import * as actions from "../../../store/action/index";

const  NavbodyHome = () => {
    let isHome: boolean = useSelector((state: any) => state.main.isHome);
    let isMenu: boolean = useSelector((state: any) => state.main.isMenu);
    let dispatch = useDispatch();
    const setShowMenu = () => {
        let action = actions.setMenu(false);
        dispatch(action);
    }
    return (
        <div>
            {
                isHome &&  <div className="itemNavbody-left">
                    <div className="itemNavbody-left--avatar">
                        {
                            isMenu  &&  <div className="itemNavbody-left__menuShow" onClick={() => setShowMenu()}>
                                <MenuIcon color="primary" style={{fontSize: '30px'}}/>
                            </div>
                        }
                    </div>
                    <div className="itemNavbody-left--controlTask">
                        <div className="itemNavbody-left--myHome">
                            <h3>Home</h3>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default NavbodyHome;
