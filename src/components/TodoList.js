import React, {useEffect, useState} from 'react';
import CreateTaskList from '../modals/CreateTaskList';
import Card from './Card';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskBoard, setTaskBoard] = useState([]);

    const toggle = () => {
        setModal(!modal);
    }

    const deleteTask = (index) => {
        let tempList = taskBoard
        tempList.splice(index, 1)
        localStorage.setItem("taskBoard", JSON.stringify(tempList))
        setTaskBoard(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskBoard
        tempList[index] = obj
        localStorage.setItem("taskBoard", JSON.stringify(tempList))
        setTaskBoard(tempList)
        window.location.reload()
    }

    useEffect(() => {
        let arr = localStorage.getItem("taskBoard")
        if(arr){
            let obj = JSON.parse(arr)
            setTaskBoard(obj)
        }
    }, []);

    const saveTask = (taskObj) => {
        let tempList = taskBoard
        tempList.push(taskObj)
        localStorage.setItem("taskBoard", JSON.stringify(tempList))
        setTaskBoard(tempList)
        setModal(false)
    }

    return (
       <>
         <div className = "header text-center">
            <h3>Todo List</h3>
            <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)}> Create Task List</button>
        </div>
        <div className = "task-container">
            {taskBoard.map((obj, index) => <Card taskObj = {obj} index = {index}
            deleteTask = {deleteTask} updateListArray = {updateListArray}/>)}
        </div>
        <CreateTaskList toggle = {toggle} modal = {modal} save = {saveTask}/>
       </>
    );
};

export default TodoList;