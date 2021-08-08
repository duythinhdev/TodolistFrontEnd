import React, {useState} from 'react';
import "./navbody.scss";
import Logout from "./logout/logout";

interface props {
    navlink: Array<Object>,
    switchs: (name: string) => void
}

const Navbody: React.FC<props> = ({navlink, switchs}) => {
    const [isPoPupLogout, setIsPoPupLogout] = useState(false as boolean);

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
    return (
        <div className="containerNavBody">
            <div className="itemNavbody-left">
                <div className="itemNavbody-left--avatar">
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
