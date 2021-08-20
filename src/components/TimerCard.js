import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./TimerCard.css";

const TimerCard = (props) => {
  const { title, removeTimer } = props;
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [hours, setHours] = useState("00");

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setCounter((prevVal) => prevVal + 1);
        const secCounter = counter % 60;
        const minCounter = Math.floor(counter / 60);
        const hrsCounter = Math.floor(counter / 3600);

        const computedSec =
          String(secCounter).length === 1 ? `0${secCounter}` : secCounter;
        const computedMin =
          String(minCounter).length === 1 ? `0${minCounter}` : minCounter;
        const computedHrs =
          String(hrsCounter).length === 1 ? `0${hrsCounter}` : hrsCounter;

        setSeconds(computedSec);
        setMinutes(computedMin);
        setHours(computedHrs);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);


  return (
    <div className="timer-card">
      <h5>{title}</h5>
      <h2 className="time">
        {hours}:{minutes}:{seconds}
      </h2>

      <div className="buttons-card">
        <FaTrashAlt className="trash-icon" onClick={() => removeTimer(title)} />

        <button
          className={isActive ? "stop" : "start"}
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default TimerCard;
