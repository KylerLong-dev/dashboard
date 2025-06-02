import React from "react";
import ProjectProgress from "@/components/ProjectProgress";

export default function ProjectCard( {project} ) {
  return (
    <div className="mb-8 p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">{project.name}</h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <ProjectProgress currentStage={project.current_stage} />
    </div>
  );
}
