import React, {FC, useState} from 'react';
import "./Navigation.scss";
import {GoHome} from "react-icons/go";
import {
    Link
} from "react-router-dom";
import * as actions from  "../../store/action/index";
import {useDispatch, useSelector} from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
let linkHome = <Link style={{ textDecoration:"none" }} to="/home">Home</Link>
let linkTask = <Link  style={{ textDecoration:"none" }} to="/Task">My Task</Link>
const constantMenu: any = [
    {
        icon: <Link to="/home"><GoHome style={{ color:"blue" }} /></Link>,
        name: linkHome
    },
    {
        icon: <Link to="/task"><CheckCircleOutlineIcon  /></Link>,
        name: linkTask
    },
    {
        icon: <GoHome/>,
        name: "Inbox"
    },
    {
        icon: <GoHome/>,
        name: "Reporting"
    },
    {
        icon: <GoHome/>,
        name: "Portfolios"
    },
    {
        icon: <GoHome/>,
        name: "Goals"
    }
]

interface props {

}
const Navigation:React.FC<props> = ({}) => {
    let dispatch = useDispatch();
    let clickBorder = (index: number) => {
        let navigation = document.getElementsByClassName("item-body__navigation") as HTMLCollectionOf<any>;
        for (let i = 0; i < navigation.length; i++) {
            navigation[i].style.background = "";
            navigation[i].style.width = "";
            navigation[i].style.height = "";
            navigation[i].style.cursor = "";
        }
        navigation[index].style.background = "#FFFFFF";
        navigation[index].style.width = "100%";
        navigation[index].style.height = "40px";
        navigation[index].style.cursor = "pointer";
    }
    let isMenu: any = useSelector((state:any)=>state.main.isMenu);
    const clickMenu = () => {
        let action = actions.setMenu(true);
        dispatch(action);
    }
    return (
        <div className={"containerNavigation " + (isMenu && "actives")}>
            <div className="item-header">
                <div className="item-header__logo">
                    <h3>Trello</h3>
                </div>
                <div className="item-header__icon">
                    <div className="item-header__icon--Menu">
                        <span className="iconMenu"  onClick={()=>clickMenu()} > <MenuIcon color="inherit" style={{fontSize: '30px'}} /></span>
                    </div>
                </div>
            </div>
            <div className="item-body">
                {
                    constantMenu.map((res: any, index: number) => {
                        return <div className="item-body__navigation" key={index} onClick={() => clickBorder(index)}>
                            <div className="item-body__navigation--MenuBar">
                                <div className="iconTopbar">{res.icon}</div>
                                <div className="NameTopbar"> {res.name}</div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Navigation;
