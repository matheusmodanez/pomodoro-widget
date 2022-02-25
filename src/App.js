import "./index.css";
import React from "react";
import Tasks from "./Tasks";
import Timer from "./Timer";

function App() {
  return <div className="bg-green-400">
    <Timer/>
    <Tasks/>
  </div>;
}

export default App;