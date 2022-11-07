import React from "react";
import SingleTask from "../../components/SingleTask/SingleTask";
import "./Tasks.css";

const Tasks = () => {
  return (
    <div className="tasks-div">
      {[1, 2, 3, 4, 5].map((task) => (
        <SingleTask />
      ))}
    </div>
  );
};

export default Tasks;
