import React from "react";

function ListCompleted(props){

    const reuseTask = () => {
        props.restoreTask(props.index);
    }

    const removeTask = () => {
        props.deleteTask(props.index, 'completed');
    }

    return (
        <div>
            <div className="d-flex justify-content-center my-3">
            <div className="d-flex justify-content-between mx-5 w-40 bg-dark py-2 px-3 rounded completed">
                <span className="text-light ms-3 fs-5">{props.task}</span>
                <div>
                    <button onClick={reuseTask} className="btn btn-sm btn-success me-3"><i class="fa-solid fa-arrow-rotate-left"></i></button>
                    <button onClick={removeTask} className="btn btn-sm btn-danger"><i className="fa-duotone fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ListCompleted