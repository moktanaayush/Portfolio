import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
          <h2>Data Scientist & Machine Learning Engineer</h2>
          <p>
            I create insightful data visualizations and build machine learning models
            to solve complex problems and uncover hidden patterns in data.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
          </div>
        </motion.div>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {/* This will be populated from your projects data */}
          {/* Placeholder for now */}
          <div className="project-card">
            <div className="project-image">
              <img src="/placeholder.jpg" alt="Project 1" />
            </div>
            <div className="project-info">
              <h3>Customer Segmentation</h3>
              <p>Used K-means clustering to identify customer segments for targeted marketing.</p>
              <Link to="/projects/1" className="btn btn-small">View Details</Link>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src="/placeholder.jpg" alt="Project 2" />
            </div>
            <div className="project-info">
              <h3>Sales Forecasting</h3>
              <p>Implemented time series analysis to predict future sales with 92% accuracy.</p>
              <Link to="/projects/2" className="btn btn-small">View Details</Link>
            </div>
          </div>
        </div>
        <div className="view-all">
          <Link to="/projects" className="link-arrow">View all projects</Link>
        </div>
      </section>

      <section className="skills-overview">
        <h2>My Data Science Toolkit</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Programming</h3>
            <ul>
              <li>Python</li>
              <li>R</li>
              <li>SQL</li>
              <li>JavaScript</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Machine Learning</h3>
            <ul>
              <li>Scikit-learn</li>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>XGBoost</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Data Analysis</h3>
            <ul>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Matplotlib</li>
              <li>Tableau</li>
            </ul>
          </div>
        </div>
        <div className="view-all">
          <Link to="/skills" className="link-arrow">View all skills</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;