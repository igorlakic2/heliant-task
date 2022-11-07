import React from "react";
import "./SingleTask.css";

const SingleTask = ({ task, showTask, deleteTask }) => {
  return (
    <div className="task-component" onClick={() => showTask(task)}>
      <p>Naziv: {task.naziv}</p>
      <p>Prioritet: {task.prioritet}</p>
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
