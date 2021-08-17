import React, {FormEvent, useEffect, useState} from 'react';
import "./listboard.scss";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../store/action/index"
import Childrenlistboard from "./childrenlistboard/childrenlistboard";
import CloseIcon from '@material-ui/icons/Close';

const Listboard = () => {
    const [title, setTitle] = useState();
    const [isClickTitle, setIsClickTitle] = useState(false as boolean);
    const [order, setOrder] = useState(0 as number);
    const [indexs, setIndexs] = useState(0 as number);
    let listTask = useSelector((state: any) => state.main.listTask);
    let dispatch = useDispatch();
    const changeValueTitle = (event: any) => {
        event.preventDefault();
        setTitle(event.target.value)
    }
    const postTaskTitle = async (event: FormEvent<any>) => {
        event.preventDefault();
        if (listTask.data) {
            listTask.data.length += 1;
            setOrder(listTask.data.length)
            let action = await actions.AddTask(title, order);
            await dispatch(action);
        }
    }
    const hideValue = (index: number) => {
        setIndexs(index)
    }
    const showValue = (index: number) => {
        setIndexs(index);
    }
    const showTitle = () => {
        setIsClickTitle(true)
    }
    const hideTitle = () => {
        setIsClickTitle(false)
    }
    useEffect(() => {
        let action = actions.GetTask();
        dispatch(action);
    }, [])
    return (
        <div className="containerListBoard">
            <Childrenlistboard
                listTask={listTask.data}
                indexState={indexs}
                hideValue={hideValue}
                showValue={showValue}/>

            <div>
                <form className="itemadd-task" onSubmit={(event) => {
                    postTaskTitle(event)
                }}>
                    <div>
                        {isClickTitle &&
                        <input placeholder="add Task" name="title" onChange={(event) => changeValueTitle(event)}/>}
                        {isClickTitle && <button onClick={(event) => {
                            postTaskTitle(event)}}>Thêm</button>}
                        {isClickTitle &&
                        <CloseIcon style={{cursor: 'pointer', fontSize: "25px",}} onClick={() => hideTitle()}/>}
                    </div>
                    {!isClickTitle && <span style={{cursor: 'pointer'}} onClick={() => showTitle()}>Thêm Task</span>}
                </form>
            </div>
        </div>
    );
}

export default Listboard;
