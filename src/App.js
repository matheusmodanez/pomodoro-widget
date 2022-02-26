import "./index.css";
import React from "react";
import Tasks from "./Tasks";
import Timer from "./Timer";

function App() {
  return <div className="bg-zinc-800 w-1/3 shadow-xl rounded-md">
    <Timer/>
    <Tasks/>
  </div>;
}

export default App;