"use client";

import { useUserProjects } from "@/components/user/hooks/useUserProjects";
import ProjectSummaryProgress from "./ProjectSummaryProgress";

const STAGE_PERCENT = {
  onboarding: 0,
  planning: 25,
  design: 50,
  development: 75,
  launch: 100,
};

const ProjectSummaryList = () => {
  const { projects, loading, error } = useUserProjects();

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!projects.length) return <div>No projects found.</div>;

  return (
      <div className="space-y-6">
        {projects.map((project) => {
          const percent = STAGE_PERCENT[project.current_stage] ?? 0;
          return (
            <div key={project.id}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-base">{project.name}</span>
                <span className="text-sm font-semibold text-blue-900">{percent}%</span>
              </div>
              <ProjectSummaryProgress percent={percent} />
            </div>
          );
        })}
      </div>
  );
};

export default ProjectSummaryList;
