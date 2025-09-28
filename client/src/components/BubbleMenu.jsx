import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const BubbleMenu = ({ isOpen, onClose, onFilterSelect, activeFilter, triggerRef }) => {
  const filterOptions = [
    { id: 'all', label: 'All Events', icon: '🎯' },
    { id: 'workshops', label: 'Workshops', icon: '🛠️' },
    { id: 'hackathons', label: 'Hackathons', icon: '💻' },
    { id: 'techtalks', label: 'Tech Talks', icon: '🎤' },
    { id: 'fests', label: 'Fests', icon: '🎉' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest('.bubble-menu-container') &&
        !triggerRef?.current?.contains(event.target)
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose, triggerRef]);

  const containerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut', staggerChildren: 0.1, delayChildren: 0.1 }
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeIn' }
    }
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 25 }
    }
  };

  const handleFilterClick = (filterId) => {
    onFilterSelect(filterId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="bubble-menu-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="bubble-menu">
            {filterOptions.map((option, index) => (
              <motion.button
                key={option.id}
                className={`bubble-item ${activeFilter === option.id ? 'active' : ''}`}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterClick(option.id)}
                style={{ zIndex: filterOptions.length - index }}
              >
                <span className="bubble-icon">{option.icon}</span>
                <span className="bubble-label">{option.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      <style jsx>{`
        .bubble-menu-container {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          z-index: 1000;
          transform-origin: top right;
        }

        .bubble-menu {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 16px;
          background: #161b29;                /* Dark panel */
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.08);
          min-width: 180px;
        }

        .bubble-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border: none;
          border-radius: 12px;
          background: transparent;
          color: #a5a6b4;                     /* Subtle text */
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          text-align: left;
          white-space: nowrap;
        }

        .bubble-item:hover {
          background: #c42ec7;                /* Primary Accent */
          color: #ffffff;                     /* Text Main */
        }

        .bubble-item.active {
          background: #5f2ddb;                /* Secondary Accent */
          color: #ffffff;
        }

        .bubble-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .bubble-label {
          font-size: 0.9rem;
          font-weight: 500;
        }

        @media (max-width: 480px) {
          .bubble-menu {
            min-width: 160px;
            padding: 12px;
          }

          .bubble-item {
            padding: 8px 12px;
          }

          .bubble-label {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </AnimatePresence>
  );
};

export default BubbleMenu;
