import React, { useEffect, useState } from "react";
import AddTaskModal from "../../components/Modal/AddTaskModal";
import SingleTask from "../../components/SingleTask/SingleTask";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(window.localStorage.getItem("tasks") || [])
  );
  const [addModalState, setAddModalState] = useState(false);
  const [taskData, setTaskData] = useState({
    naziv: "",
    opis: "",
    prioritet: "1",
    rokPredaje: "",
    zavrsen: false,
  });

  const showTaskModal = (task) => {
    console.log(task);
  };

  const deleteTask = (e, task) => {
    e.stopPropagation();
    console.log("delete");
  };

  const addTask = () => {
    setTasks([...tasks, taskData]);
  };

  const finishTask = (e, task) => {
    e.stopPropagation();
    console.log(task);
  };

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      {addModalState && (
        <AddTaskModal
          data={taskData}
          setData={setTaskData}
          setModalState={setAddModalState}
          addTask={addTask}
        />
      )}
      <button className="add-button" onClick={() => setAddModalState(true)}>
        Dodaj zadatak
      </button>
      <div className="tasks-div">
        {tasks.map((task, id) => (
          <SingleTask
            task={task}
            key={id}
            showTask={showTaskModal}
            deleteTask={deleteTask}
            finishTask={finishTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
