import React, {FC, FormEvent, useMemo, useState} from 'react';
import "../listboard.scss";
import {useDispatch} from "react-redux";
import * as actions from "../../../../store/action/index";
import AddIcon from '@material-ui/icons/Add';

interface propsLisBoard {
    listTask: Array<Object>,
    indexState: number,
    hideValue: (index: number) => void,
    showValue: (index: number) => void,
}

const Childrenlistboard: React.FC<propsLisBoard> = ({listTask, indexState, hideValue, showValue}) => {
    let dispatch = useDispatch();
    let [hideshowAddTask,setHideShowAddTask] = useState(false as boolean);
    let [valuePutTask, setValuePutTask] = useState() as any;
    let [indexInAddTask,setIndexInAddTask] = useState(0 as number);
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValuePutTask(event.target.value);
    }
    const putValueTask = async (id: number) => {
        let action = await actions.putTask(id, valuePutTask);
        await dispatch(action);
    }
    const showAddTask = (event:any,index:number) => {
        event.preventDefault();
        setIndexInAddTask(index);
        setHideShowAddTask(true)
    }
    const hideAddTask = (event:any,index:number) => {
        event.preventDefault();
        setIndexInAddTask(index);
        setHideShowAddTask(false)
    }
    return (
        <>
            {
                listTask && listTask.map((res: any, index: number) => {
                    return <form className="itemget-task" key={index}
                                 onSubmit={() => putValueTask(res._id) }>
                        {indexState === index ? <input key={index} defaultValue={res.title}
                                                       onChange={(event) => changeValue(event)}
                                                       onClick={() => hideValue(index)}/> :
                            <span className="itemget-task__span" onClick={() => showValue(index)}>{res.title}</span>}
                        {
                            hideshowAddTask &&  indexInAddTask === index && <div  onClick={(event)=>hideAddTask(event,index)}><input  /></div>
                        }
                        <button  className="itemget-task__AddTask" onClick={(event)=>showAddTask(event,index)} ><AddIcon style={{fontSize:"15px"}}  />Add Task</button>
                    </form>
                })
            }
        </>
    );
}

export default Childrenlistboard;
