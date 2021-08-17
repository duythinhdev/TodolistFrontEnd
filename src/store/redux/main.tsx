import * as actionTypes from "../action/actiontype";
import { updateObject } from "../shared/utility";

interface tsInitialState {
    isLoad: boolean,
    tokenCompare: string,
    listTask: [],
    isTask: boolean,
}

const initialState: tsInitialState = {
    isLoad: false,
    tokenCompare: '',
    listTask: [],
    isTask: false,
}
const ListBoard = (action: any,state:any) => {
    return updateObject(state,{listTask: action.title})
}

const mainReducer = (state = initialState,action:any) => {
    switch (action.type)
    {
        case actionTypes.GET_TASK_LIST_APP:
            return ListBoard(action,state);
        default :
            return state;
    }
}


export default mainReducer;
