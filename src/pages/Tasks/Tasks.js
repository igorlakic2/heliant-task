import React, { useEffect, useState } from "react";
import SingleTask from "../../components/SingleTask/SingleTask";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(window.localStorage.getItem("tasks"))
  );

  const addTask = () => {
    setTasks([...tasks, 1]);
  };

  useEffect(() => {
    console.log(JSON.stringify(tasks));
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <button className="add-button" onClick={addTask}>
        Dodaj zadatak
      </button>
      <div className="tasks-div">
        {tasks.map((task, id) => (
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
