import React, { useState, useEffect } from "react";
import "./App.css";
import TimerCard from "./TimerCard";

const App = () => {
  const [timerTitles, setTimerTitles] = useState([]);
  const [tempTitle, setTempTitle] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimerTitles([...timerTitles, tempTitle]);

    setTempTitle("");
    setIsClicked(false);
  };

  const removeTimer = (titleToRemove) => {
    const filtered = timerTitles.filter((title) => title !== titleToRemove);

    setTimerTitles(filtered);
  };

  return (
    <div className="container">
      {isClicked && (
        <div className="input-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Title</label>
            </div>
            <input
              type="text"
              value={tempTitle}
              onChange={(e) => setTempTitle(e.target.value)}
            />

            <div>
              <button type="submit">Create</button>
              <button
                className="button-cancel"
                onClick={() => {
                  setIsClicked(false);
                  setTempTitle("");
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {timerTitles.map((title, idx) => {
        return <TimerCard title={title} key={idx} removeTimer={removeTimer} />;
      })}

      <button className="button-add-timer" onClick={() => setIsClicked(true)}>
        +
      </button>
    </div>
  );
};

export default App;
