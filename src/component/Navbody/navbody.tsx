import React, {useState} from 'react';
import "./navbody.scss";
import Logout from "./logout/logout";
import SearchIcon from '@material-ui/icons/Search';
import {tabBar} from "../childrenbodytask/constant/constant";
import NavbodyHome from "./NavbodyHome/NavbodyHome";
import NavBodyTask from "./NavbodyTask/NavbodyTask";

const navlink = [
    {
        name:tabBar.List,
    },
    {
        name:tabBar.Board,
    },
    {
        name:tabBar.Calendar,
    },
    {
        name:tabBar.Files,
    }
]
interface props {
    switchs: (name: string) => void,
}

const Navbody: React.FC<props> = ({switchs}) => {
    const [isPoPupLogout, setIsPoPupLogout] = useState(false as boolean);
    const clickLogout = () => {
        setIsPoPupLogout(!isPoPupLogout)
    }
    const ClickTabBar = (name: string, index: number) => {
        let boder = document.getElementsByClassName("itemNavbody-left--menuli") as any;
        for (let i = 0; i < boder.length; i++) {
            boder[i].style.borderBottom = "";
        }
        boder[index].style.borderBottom = "2px solid #4490FF";
        switchs(name);
    }
    return (
        <div className="containerNavBody">
            <NavbodyHome />
            <NavBodyTask navlink={navlink} ClickTabBar={ClickTabBar} />
            <div className="itemNavbody-right">
                <div className="itemNavbody-right--one">
                    <div className="itemNavbody-right--Search">
                        <SearchIcon className="icon--Search" style={{ color:"darkgray",margin: "5px" }} />
                        <input placeholder="Search" />
                    </div>
                    <div className="itemNavbody-right--Add">
                        <button>+</button>
                    </div>
                    <div className="itemNavbody-right--upgrade">
                        <button>Upgrade</button>
                    </div>
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
