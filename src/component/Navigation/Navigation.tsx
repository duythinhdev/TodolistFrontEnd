import React, {FC, useState} from 'react';
import "./Navigation.scss";
import {
    Link
} from "react-router-dom";
import * as actions from "../../store/action/index";
import {useDispatch, useSelector} from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import  {constantMenu} from "../Navigation/menutabNav/MenuTabNav";

const Navigation = () => {
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
    let isMenu: boolean = useSelector((state: any) => state.main.isMenu);
    const clickMenu =  async () => {
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
                        <span className="iconMenu" onClick={() => clickMenu()}> <MenuIcon color="inherit"
                                                                                          style={{fontSize: '30px'}}/></span>
                    </div>
                </div>
            </div>
            <div className="item-body">
                {
                    constantMenu.map((res: any, index: number) => (
                        <Link to={res.link} style={{textDecoration: "none"}} className="item-body__navigation" key={index} onClick={() => clickBorder(index)}  >
                            <div >
                                <div className="item-body__navigation--MenuBar">
                                    <div className="iconTopbar">{res.icon}</div>
                                    <div className="NameTopbar"> {res.name}</div>
                                </div>
                            </div>
                        </Link>
                        ))
                }
            </div>
        </div>
    );
}

export default Navigation;
