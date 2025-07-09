import React from "react";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import INFO from "../../data/user";
import "./styles/works.css";
import "./styles/projectPreview.css";

const ProjectsPreview = () => {
    const previewProjects = INFO.projects.slice(0, 1); // Show just the first project as a preview

    return (
        <div className="works">
            <Card
                icon={faFlask}
                title="Projects"
                body={
                    <div className="works-body">
                        {previewProjects.map((project, idx) => (
                            <div className="work" key={idx}>
                                <img
                                    src={project.logo}
                                    alt=""
                                    className="work-image"
                                />
                                <div className="work-title">{project.title}</div>
                                <div className="work-subtitle">{project.description}</div>
                                {project.link && (
                                    <div className="work-duration">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="footer-nav-link-item"
                                        >
                                            {project.linkText || "View Project"}
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="work">
                            <a href="/projects" className="footer-nav-link-item">
                                See all projects &rarr;
                            </a>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default ProjectsPreview;