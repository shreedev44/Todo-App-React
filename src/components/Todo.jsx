import React, { useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import ListCompleted from "./ListCompleted";

function Todo() {
    const [tasks, setTask] = useState([]);
    const [completed, setCompleted] = useState([]);

    const addTask = (task) => {
        if (task) {
            const newTask = [...tasks, task];
            setTask(newTask);
        }
    };

    const deleteTask = (index, taskType = 'pending') => {
        let newTasks = taskType === 'pending' ? [...tasks] : [...completed]
        newTasks.splice(index, 1);
        if(taskType === 'pending') setTask(newTasks);
        else setCompleted(newTasks);
    }

    const completeTask = (index) => {
        const newTask = [...completed];
        newTask.push(tasks[index]);
        setCompleted(newTask);
        deleteTask(index);
    }

    const restoreTask = (index) => {
        let newTask = [...completed];
        let restoringTask = newTask.splice(index, 1);
        setCompleted(newTask);
        addTask(...restoringTask);
    }

    const edit = (index, task) => {
        let newTask = [...tasks];
        newTask[index] = task;
        setTask(newTask);
    }

    return (
        <div>
            <div className="d-flex justify-content-center pt-5">
                <h1>ToDo App</h1>
            </div>


            <AddTask addTask={addTask} />

            <div className="d-flex justify-content-center">
                <hr className="mt-3 mb-5 mx-5 px-5 w-50 border border-dark" />
            </div>

            <div className="d-flex justify-content-center">
                <h3>{tasks.length ? "Pending Tasks" : "No Tasks Pending"}</h3>
            </div>

            {tasks.map((task, index) => (
            <ListTask task={task} key={index} deleteTask={deleteTask} index={tasks.indexOf(task)} completeTask={completeTask} edit={edit} />
            ))}

            <div className="d-flex justify-content-center">
                <hr className="my-5 mx-5 px-5 border w-50 border-dark" />
            </div>

            <div className="d-flex justify-content-center">
                <h3>{completed.length ? "Finished Tasks" : "No Finished Tasks"}</h3>
            </div>


            {completed.map((task, index) => (
                <ListCompleted task={task} key={index} index={completed.indexOf(task)} restoreTask={restoreTask} deleteTask={deleteTask} edit={edit} />
            ))}
        </div>
    );
}

export default Todo;
