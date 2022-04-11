import "./index.css";
import React from "react";
import Tasks from "./components/Tasks";
import Timer from "./components/Timer";
import Settings from "./components/Settings";

function App() {
  return <div className="bg-zinc-800 w-full h-full shadow-xl rounded-md">
    {/* <Settings/> */}
    <Timer/>
    <Tasks/>
  </div>;
}

export default App;