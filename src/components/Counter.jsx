
import React, { useState, useEffect } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    console.log("Current Counter Value:", count);
  }, [count]);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <div className="counter-card">

        <h1>Counter Application</h1>
        <p className="subtitle">React useState Hook Practice</p>

        <div className="counter-display">
          {count}
        </div>

        <div className="counter-buttons">
          <button className="increment" onClick={increment}>
            Increment
          </button>

          <button className="decrement" onClick={decrement}>
            Decrement
          </button>

          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>

        <div className="theme-section">
          <h3>
            Current Theme: {isDark ? "Dark Mode" : "Light Mode"}
          </h3>

          <button className="theme-button" onClick={toggleTheme}>
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Counter;
