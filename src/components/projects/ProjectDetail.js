import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you might fetch this from an API
    const foundProject = projectsData.find(p => p.id === parseInt(id) || p.id === id);
    
    if (foundProject) {
      setProject(foundProject);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="loading">Loading project details...</div>;
  }

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="btn">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <div className="project-header">
        <h1>{project.title}</h1>
        <div className="project-meta">
          <div className="project-tags">
            {project.technologies.map(tech => (
              <span className="tag" key={tech}>{tech}</span>
            ))}
          </div>
          <p className="project-date">{project.date}</p>
        </div>
      </div>
      
      <div className="project-image-large">
        <img src={project.image} alt={project.title} />
      </div>
      
      <div className="project-content">
        <section className="project-section">
          <h2>Overview</h2>
          <p>{project.description}</p>
        </section>
        
        <section className="project-section">
          <h2>Problem Statement</h2>
          <p>{project.problem}</p>
        </section>
        
        <section className="project-section">
          <h2>Methodology</h2>
          <p>{project.methodology}</p>
        </section>
        
        <section className="project-section">
          <h2>Results</h2>
          <p>{project.results}</p>
        </section>
        
        {project.visualizations && (
          <section className="project-section visualizations">
            <h2>Data Visualizations</h2>
            <div className="visualization-grid">
              {project.visualizations.map((viz, index) => (
                <div className="visualization" key={index}>
                  <img src={viz.image} alt={viz.caption} />
                  <p>{viz.caption}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        
        <section className="project-links">
          {project.github && (
            <a 
              href={project.github} 
              className="btn btn-secondary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          )}
          
          {project.demo && (
            <a 
              href={project.demo} 
              className="btn btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </section>
      </div>
      
      <div className="project-navigation">
        <Link to="/projects" className="btn">Back to Projects</Link>
      </div>
    </div>
  );
};

export default ProjectDetail;