import * as actionTypes from "../action/actiontype";
import { updateObject } from "../shared/utility";

interface tsInitialState {
    tokenCompare: string,
    listTask: [],
    isMenu: boolean,
    isHome: boolean,
    isTask: false
}

const initialState: tsInitialState = {
    tokenCompare: '',
    listTask: [],
    isMenu: false,
    isHome: false,
    isTask: false
}
const ListBoard = (action: any,state:any) => {
    return updateObject(state,{listTask: action.title})
}
const setMenu = (action: any,state:any) => {
    return updateObject(state,{isMenu: action.isMenu})
}
const setHome = (action: any, state:any) => {
    return updateObject(state,{isHome: action.isHome})
}
const setTask = (action: any, state:any) => {
    return updateObject(state,{isTask: action.isTask})
}
const mainReducer = (state = initialState,action:any) => {
    switch (action.type)
    {
        case actionTypes.GET_TASK_LIST_APP:
            return ListBoard(action,state);
        case actionTypes.IS_MENU_APP:
            return setMenu(action,state);
        case actionTypes.IS_HOME_APP:
            return setHome(action,state);
        case  actionTypes.IS_TASK_APP:
            return setTask(action,state);
        default :
            return state;
    }
}


export default mainReducer;
