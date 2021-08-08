import { takeEvery, all, takeLatest } from "redux-saga/effects";
import  * as actionTypes from '../action/actiontype';
import { loginChat } from "./login";
import {addTask, getTask, putTask} from "./main";
export function* watchLogin() {
    yield all([
         takeEvery(actionTypes.LOGIN_APP,loginChat)
        ])
}

export function* watchTodoTask() {
    yield all([
        takeLatest(actionTypes.ADD_TASK_APP,addTask),
        takeEvery(actionTypes.GET_TASK_APP,getTask),
        takeLatest(actionTypes.PUT_TASK_APP,putTask),
    ])
}
