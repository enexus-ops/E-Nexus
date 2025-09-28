import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import EventsGrid from "./components/EventsGrid";
import BackToTopButton from "./components/BackToTopButton";
import Contact from "./components/Contact/Contact";
import EnexusLanding from "./components/EnexusLanding";
import { upcomingEvents, pastEvents } from "./data/mockEvents";
import "./styles/globals.css";
import "./App.css"; // Keep if you have custom styles

function App() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(upcomingEvents);

  useEffect(() => {
    const eventsToFilter = activeTab === "upcoming" ? upcomingEvents : pastEvents;

    let filtered = eventsToFilter;

    if (activeFilter !== "all") {
      filtered = filtered.filter((event) =>
        event.category.toLowerCase().includes(activeFilter)
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.venue.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredEvents(filtered);
  }, [activeTab, activeFilter, searchQuery]);

  return (
    <>
      {/* Landing page component */}
      <EnexusLanding />

      {/* Router setup */}
      <Router>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      {/* Main events application */}
      <div className="app">
        <Header
          onSearch={setSearchQuery}
          onFilterSelect={setActiveFilter}
          activeFilter={activeFilter}
        />

        <motion.main
          className="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="container">
            {/* Hero Section */}
            <motion.section
              className="hero"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="hero-content">
                <motion.h1
                  className="hero-title"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Discover Amazing Events
                </motion.h1>
                <motion.p
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Join workshops, hackathons, tech talks, and festivals that
                  will elevate your skills and expand your network
                </motion.p>
              </div>
            </motion.section>

            {/* Tabs */}
            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Events Grid */}
            <section className="events-section">
              <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2>
                  {activeTab === "upcoming" ? "Upcoming Events" : "Past Events"}
                </h2>
                <p className="results-count">
                  {filteredEvents.length} event
                  {filteredEvents.length !== 1 ? "s" : ""} found
                  {activeFilter !== "all" && (
                    <span className="filter-indicator">
                      {" "}
                      • {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
                    </span>
                  )}
                  {searchQuery && (
                    <span className="search-indicator"> • "{searchQuery}"</span>
                  )}
                </p>
              </motion.div>

              <EventsGrid events={filteredEvents} type={activeTab} />
            </section>
          </div>
        </motion.main>

        <BackToTopButton />

        {/* Inline styling */}
        <style jsx>{`
          .app {
            min-height: 100vh;
            background: #0b0c10; /* Deep near-black background */
          }

          .main-content {
            padding-top: 120px;
            padding-bottom: var(--spacing-3xl);
            color: #ffffff;
          }

          .hero {
            text-align: center;
            padding: var(--spacing-3xl) 0;
            margin-bottom: var(--spacing-2xl);
          }

          .hero-content {
            max-width: 800px;
            margin: 0 auto;
          }

          .hero-title {
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 1.1;
            background: linear-gradient(135deg, #c42ec7, #5f2ddb);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: var(--spacing-lg);
          }

          .hero-subtitle {
            font-size: 1.25rem;
            color: #a5a6b4;
            line-height: 1.6;
            max-width: 600px;
            margin: 0 auto;
          }

          .events-section {
            margin-top: var(--spacing-2xl);
          }

          .section-header {
            text-align: center;
            margin-bottom: var(--spacing-xl);
          }

          .section-header h2 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: var(--spacing-md);
          }

          .results-count {
            font-size: 1.1rem;
            color: #a5a6b4;
          }

          .filter-indicator,
          .search-indicator {
            color: #c42ec7;
            font-weight: 600;
          }

          @media (max-width: 768px) {
            .main-content {
              padding-top: 100px;
            }
            .hero {
              padding: var(--spacing-2xl) 0;
            }
            .hero-title {
              font-size: 2.5rem;
            }
            .hero-subtitle {
              font-size: 1.1rem;
            }
            .section-header h2 {
              font-size: 2rem;
            }
            .results-count {
              font-size: 1rem;
            }
          }

          @media (max-width: 480px) {
            .hero-title {
              font-size: 2rem;
            }
            .hero-subtitle {
              font-size: 1rem;
            }
            .section-header h2 {
              font-size: 1.75rem;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default App;
