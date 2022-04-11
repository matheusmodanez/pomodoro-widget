import React, { useState } from "react";
import { MdOutlineAddBox, MdDone, MdOutlineClose } from "react-icons/md";

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div className="flex content-center justify-between mt-6">
      <p className={task.isDone ? "text-emerald-600" : " text-stone-200"}>
        {task.text}
      </p>
      <div className="flex content-center justify-center mx-2 text-lg">
        <button onClick={() => completeTask(index)}>
          <MdDone className="mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 hover:text-emerald-600 duration-300" />
        </button>
        <button onClick={() => removeTask(index)}>
          <MdOutlineClose className="mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 hover:text-red-600 duration-300" />
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
        placeholder="Add a new task"
        className="outline-none	rounded-lg p-2 bg-neutral-200"
      />
      <button className="p-2 px-2" type="submit">
        <MdOutlineAddBox className="h-8 w-8 text-neutral-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 hover:text-white duration-300 " />
      </button>
    </form>
  );
}

function Tasks() {
  const [task, setTask] = useState([]);

  const addTask = (text) => {
    const tasks = [...task, { text }];
    setTask(tasks)
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
    <div className="p-4">
      <div className="justify-center content-center text-center">
        <p className="p-2 mr-4 -ml-2 text-3xl text-stone-200">Tasks</p>
        <AddTask addTask={addTask} className="text-2xl" />
      </div>

      <div className="pb-6 pt-2">
        <ul className="divide-y divide-stone-400">
          {task.map((t, index) => (
            <li className="mx-2 text-stone-200 mb-4">
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
