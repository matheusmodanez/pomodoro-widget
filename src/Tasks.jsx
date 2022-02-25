import React, { useState } from "react";
import { MdOutlineAddBox, MdDone, MdOutlineClose } from "react-icons/md";

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div className="flex content-center justify-between mt-6 border-y-detalheterciaria">
      <p className={task.isDone ? "text-emerald-600" : "black"}>{task.text}</p>
      <div className="flex content-center justify-center mx-2 text-lg">
        <button onClick={() => completeTask(index)}>
          <MdDone />
        </button>{" "}
        <button onClick={() => removeTask(index)}>
          <MdOutlineClose />
        </button>
      </div>
    </div>
  );
}

function AddTask({ addTask }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center content-center"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Task"
      />
      <button className="p-2 px-2" type="submit">
        <MdOutlineAddBox className="h-6 w-6" />
      </button>
    </form>
  );
}

function Tasks() {
  const [task, setTask] = useState([{ text: "", isDone: false }]);

  const addTask = (text) => {
    const tasks = [...task, { text }];
    setTask(tasks);
  };

  const completeTask = (index) => {
    const tasks = [...task];
    tasks[index].isDone = true;
    setTask(tasks);
  };

  const removeTask = (index) => {
    const tasks = [...task];
    tasks.splice(index, 1);
    setTask(tasks);
  };

  return (
    <div className="p-4 w-96">
      <div className="justify-between content-center">
        <p className="p-2 mr-4 -ml-2 text-2xl">Tasks</p>
        <AddTask addTask={addTask} className="text-2xl"/>
      </div>

      <div className="">
        <ul className="">
          {task.map((t, index) => (
            <li className="">
              <Task
                key={index}
                index={index}
                task={t}
                completeTask={completeTask}
                removeTask={removeTask}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
