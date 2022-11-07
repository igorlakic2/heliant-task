import React, { useEffect, useState } from "react";
import AddTaskModal from "../../components/Modal/AddTaskModal";
import SingleTaskModal from "../../components/Modal/SingleTaskModal";
import SingleTask from "../../components/SingleTask/SingleTask";
import "./Tasks.css";
import { v4 as uuidv4 } from "uuid";

const Tasks = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(window.localStorage.getItem("tasks") || [])
  );
  const [addModalState, setAddModalState] = useState(false);
  const [editModalState, setEditModalState] = useState(false);
  const [editData, setEditData] = useState(null);
  const [taskData, setTaskData] = useState({
    naziv: "",
    opis: "",
    prioritet: "1",
    rokPredaje: "",
    zavrsen: false,
    id: uuidv4(),
  });

  const showTaskModal = (task) => {
    setEditData(task);
    setEditModalState(true);
  };

  const deleteTask = (e, task) => {
    e.stopPropagation();
    console.log("delete");
  };

  const addTask = () => {
    setTasks([...tasks, taskData]);
  };

  const editTask = (task) => {
    let items = [...tasks];
    let itemById = items.find((el) => el.id === task.id);
    const index = items.indexOf(itemById);
    let item = { ...items[index] };

    item.naziv = task.naziv;
    item.rokPredaje = task.rokPredaje;
    item.opis = task.opis;
    item.prioritet = task.prioritet;
    item.id = task.id;
    item.zavrsen = task.zavrsen;

    items[index] = item;
    setTasks(items);
    setEditModalState(false);
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
      {editModalState && (
        <SingleTaskModal
          data={editData}
          setData={setEditData}
          setModalState={setEditModalState}
          editTask={editTask}
        />
      )}
      <button className="add-button" onClick={() => setAddModalState(true)}>
        Dodaj zadatak
      </button>
      <div className="tasks-div">
        {tasks
          .sort((a, b) => b.prioritet - a.prioritet)
          .map((task, id) => (
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
