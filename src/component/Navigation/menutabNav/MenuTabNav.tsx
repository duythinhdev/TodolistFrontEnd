import {GoHome} from "react-icons/go";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import React from "react";

export const constantMenu: Array<any> = [
    {
        icon: <GoHome />,
        name: "Home",
        link: "/home"
    },
    {
        icon: <CheckCircleOutlineIcon/>,
        name: "List",
        link: "/Task"
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
