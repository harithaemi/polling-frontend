import { useEffect, useState, useRef } from 'react';

const useCountdown = (startTime) => {
  const [timeLeft, setTimeLeft] = useState(startTime || 0);
  const timerRef = useRef(null);

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (!startTime) return;

    setTimeLeft(startTime);
    stop(); // stop any previous timer before starting a new one

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          stop();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => stop(); // cleanup on unmount
  }, [startTime]);

  return { timeLeft, stop };
};

export default useCountdown;

