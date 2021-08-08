import {put, call} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";
import * as action from "../action/index";

export function* addTask(actions: any) {
    let { titleValue } = actions;
    console.log("title",titleValue)
    let body = {
        title: actions.title,
        order: actions.order
    };
    console.log("123", body);
    yield axios.post(enviroment.api + "/main/posttask", body).then(res => {
        console.log(res)
    });
    yield getTask();
}

export function* getTask() {
    let response: Promise<Object> = yield axios.get(enviroment.api + "/main/gettask");
    try {
        yield put(action.GetTaskList(response))
    } catch (e) {
        console.log(e);
    }
}
export function* putTask(actions:any){
    let body = {
        title:actions.title
    };
    let idParams = actions.id;
    console.log(body);
    yield axios.put(enviroment.api + `/main/puttask?id=${idParams}`,body).then((res)=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
}
