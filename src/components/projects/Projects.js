import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // In a real application, you might fetch this from an API
    setProjects(projectsData);
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-container">
      <h1>Data Science Projects</h1>
      <p className="projects-intro">
        Explore my portfolio of data science projects, including machine learning models,
        data analysis, and visualizations.
      </p>
      
      <div className="filter-container">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'machine-learning' ? 'active' : ''}`} 
          onClick={() => setFilter('machine-learning')}
        >
          Machine Learning
        </button>
        <button 
          className={`filter-btn ${filter === 'data-analysis' ? 'active' : ''}`} 
          onClick={() => setFilter('data-analysis')}
        >
          Data Analysis
        </button>
        <button 
          className={`filter-btn ${filter === 'data-visualization' ? 'active' : ''}`} 
          onClick={() => setFilter('data-visualization')}
        >
          Data Visualization
        </button>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-tags">
                {project.technologies.map(tech => (
                  <span className="tag" key={tech}>{tech}</span>
                ))}
              </div>
              <Link to={`/projects/${project.id}`} className="btn btn-small">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;