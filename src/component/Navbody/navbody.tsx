import React, {useState} from 'react';
import "./navbody.scss";
import Logout from "./logout/logout";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../store/action";
import MenuIcon from '@material-ui/icons/Menu';

interface props {
    navlink: Array<Object>,
    switchs: (name: string) => void
}

const Navbody: React.FC<props> = ({navlink, switchs}) => {
    const [isPoPupLogout, setIsPoPupLogout] = useState(false as boolean);
    let dispatch = useDispatch();
    const clickLogout = () => {
        setIsPoPupLogout(!isPoPupLogout)
    }
    const ClickTabBar = (name: string, index: number) => {
        let boder = document.getElementsByClassName("itemNavbody-left--menuli") as any;
        for(let i =0; i< boder.length;i++) {
            boder[i].style.borderBottom = "";
        }
        boder[index].style.borderBottom = "2px solid #4490FF";
        switchs(name);
    }
    let isMenu: boolean = useSelector((state:any)=>state.main.isMenu);
    const setShowMenu = () => {
        let action = actions.setMenu(false);
        dispatch(action);
    }
    return (
        <div className="containerNavBody">
            <div className="itemNavbody-left">
                <div className="itemNavbody-left--avatar">
                    {
                        isMenu && <div className="itemNavbody-left__menuShow" onClick={()=>setShowMenu()}>
                               <MenuIcon color="primary" style={{fontSize: '30px'}} />
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
            <div className="itemNavbody-right">
                <div className="itemNavbody-right--one">
                    <div className="itemNavbody-right--personal" onClick={() => clickLogout()}>
                        <span>DT</span>
                    </div>
                </div>
            </div>
            {
                isPoPupLogout && <Logout/>
            }
        </div>
    );
}

export default Navbody;
