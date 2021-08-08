import React, {FC, FormEvent, useMemo, useState} from 'react';
import "../listboard.scss";
import {useDispatch} from "react-redux";
import * as actions from "../../../../store/action/index";

interface propsLisBoard {
    listTask: Array<Object>,
    indexState: number,
    hideValue: (index: number) => void,
    showValue: (index: number) => void,
}

const Childrenlistboard: React.FC<propsLisBoard> = ({listTask, indexState, hideValue, showValue}) => {
    let dispatch = useDispatch();
    let [valuePutTask, setValuePutTask] = useState() as any;
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValuePutTask(event.target.value);
    }
    const putValueTask = async (id: number) => {
        let action = await actions.putTask(id, valuePutTask);
        await dispatch(action);
    }
    return (
        <>
            {
                listTask && listTask.map((res: any, index: number) => {
                    return <form id="itemget-task" key={index} onSubmit={() => valuePutTask ? putValueTask(res._id) : ''}>
                        {indexState === index ? <input key={index} defaultValue={res.title}
                                                       onChange={(event) => changeValue(event)}
                                                       onClick={() => hideValue(index)}/> :
                            <span className="itemget-task__span" onClick={() => showValue(index)}>{res.title}</span>}
                    </form>
                })
            }
        </>
    );
}

export default Childrenlistboard;
