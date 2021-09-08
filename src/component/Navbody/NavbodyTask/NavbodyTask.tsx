import React, {FC} from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../store/action/index";

interface props {
    navlink: Array<any>,
    ClickTabBar: (name:string,index:number) => void
}
const  NavBodyTask:FC<props> = ({navlink,ClickTabBar}) => {
    let isTask: boolean = useSelector((state: any) => state.main.isTask);
    let isMenu: boolean = useSelector((state: any) => state.main.isMenu);
    let dispatch = useDispatch();
    const setShowMenu = () => {
        let action = actions.setMenu(false);
        dispatch(action);
    }
    return (
        <div>
            {
                isTask &&  <div className="itemNavbody-left">
                    <div className="itemNavbody-left--avatar">
                        {
                            isMenu  &&  <div className="itemNavbody-left__menuShow" onClick={() => setShowMenu()}>
                                <MenuIcon color="primary" style={{fontSize: '30px'}}/>
                            </div>
                        }
                        <div className="itemNavbody-left--personal">
                        </div>
                    </div>
                    <div className="itemNavbody-left--controlTask">
                        <div className="itemNavbody-left--mytask">
                            <h3>My Task</h3>
                        </div>
                        <div className="itemNavbody-left--menu">
                            <ul>
                                {navlink.map((res: any, index) => {
                                    return <li className="itemNavbody-left--menuli" key={index} onClick={() => {
                                        ClickTabBar(res.name, index)
                                    }}>{res.name}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default NavBodyTask;
