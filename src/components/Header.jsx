import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';
import BubbleMenu from './BubbleMenu';

const Header = ({ onSearch, onFilterSelect, activeFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showBubbleMenu, setShowBubbleMenu] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1><strong>Event</strong></h1>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="search-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="search-input-wrapper">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={handleSearch}
                className="search-input"
              />
            </div>
          </motion.div>

          {/* Filter Button */}
          <motion.div
            className="filter-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.button
              className="filter-button"
              onClick={() => setShowBubbleMenu(!showBubbleMenu)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiFilter />
            </motion.button>

            <BubbleMenu
              isOpen={showBubbleMenu}
              onClose={() => setShowBubbleMenu(false)}
              onFilterSelect={onFilterSelect}
              activeFilter={activeFilter}
            />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(11, 12, 16, 0.9);        /* deep near-black */
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #161b29;        /* dark navy border */
          z-index: 1000;
          padding: var(--spacing-md) 0;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--spacing-lg);
        }

        .logo h1 {
          font-size: 1.75rem;
          font-weight: 700;
          background: linear-gradient(135deg, #c42ec7, #5f2ddb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          cursor: pointer;
          margin: 0;
          white-space: nowrap;
        }

        .search-container {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .search-input-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: var(--spacing-md);
          color: #a5a6b4;                          /* subtle gray */
          font-size: 1.2rem;
        }

        .search-input {
          width: 100%;
          height: 48px;
          padding: 0 var(--spacing-lg) 0 var(--spacing-3xl);
          border: 2px solid transparent;
          border-radius: var(--radius-xl);
          background: #161b29;                     /* card background */
          color: #ffffff;                          /* main text */
          font-size: 1rem;
          transition: all var(--transition-normal);
          box-shadow: var(--shadow-sm);
        }

        .search-input::placeholder {
          color: #a5a6b4;
        }

        .search-input:focus {
          outline: none;
          border-color: #c42ec7;                   /* primary accent */
          box-shadow: var(--shadow-md);
        }

        .filter-container {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .filter-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border: none;
          border-radius: var(--radius-xl);
          background: linear-gradient(90deg, #3b82f6, #a855f7);
          color: white;
          cursor: pointer;
          transition: all var(--transition-normal);
          box-shadow: var(--shadow-md);
        }

        .filter-button:hover {
          filter: brightness(1.1);
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 768px) {
          .header-content {
            gap: var(--spacing-md);
          }

          .logo h1 {
            font-size: 1.5rem;
          }

          .search-input {
            height: 40px;
            font-size: 0.9rem;
            padding-left: var(--spacing-xl);
          }

          .filter-button {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
