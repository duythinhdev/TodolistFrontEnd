import {put, call} from "redux-saga/effects";
import axios from "axios";
import {enviroment} from "../../enviroment/enviroment";

export function* loginChat(actions: any) {
    const {email, password} = actions;
    let body = {
        email: email,
        password: password
    }
    yield axios.post(enviroment.api + "/user/login", body).then(res => {
        console.log(res)
        localStorage.setItem('token', JSON.stringify(res.data.token));
    }).catch(err => {
        console.log(err)
    })

}
