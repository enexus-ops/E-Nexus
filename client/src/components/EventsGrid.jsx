import { motion, AnimatePresence } from 'framer-motion';
import EventCard from './EventCard';

const EventsGrid = ({ events, type = 'upcoming' }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const slideVariants = {
    hidden: { x: type === 'upcoming' ? -100 : 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: { 
      x: type === 'upcoming' ? 100 : -100, 
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  if (events.length === 0) {
    return (
      <motion.div 
        className="empty-state"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="empty-content">
          <span className="empty-icon">
            {type === 'upcoming' ? '🔍' : '📚'}
          </span>
          <h3>No {type} events found</h3>
          <p>
            {type === 'upcoming' 
              ? 'Check back soon for exciting upcoming events!' 
              : 'No past events to display at the moment.'}
          </p>
        </div>

        <style jsx>{`
          .empty-state {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 400px;
            padding: var(--spacing-3xl);
          }

          .empty-content {
            text-align: center;
            max-width: 400px;
          }

          .empty-icon {
            font-size: 4rem;
            margin-bottom: var(--spacing-lg);
            display: block;
          }

          .empty-content h3 {
            font-size: 1.5rem;
            font-weight: 600;
            /* blue-purple heading */
            background: linear-gradient(135deg, #5a77ff, #9b59ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: var(--spacing-md);
          }

          .empty-content p {
            color: #4b5563;
            font-size: 1rem;
            line-height: 1.6;
          }
        `}</style>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={type}
        className="events-grid"
        variants={slideVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div 
          className="grid-container"
          variants={containerVariants}
        >
          {events.map((event, index) => (
            <EventCard 
              key={event.id} 
              event={event} 
              type={type}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>

      <style jsx>{`
        .events-grid {
          width: 100%;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: var(--spacing-xl);
          padding: var(--spacing-lg) 0;
        }

        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
            padding: var(--spacing-md) 0;
          }
        }

        @media (max-width: 480px) {
          .grid-container {
            gap: var(--spacing-md);
          }
        }
      `}</style>
    </AnimatePresence>
  );
};

export default EventsGrid;
