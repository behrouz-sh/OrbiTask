import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';

const useTimer = (initialSeconds = 30, onExpire) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startTimer = useCallback(() => {
    clearTimer();
    setIsActive(true);
    setSeconds(initialSeconds);

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearTimer();
          setIsActive(false);
          onExpire?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [initialSeconds, onExpire]);

  const resetTimer = () => {
    clearTimer();
    setIsActive(false);
    setSeconds(initialSeconds);
  };

  useEffect(() => clearTimer, []);

  return { seconds, isActive, startTimer, resetTimer };
};

export default useTimer;
