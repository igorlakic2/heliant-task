import React from "react";
import "./SingleTask.css";

const SingleTask = ({ title, priority, onClick }) => {
  return (
    <div className="task-component" onClick={onClick}>
      <p>Naziv: {title}</p>
      <p>Prioritet: {priority}</p>
      <div>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1">Završen</label>
      </div>
      <button>Obriši</button>
    </div>
  );
};

export default SingleTask;
