import React, {useState} from 'react';
import "./Navigation.scss";
import ListIcon from '@material-ui/icons/List';
import {GoHome} from "react-icons/go";
import {
    Link
} from "react-router-dom";

let linkHome = <Link to="/home">Home</Link>
let linkTask = <Link to="/Task">My Task</Link>
const constantMenu: any = [
    {
        icon: <Link to="/home"><GoHome/></Link>,
        name: linkHome
    },
    {
        icon: <Link to="/task"><GoHome/></Link>,
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

const Navigation = () => {
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
    return (
        <div className="containerNavigation">
            <div className="item-header">
                <div className="item-header__logo">
                    <h3>Trello</h3>
                </div>
                <div className="item-header__icon">
                    <div className="item-header__icon--Menu">
                        <ListIcon className="iconMenu"/>
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
