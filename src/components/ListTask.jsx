import React, {useState} from "react";

function ListTask(props) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(props.task);

    const removeTask = () => {
        props.deleteTask(props.index)
    }
    const finishTask = () => {
        props.completeTask(props.index)
    }
    const createInput = () => {
        if(isEditing){
            props.edit(props.index, editedTask)
            setIsEditing(false)
        }
        else{
            setIsEditing(true);
            
        }
    }
    const handleInputChange = (event) => {
        setEditedTask(event.target.value)
    }

    return (
        <div className="d-flex justify-content-center my-3">
            <div className="d-flex justify-content-between mx-5 w-40 bg-dark py-2 px-3 rounded">
                {!isEditing ? (
                    <span className="text-light ms-3 fs-5">{props.task}</span>
                ): (
                    <input type="text" className="bg-light border-0 fs-6 ms-3 edit-field" value={editedTask} onChange={handleInputChange} />
                )}
                <div>
                    <button onClick={finishTask} className="btn btn-sm btn-success "><i className="fa-duotone fa-solid fa-check"></i></button>
                    <button onClick={createInput} className="btn btn-sm btn-warning mx-2"> {!isEditing ? (<i className="fa-duotone fa-solid fa-pen-to-square"></i>) : (<i class="fa-solid fa-floppy-disk"></i>)}</button>
                    <button onClick={removeTask} className="btn btn-sm btn-danger"><i className="fa-duotone fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
    );
}

export default ListTask;