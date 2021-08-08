import React, {ChangeEvent, FormEvent, useState} from 'react';
import "./login.scss";
import * as loginAction from "../../store/action/index";
import {useDispatch} from "react-redux";
import Spinner from "../spinner/spinner";
import { useHistory } from "react-router-dom";



const Login = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    const [value,setValue] = useState({
        email: "",
        password:""
    });

    const [isLoading,setIsLoading] = useState(false);
    const loginTrello = async (event: any) =>{
        event.preventDefault();
        setTimeout(async ()=>{
            let action =  loginAction.login(value);
            await dispatch(action);
            await setIsLoading(true);
            await history.push("/main");
        }, 1000)

    }
    const changeValue = (event: ChangeEvent<HTMLInputElement>)  => {
        setValue({...value,[event.target.name]: event.target.value})
    }
    return (
            <div className="container">
                    <div className="itemtitle">
                        <h3>Trello</h3>
                    </div>
                    <form className="itemform" onSubmit={(event)=>loginTrello(event)}>
                        <div className="itemform-title">
                            <h3>Đăng Nhập Vào Trello</h3>
                        </div>
                        <div className="itemform-email">
                            <input placeholder="Nhập Email"  type="text" name="email" onChange={(event)=>changeValue(event)}  />
                        </div>
                        <div className="itemform-password">
                            <input placeholder="Nhập password" type="password" name="password" onChange={(event)=>changeValue(event)} />
                        </div>
                        <div className="itemform-buttonlogin">
                            <button  onClick={(event)=>loginTrello(event)} >Đăng Nhập</button>
                        </div>
                        <div className="itemform-textOr">
                            <span>Hoặc</span>
                        </div>
                    </form>
                {isLoading && <Spinner />}
            </div>
    );
}

export default Login;
