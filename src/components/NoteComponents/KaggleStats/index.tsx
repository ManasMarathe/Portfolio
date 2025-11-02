import React from "react";
import styles from "./KaggleStats.module.css";

const KAGGLE_USERNAME = "manasmarathe";

const KaggleStats: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time for iframe content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingContent}>
          <div className={styles.spinner}></div>
          Loading Kaggle stats...
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <div className={styles.profileInfo}>
          <div className={styles.avatar}>
            <span>K</span>
          </div>
          <div className={styles.userDetails}>
            <h3>Kaggle Profile</h3>
            <div className={styles.username}>@{KAGGLE_USERNAME}</div>
            <div className={styles.bio}>
              Data Science & Machine Learning Enthusiast
            </div>
            <a
              href={`https://www.kaggle.com/${KAGGLE_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileButton}
            >
              View Full Profile on Kaggle
            </a>
          </div>
        </div>
      </div>

      <div className={styles.activitySection}>
        <h4 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>🏆</span>
          All-Time High Ranks
        </h4>
        <div className={styles.activityGrid}>
          <div className={styles.activityCard}>
            <div className={styles.activityNumber}>-</div>
            <div className={styles.activityLabel}>Competitions</div>
            <div className={styles.activitySubLabel}>Highest Rank</div>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.activityNumber}>#539</div>
            <div className={styles.activityLabel}>Datasets</div>
            <div className={styles.activitySubLabel}>Highest Rank</div>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.activityNumber}>#2,232</div>
            <div className={styles.activityLabel}>Notebooks</div>
            <div className={styles.activitySubLabel}>Highest Rank</div>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.activityNumber}>-</div>
            <div className={styles.activityLabel}>Discussions</div>
            <div className={styles.activitySubLabel}>Highest Rank</div>
          </div>
        </div>
        <div className={styles.note}>
          <p>
            📌 Visit the{" "}
            <a
              href={`https://www.kaggle.com/${KAGGLE_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaggle profile
            </a>{" "}
            to see detailed statistics, competitions, and achievements.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>🏆</span>
          Areas of Interest
        </h4>
        <div className={styles.interestsGrid}>
          <div className={styles.interestCard}>
            <span className={styles.interestIcon}>🤖</span>
            <div className={styles.interestName}>Machine Learning</div>
          </div>
          <div className={styles.interestCard}>
            <span className={styles.interestIcon}>📈</span>
            <div className={styles.interestName}>Data Analysis</div>
          </div>
          <div className={styles.interestCard}>
            <span className={styles.interestIcon}>🧠</span>
            <div className={styles.interestName}>Deep Learning</div>
          </div>
          <div className={styles.interestCard}>
            <span className={styles.interestIcon}>🔍</span>
            <div className={styles.interestName}>Data Visualization</div>
          </div>
          <div className={styles.interestCard}>
            <span className={styles.interestIcon}>📊</span>
            <div className={styles.interestName}>Statistical Modeling</div>
          </div>
          <div className={styles.interestCard}>
            <span className={styles.interestIcon}>🐍</span>
            <div className={styles.interestName}>Python & Pandas</div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>💼</span>
          Data Science Projects
        </h4>
        <div className={styles.projectsList}>
          <div className={styles.projectItem}>
            <div className={styles.projectTitle}>Loan Analysis</div>
            <div className={styles.projectDescription}>
              Statistical analysis of loan approval patterns and risk
              assessment using Python
            </div>
            <div className={styles.projectTags}>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>Pandas</span>
              <span className={styles.tag}>Data Analysis</span>
            </div>
          </div>
          <div className={styles.projectItem}>
            <div className={styles.projectTitle}>Birth Rates Analysis</div>
            <div className={styles.projectDescription}>
              Demographic trends analysis exploring global birth rate patterns
            </div>
            <div className={styles.projectTags}>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>Visualization</span>
              <span className={styles.tag}>Statistics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KaggleStats;

