import "./styles.css";
import React from "react";

export default function App() {
  const [count, setCount] = React.useState(-1);
  const isStart = count < 0;
  const onClick = React.useCallback(() => {
    setCount(isStart ? 3 : -1);
  }, [isStart]);

  React.useEffect(() => {
    if (count < 0) {
      return;
    }

    const timeoutId = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timeoutId);
  }, [count]);

  return (
    <div className="App">
      <button onClick={onClick} data-testid='countdown-button'>
        {isStart ? "Start Countdown" : "Cancel"}
      </button>
      {!isStart && <h1 data-testid='countdown-count'>{count > 0 ? count : "GO"}</h1>}
    </div>
  );
}
