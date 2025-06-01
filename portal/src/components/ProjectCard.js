import React from "react";
import ProjectProgress from "@/components/ProjectProgress";

export default function ProjectCard() {
  return (
    <div className="mb-8 p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">Website Redesign Project</h2>
      <p className="text-gray-600 mb-4">A complete overhaul of the company website with modern design and improved functionality.</p>
      <ProjectProgress />
    </div>
  );
}
