import React, { useState } from "react";
import SingleTask from "../../components/SingleTask/SingleTask";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <button
        className="add-button"
        onClick={() => console.log("Dodaj zadatak")}
      >
        Dodaj zadatak
      </button>
      <div className="tasks-div">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((task, id) => (
          <SingleTask
            key={id}
            title={`Naslov ${task}`}
            priority="Visok"
            onClick={() => console.log("Single")}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
