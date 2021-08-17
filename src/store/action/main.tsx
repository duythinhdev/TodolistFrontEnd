import * as actiontype from "../action/actiontype";

export  const AddTask = (title:any,order:number) => {
    console.log("title1231232",title)
    return {
        type: actiontype.ADD_TASK_APP,
        title: title,
        order: order
    }
}
export const GetTask = () => {
    return {
        type: actiontype.GET_TASK_APP
    }
}

export const GetTaskList = (title: any) =>{
    console.log("titleget",title.data)
    return {
        type: actiontype.GET_TASK_LIST_APP,
        title:title.data
    }
}
export const putTask = (id:number,title:any) => {
    console.log("id",id,"title",title)
    return {
        type: actiontype.PUT_TASK_APP,
        id:id,
        title:title
    }
}
