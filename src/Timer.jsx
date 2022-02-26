import React, { useEffect, useRef, useState } from "react";
import { FiPlay, FiPause } from "react-icons/fi";
import { MdOutlineReplay } from "react-icons/md";

function Timer() {
  //useState: The React useState Hook allows us to track state in a function component. State generally refers to data or properites that need to be tracking in an application.
  const [secondsLeft, setSecondsLeft] = useState(1500);
  const [isPaused, setIsPaused] = useState(true);

  //useRef: The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  function restart() {
    clearInterval(secondsLeftRef.current);
    setSecondsLeft(1500);
  }

  //useEffect: The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.
  useEffect(() => {
    secondsLeftRef.current = secondsLeft;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }

      tick();

      if (secondsLeftRef.current === 0) {
        console.log("acabou!");
        clearInterval(interval);
      }
      
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div className="flex justify-center content-center rounded-lg text-white p-8">
      <p className="text-6xl text-white">
        {minutes}:{seconds}
      </p>
      {isPaused ? (
        <button
          className="p-2 px-2 pl-6 text-white"
          onClick={() => {
            setIsPaused(!isPaused);
            isPausedRef.current = !isPaused;
          }}
        >
          <FiPlay className="h-8 w-8 text-white" />
        </button>
      ) : (
        <button
          className="p-2 px-2 pl-6 text-white"
          onClick={() => {
            setIsPaused(!isPaused);
            isPausedRef.current = !isPaused;
          }}
        >
          <FiPause className="h-8 w-8 text-white" />
        </button>
      )}
      <button className="text-white" onClick={restart}>
        <MdOutlineReplay className="h-8 w-8 text-white" />
      </button>
    </div>
  );
}

export default Timer;
