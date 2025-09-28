import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="back-to-top-button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          whileHover={{ 
            scale: 1.1,
            y: -5,
            boxShadow: "0 20px 25px -5px rgba(0,0,0,0.15)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <FiArrowUp />
        </motion.button>
      )}

      <style jsx>{`
        .back-to-top-button {
          position: fixed;
          bottom: var(--spacing-xl);
          right: var(--spacing-xl);
          width: 56px;
          height: 56px;
          border: none;
          border-radius: 50%;
          /* New Theme Colors */
          background: #c42ec7;          /* Primary Accent */
          color: #ffffff;               /* Text Main */
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          z-index: 1000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;
        }

        .back-to-top-button:hover {
          background: #5f2ddb;          /* Secondary Accent */
        }

        @media (max-width: 640px) {
          .back-to-top-button {
            bottom: var(--spacing-lg);
            right: var(--spacing-lg);
            width: 48px;
            height: 48px;
            font-size: 1.3rem;
          }
        }
      `}</style>
    </AnimatePresence>
  );
};

export default BackToTopButton;
