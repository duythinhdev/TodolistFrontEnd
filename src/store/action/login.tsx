import * as actions from "./actiontype";

export const login  = (action:any) =>{
    return {
        type: actions.LOGIN_APP,
        email:action.email,
        password: action.password
    }
}
