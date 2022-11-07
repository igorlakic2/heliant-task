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

      <p className="task-title">Naziv: {task.naziv}</p>
      <p>
        Prioritet:{" "}
        {task.prioritet === "1"
          ? "Nizak"
          : task.prioritet === "2"
          ? "Srednji"
          : "Visok"}
      </p>
      <p>Rok predaje: {task.rokPredaje}</p>
      <div className="buttons-container">
        <button onClick={(e) => finishTask(e, task)} disabled={task.zavrsen}>
          {task.zavrsen ? "Završen" : "Završi"}
        </button>
        <button onClick={(e) => deleteTask(e, task)}>Obriši</button>
      </div>
    </div>
  );
};

export default SingleTask;
