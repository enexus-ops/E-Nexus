import { motion } from 'framer-motion';

const Tabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'upcoming', label: 'Upcoming Events', icon: '🚀' },
    { id: 'past', label: 'Past Events', icon: '📚' }
  ];

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>

            {activeTab === tab.id && (
              <motion.div
                className="tab-indicator"
                layoutId="activeTab"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      <style jsx>{`
        .tabs-container {
          margin: var(--spacing-3xl) 0 var(--spacing-2xl);
          display: flex;
          justify-content: center;
        }

        .tabs {
          display: flex;
          gap: var(--spacing-xs);
          background: #161b29;                  /* Dark navy card background */
          padding: var(--spacing-xs);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(197, 46, 199, 0.15); /* subtle accent border */
        }

        .tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-md) var(--spacing-xl);
          border: none;
          border-radius: var(--radius-xl);
          background: transparent;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          color: #a5a6b4;                        /* Subtle text gray */
          transition: all var(--transition-normal);
          z-index: 1;
        }

        .tab.active {
          color: #ffffff;                        /* Main text white */
        }

        .tab:hover:not(.active) {
          color: #c42ec7;                        /* Primary accent on hover */
          background: rgba(197, 46, 199, 0.1);   /* light accent hover bg */
        }

        .tab-icon {
          font-size: 1.1rem;
        }

        .tab-indicator {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, #3b82f6, #a855f7); /* button gradient */
          border-radius: var(--radius-xl);
          z-index: -1;
          box-shadow: var(--shadow-md);
        }

        @media (max-width: 640px) {
          .tab {
            padding: var(--spacing-sm) var(--spacing-lg);
            font-size: 0.9rem;
          }

          .tab-label {
            display: none;
          }

          .tab-icon {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Tabs;
