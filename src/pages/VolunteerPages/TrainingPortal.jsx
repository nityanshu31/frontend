import React, { useState } from 'react';

const TrainingPortal = () => {
  // State for tracking progress and active sections
  const [activeSection, setActiveSection] = useState('updates');
  const [courseProgress, setCourseProgress] = useState({
    foodDistribution: 75,
    fireSafety: 45,
    floodRelief: 60,
    accidentManagement: 30
  });

  // Sample data for training categories and updates
  const trainingCategories = [
    {
      id: 'foodDistribution',
      title: 'Food Distribution',
      icon: '🍽️',
      courses: [
        'Food Safety Standards',
        'Nutrition Basics',
        'Emergency Food Distribution'
      ]
    },
    {
      id: 'fireSafety',
      title: 'Fire Safety',
      icon: '🔥',
      courses: [
        'Fire Prevention Techniques',
        'Emergency Evacuation Procedures',
        'Fire Extinguisher Training'
      ]
    },
    {
      id: 'floodRelief',
      title: 'Flood Relief',
      icon: '🌊',
      courses: [
        'Flood Risk Assessment',
        'Emergency Response Planning',
        'Community Awareness Programs'
      ]
    },
    {
      id: 'accidentManagement',
      title: 'Accident Management',
      icon: '🚑',
      courses: [
        'First Aid Basics',
        'Accident Scene Management',
        'Emergency Medical Response'
      ]
    }
  ];

  const latestUpdates = [
    {
      title: 'New Food Distribution Course Launched',
      description: 'Learn the essentials of food safety and distribution.',
      date: 'June 15, 2023'
    },
    {
      title: 'Fire Safety Training Revision',
      description: 'Updated fire safety protocols released.',
      date: 'June 10, 2023'
    }
  ];

  // Function to update course progress
  const updateProgress = (category) => {
    setCourseProgress(prev => ({
      ...prev,
      [category]: Math.min(prev[category] + 10, 100)
    }));
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <span style={styles.headerIcon}>📚</span>
          <h1 style={styles.headerTitle}>Professional Training Portal</h1>
        </div>
        <nav style={styles.nav}>
          {['Updates', 'Courses', 'Progress'].map(section => (
            <button
              key={section}
              style={{
                ...styles.navButton,
                ...(activeSection === section.toLowerCase() && styles.activeNavButton)
              }}
              onClick={() => setActiveSection(section.toLowerCase())}
            >
              {section}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Latest Updates Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Latest Updates</h2>
          <div style={styles.updatesGrid}>
            {latestUpdates.map((update, index) => (
              <div key={index} style={styles.updateCard}>
                <h3 style={styles.updateTitle}>{update.title}</h3>
                <p style={styles.updateDescription}>{update.description}</p>
                <span style={styles.updateDate}>{update.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Training Categories */}
        <section style={styles.categoriesGrid}>
          {trainingCategories.map((category) => (
            <div key={category.id} style={styles.categoryCard}>
              <div style={styles.categoryHeader}>
                <span style={styles.categoryIcon}>{category.icon}</span>
                <h3 style={styles.categoryTitle}>{category.title}</h3>
              </div>

              {/* Progress Bar */}
              <div style={styles.progressContainer}>
                <div style={styles.progressLabels}>
                  <span style={styles.progressLabel}>Progress</span>
                  <span style={styles.progressValue}>{courseProgress[category.id]}%</span>
                </div>
                <div style={styles.progressBar}>
                  <div
                    style={{
                      ...styles.progressFill,
                      width: `${courseProgress[category.id]}%`
                    }}
                  ></div>
                </div>
              </div>

              {/* Courses List */}
              <ul style={styles.coursesList}>
                {category.courses.map((course, index) => (
                  <li key={index} style={styles.courseItem}>
                    <span style={styles.courseIcon}>✔️</span>
                    {course}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                onClick={() => updateProgress(category.id)}
                style={styles.actionButton}
              >
                Start Learning
              </button>
            </div>
          ))}
        </section>

        {/* Certification Tracker */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Certification Tracker</h2>
          <div style={styles.certificationsGrid}>
            {Object.entries(courseProgress).map(([category, progress]) => (
              <div key={category} style={styles.certificationCard}>
                <h3 style={styles.certificationTitle}>{category} Certification</h3>
                <div style={styles.progressBar}>
                  <div
                    style={{
                      ...styles.progressFill,
                      width: `${progress}%`,
                      backgroundColor: '#10B981'
                    }}
                  ></div>
                </div>
                <div style={styles.progressLabels}>
                  <span style={styles.progressLabel}>Progress</span>
                  <span style={styles.progressValue}>{progress}%</span>
                </div>
                <button
                  style={{
                    ...styles.actionButton,
                    backgroundColor: progress === 100 ? '#10B981' : '#3B82F6',
                    cursor: progress === 100 ? 'pointer' : 'not-allowed'
                  }}
                  disabled={progress < 100}
                >
                  {progress === 100 ? 'Get Certificate' : 'Continue Learning'}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2023 Professional Training Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// Styles
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#F9FAFB',
    fontFamily: 'Arial, sans-serif',
    color: '#1F2937',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center'
  },
  headerIcon: {
    fontSize: '32px',
    marginRight: '16px'
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #3B82F6, #9333EA)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  nav: {
    display: 'flex',
    gap: '16px'
  },
  navButton: {
    padding: '10px 20px',
    borderRadius: '8px',
    backgroundColor: '#E5E7EB',
    color: '#1F2937',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '18px'
  },
  activeNavButton: {
    background: 'linear-gradient(90deg, #3B82F6, #9333EA)',
    color: '#FFFFFF',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 16px',
    width: '100%', // Full width
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    marginBottom: '32px',
    width: '100%', // Full width
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '24px',
    background: 'linear-gradient(90deg, #3B82F6, #9333EA)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  updatesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '16px'
  },
  updateCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: '12px',
    padding: '16px',
    border: '1px solid #E5E7EB',
    transition: 'all 0.3s ease'
  },
  updateTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  updateDescription: {
    fontSize: '16px',
    color: '#6B7280',
    marginBottom: '8px'
  },
  updateDate: {
    fontSize: '14px',
    color: '#9CA3AF'
  },
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px'
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    transition: 'all 0.3s ease'
  },
  categoryHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px'
  },
  categoryIcon: {
    fontSize: '32px',
    marginRight: '16px'
  },
  categoryTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #3B82F6, #9333EA)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  progressContainer: {
    marginBottom: '16px'
  },
  progressLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px'
  },
  progressLabel: {
    fontSize: '16px',
    color: '#6B7280'
  },
  progressValue: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#3B82F6'
  },
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: '#E5E7EB',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3B82F6',
    borderRadius: '4px',
    transition: 'width 0.5s ease'
  },
  coursesList: {
    listStyle: 'none',
    padding: '0',
    marginBottom: '16px'
  },
  courseItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    color: '#6B7280',
    marginBottom: '8px'
  },
  courseIcon: {
    marginRight: '8px'
  },
  actionButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#3B82F6',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  certificationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px'
  },
  certificationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    transition: 'all 0.3s ease'
  },
  certificationTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '16px',
    background: 'linear-gradient(90deg, #3B82F6, #9333EA)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  footer: {
    backgroundColor: '#3B82F6',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '16px',
    marginTop: '32px',
    width: '100%', // Full width
  },
};

export default TrainingPortal; 