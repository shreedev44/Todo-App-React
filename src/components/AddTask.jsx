import React, { useState } from "react";

function AddTask(props) {
  let [value, setValue] = useState('');

  const addItem = () => {
    props.addTask(value.trim());
    setValue('');
  };

  return (
    <div className="mt-5 py-5">
      <div className="d-flex justify-content-center">
        <input 
          type="text" 
          value={value} 
          className="form-control w-40 border border-dark border-3" 
          placeholder="Add a task" 
          onChange={(element) => setValue(element.target.value)} 
        />
        <button className="btn btn-sm btn-dark mx-3 px-3" onClick={addItem}><i className="fa-solid fa-plus"></i></button>
      </div>
    </div>
  );
}

export default AddTask;
