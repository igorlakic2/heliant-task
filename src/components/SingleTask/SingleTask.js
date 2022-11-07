import React from "react";
import "./SingleTask.css";

const SingleTask = ({ title, priority, onClick, deleteTask }) => {
  return (
    <div className="task-component" onClick={onClick}>
      <p>Naziv: {title}</p>
      <p>Prioritet: {priority}</p>
      <div>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          //   onChange={finishTask}
        />
        <label htmlFor="vehicle1">Završen</label>
      </div>
      <button onClick={deleteTask}>Obriši</button>
    </div>
  );
};

export default SingleTask;
