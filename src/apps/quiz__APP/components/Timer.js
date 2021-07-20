import { useEffect, useState } from "react";
import secConverter from "../../../functions/secondsConverter";

export default function Timer({ setTimeOut, questionNumber }) {
  const [timer, setTimer] = useState(120);
  const [convertedTime, setConvertedTime] = useState(120);
  useEffect(() => {
    if (timer === 0) return setTimeOut(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

  useEffect(() => {
    setConvertedTime(secConverter(Number(timer), "sec"));
  }, [timer]);

  useEffect(() => {
    setTimer(120);
  }, [questionNumber]);

  return (
    <>
      {convertedTime.minutes > 0 && <span> {convertedTime.minutes}:</span>}
      {convertedTime.seconds}
    </>
  );
}
