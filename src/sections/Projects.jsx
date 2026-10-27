
import React from 'react';
import { projects } from '../data/projects';
import Button from '../components/Button';
import meditrackImage from '../assets/projects/Meditrack.png';
import crmImage from '../assets/projects/crm.png';
import lmsImage from '../assets/projects/lms.png';

const projectImages = {
  meditrack: meditrackImage,
  crm: crmImage,
  'artisans-lms': lmsImage,
};

const ProjectCard = ({ project, onSelect }) => {
  const image = projectImages[project.slug];

  return (
    <article className="project-card">
      {/* Project Screenshot */}
      <div className="project-preview">
        {image ? (
          <img
            src={image}
            alt={`${project.title} screenshot`}
            loading="lazy"
          />
        ) : (
          <div className="project-preview-placeholder">
            <span className="project-preview-placeholder-icon">
              {'</>'}
            </span>

            <span className="project-preview-placeholder-title">
              {project.title}
            </span>

            <span className="project-preview-placeholder-caption">
              Project Preview
            </span>
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="project-content">
        <div className="project-meta">
          <span className="project-category">
            {project.category}
          </span>

          <span className="project-status">
            <span
              className="project-status-dot"
              aria-hidden="true"
            />
            {project.status}
          </span>
        </div>

        <h3 className="project-title">
          {project.title}
        </h3>

        <p className="project-description">
          {project.shortDescription}
        </p>

        {/* Technology Pills */}
        <div
          className="project-technologies"
          aria-label="Technologies used"
        >
          {project.technologies.map((tech) => (
            <span className="tech-pill" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        {/* Project Actions */}
        <div className="project-actions">
          <Button
            variant="primary"
            onClick={() => onSelect?.(project.slug)}
            aria-label={`Read case study for ${project.title}`}
          >
            Read Case Study
            <span className="project-link-icon" aria-hidden="true">
              ↗
            </span>
          </Button>

          {project.githubUrl && (
            <a
              className="project-github-link"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <span className="project-link-icon" aria-hidden="true">
                ⌘
              </span>
              GitHub
              <span className="project-link-icon" aria-hidden="true">
                ↗
              </span>
            </a>
          )}

          {project.demoUrl && (
            <a
              className="project-github-link"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
            >
              Live Demo
              <span className="project-link-icon" aria-hidden="true">
                ↗
              </span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = ({ onProjectSelect }) => {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="container section-padding"
      aria-labelledby="projects-heading"
    >
      <header className="projects-heading">
        <span className="projects-eyebrow">
          Selected Work
        </span>

        <h2
          id="projects-heading"
          className="projects-title"
        >
          Featured Projects
        </h2>

        <p className="projects-description">
          A selection of projects showcasing my experience in
          full-stack development, system integration, and automation.
        </p>
      </header>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={onProjectSelect}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
