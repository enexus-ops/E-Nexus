import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiClock, FiEye } from 'react-icons/fi';
import CountdownTimer from './CountdownTimer';

const EventCard = ({ event, type = 'upcoming', index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: index * 0.1, ease: 'easeOut' },
    },
  };

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  const formatTime = (dateString) =>
    new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

  /* ---------- Past Event Card ---------- */
  if (type === 'past') {
    return (
      <motion.div
        className="event-card past-event"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.03,
          y: -5,
          boxShadow: '0 25px 40px -5px rgba(0,0,0,0.15)',
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="card-image">
          <img
            src={
              event.image ||
              `https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400`
            }
            alt={event.title}
          />
          <div className="image-overlay">
            <span className="event-status">Completed</span>
          </div>
        </div>

        <div className="card-content">
          <div className="top-section">
            <h3 className="event-title">{event.title}</h3>
            <div className="event-meta">
              <span className="meta-item">
                <FiCalendar />
                {formatDate(event.date)}
              </span>
              <span className="meta-item">
                <FiMapPin />
                {event.venue}
              </span>
            </div>
            <p className="event-description">{event.description}</p>
          </div>

          <div className="highlights-button-container">
            <motion.button
              className="action-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiEye />
              View Highlights
            </motion.button>
          </div>
        </div>

        <style jsx>{`
          .event-card {
            background: #161b29; /* light-dark panel */
            border-radius: var(--radius-2xl);
            box-shadow: var(--shadow-lg);
            overflow: hidden;
            border: 1px solid rgba(82, 120, 255, 0.15);
            transition: all var(--transition-normal);
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 420px;
            color: #ffffff;
          }
          .card-image {
            position: relative;
            height: 200px;
            overflow: hidden;
          }
          .card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform var(--transition-slow);
          }
          .event-card:hover .card-image img {
            transform: scale(1.05);
          }
          .image-overlay {
            position: absolute;
            top: var(--spacing-md);
            right: var(--spacing-md);
          }
          .event-status {
            padding: var(--spacing-xs) var(--spacing-md);
            background: #6b7280;
            color: #fff;
            border-radius: var(--radius-lg);
            font-size: 0.8rem;
            font-weight: 600;
          }
          .card-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1;
            padding: var(--spacing-xl);
          }
          .top-section {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
          }
          .event-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #ffffff;
            margin: 0 0 var(--spacing-md) 0;
          }
          .event-meta {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-sm);
            margin-bottom: var(--spacing-md);
          }
          .meta-item {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            font-size: 0.9rem;
            color: #a5a6b4;
          }
          .event-description {
            flex-grow: 1;
            color: #d1d2db;
            line-height: 1.6;
            opacity: 0.9;
          }
          .highlights-button-container {
            margin-top: auto;
          }
          .action-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: var(--spacing-md) var(--spacing-lg);
            border: none;
            border-radius: var(--radius-xl);
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all var(--transition-normal);
          }
          .action-button.primary {
            background: linear-gradient(90deg, #3b82f6, #a855f7);
            color: #fff;
            box-shadow: 0 4px 10px rgba(90, 119, 255, 0.3);
          }
          .action-button.primary:hover {
            background: linear-gradient(90deg, #a855f7, #3b82f6);
            box-shadow: 0 6px 14px rgba(90, 119, 255, 0.4);
            transform: translateY(-2px);
          }
        `}</style>
      </motion.div>
    );
  }

  /* ---------- Upcoming Event Card ---------- */
  return (
    <motion.div
      className="event-card upcoming-event"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.03,
        y: -5,
        boxShadow: '0 25px 40px -5px rgba(0,0,0,0.15)',
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="card-content">
        <div className="top-section">
          <div className="event-header">
            <h3 className="event-title">{event.title}</h3>
            <div className="event-category">{event.category}</div>
          </div>

          <div className="event-meta">
            <div className="meta-item">
              <FiCalendar />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="meta-item">
              <FiClock />
              <span>{formatTime(event.date)}</span>
            </div>
            <div className="meta-item">
              <FiMapPin />
              <span>{event.venue}</span>
            </div>
          </div>

          <p className="event-description">{event.description}</p>
        </div>

        <CountdownTimer targetDate={event.date} />

        <div className="register-button-container">
          <motion.button
            className="action-button primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </div>
      </div>

      <style jsx>{`
        .event-card {
          background: #161b29;
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          border: 1px solid rgba(82, 120, 255, 0.15);
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 420px;
          color: #ffffff;
        }
        .card-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          padding: var(--spacing-xl);
          height: 100%;
        }
        .top-section {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          margin-bottom: var(--spacing-md);
        }
        .event-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--spacing-lg);
          gap: var(--spacing-md);
        }
        .event-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
          flex: 1;
        }
        .event-category {
          padding: var(--spacing-xs) var(--spacing-md);
          background: linear-gradient(135deg, #c42ec7, #5f2ddb);
          color: #fff;
          border-radius: var(--radius-lg);
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
        }
        .event-meta {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-lg);
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          font-size: 0.9rem;
          color: #a5a6b4;
        }
        .event-description {
          flex-grow: 1;
          color: #d1d2db;
          line-height: 1.6;
          margin-bottom: var(--spacing-lg);
          opacity: 0.9;
        }
        .register-button-container {
          margin-top: auto;
          padding-top: var(--spacing-md);
        }
        .action-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: var(--spacing-md) var(--spacing-lg);
          border: none;
          border-radius: var(--radius-xl);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all var(--transition-normal);
        }
        .action-button.primary {
          background: linear-gradient(90deg, #3b82f6, #a855f7);
          color: #fff;
          box-shadow: 0 4px 10px rgba(90, 119, 255, 0.3);
        }
        .action-button.primary:hover {
          background: linear-gradient(90deg, #a855f7, #3b82f6);
          box-shadow: 0 6px 14px rgba(90, 119, 255, 0.4);
          transform: translateY(-2px);
        }
        @media (max-width: 640px) {
          .card-content {
            padding: var(--spacing-lg);
          }
          .event-header {
            flex-direction: column;
            gap: var(--spacing-md);
          }
          .event-title {
            font-size: 1.1rem;
          }
          .event-meta {
            gap: var(--spacing-xs);
          }
          .meta-item {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default EventCard;
