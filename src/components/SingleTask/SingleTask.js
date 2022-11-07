import React from "react";
import "./SingleTask.css";

const SingleTask = ({ task, showTask, deleteTask, finishTask }) => {
  return (
    <div className="task-component" onClick={() => showTask(task)}>
      {task.zavrsen && (
        <div className="check">
          <span className="checkmark">✔</span>
        </div>
      )}

      <p>Naziv: {task.naziv}</p>
      <p>
        Prioritet:{" "}
        {task.prioritet === "1"
          ? "Nizak"
          : task.prioritet === "2"
          ? "Srednji"
          : "Visok"}
      </p>
      <div>
        {/* <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          checked={task.zavrsen}
          onChange={finishTask}
        />
        <label htmlFor="vehicle1">Završen</label> */}
        <button onClick={(e) => finishTask(e, task)} disabled={task.zavrsen}>
          {task.zavrsen ? "Završen" : "Završi"}
        </button>
        <button onClick={(e) => deleteTask(e, task)}>Obriši</button>
      </div>
    </div>
  );
};

export default SingleTask;
