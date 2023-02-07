import React, { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";

function Timer({ quizEnded }) {
  const { seconds, minutes, hours, pause } = useStopwatch({
    autoStart: true,
    format: "24-hour",
  });

  useEffect(() => {
    if (quizEnded) {
      pause();
    }
  }, [quizEnded]);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{hours < 10 ? `0${hours}` : hours}</span>:
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
}

export default Timer;
