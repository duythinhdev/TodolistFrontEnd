import * as actionTypes from "../action/actiontype";
import { updateObject } from "../shared/utility";

interface tsInitialState {
    tokenCompare: string,
    listTask: [],
    isMenu: boolean
}

const initialState: tsInitialState = {
    tokenCompare: '',
    listTask: [],
    isMenu: false
}
const ListBoard = (action: any,state:any) => {
    return updateObject(state,{listTask: action.title})
}
const setMenu = (action: any,state:any) => {
    return updateObject(state,{isMenu: action.isMenu})
}

const mainReducer = (state = initialState,action:any) => {
    switch (action.type)
    {
        case actionTypes.GET_TASK_LIST_APP:
            return ListBoard(action,state);
        case actionTypes.IS_MENU_APP:
            return setMenu(action,state);
        default :
            return state;
    }
}


export default mainReducer;
