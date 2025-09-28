import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [prevTimeLeft, setPrevTimeLeft] = useState(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setPrevTimeLeft(timeLeft);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  const TimeUnit = ({ value, label }) => (
    <div className="time-unit">
      <div className="digit-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            className="digit"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {formatNumber(value)}
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="unit-label">{label}</span>
    </div>
  );

  return (
    <motion.div
      className="countdown-timer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="time-block"><TimeUnit value={timeLeft.days} label="Days" /></div>
      <span className="separator">:</span>
      <div className="time-block"><TimeUnit value={timeLeft.hours} label="Hours" /></div>
      <span className="separator">:</span>
      <div className="time-block"><TimeUnit value={timeLeft.minutes} label="Minutes" /></div>
      <span className="separator">:</span>
      <div className="time-block"><TimeUnit value={timeLeft.seconds} label="Seconds" /></div>

      <style jsx>{`
        .countdown-timer {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #161b29;                  /* Dark card background */
          border-radius: 12px;
          padding: 12px 18px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          gap: 10px;
          width: fit-content;
          margin: 0 auto;
        }

        .time-block {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .digit-container {
          width: 40px;
          height: 40px;
          background: #0B0C10;                  /* Deep background for digits */
          color: #ffffff;                       /* Main text */
          font-size: 1rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          position: relative;
          perspective: 1000px;
        }

        .digit {
          position: absolute;
          font-size: 1rem;
          font-weight: bold;
        }

        .unit-label {
          font-size: 0.6rem;
          font-weight: 600;
          color: #a5a6b4;                        /* Subtle label text */
          text-transform: uppercase;
          margin-top: 4px;
          letter-spacing: 0.5px;
        }

        .separator {
          font-size: 1.2rem;
          font-weight: 700;
          color: #a5a6b4;                        /* Matches label color */
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
        }

        @media (max-width: 480px) {
          .digit-container {
            width: 32px;
            height: 32px;
            font-size: 0.85rem;
          }
          .separator {
            font-size: 1rem;
            padding: 0 2px;
          }
          .unit-label {
            font-size: 0.5rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default CountdownTimer;
