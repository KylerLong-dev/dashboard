"use client"

import React from "react";

const STAGES = [
  { id: "onboarding", label: "Onboarding", description: "Initial project setup and introduction" },
  { id: "planning", label: "Planning", description: "Research, strategy, and project roadmap" },
  { id: "design", label: "Design", description: "UI/UX design and prototyping phase" },
  { id: "development", label: "Development", description: "Building and implementing the solution" },
  { id: "launch", label: "Launch", description: "Final testing and project deployment" }
];

export default function ProjectProgress({ currentStage }) {
  const currentIndex = STAGES.findIndex(stage => stage.id === currentStage);

  return (
    <div className="relative my-4">
      {/* Progress bar background */}
      <div className="hidden sm:block absolute top-4 left-0 w-full h-1 bg-gray-200 rounded-full" />
      <div
        className="hidden sm:block absolute top-4 left-0 h-1 bg-blue-500 rounded-full transition-all duration-500"
        style={{ width: `${(currentIndex / (STAGES.length - 1)) * 100}%` }}
      />
      {/* Progress bar */}
      <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        {STAGES.map((stage, idx) => (
          <div key={stage.id} className="flex sm:flex-col items-center group relative">
            <div className="relative flex flex-col items-center">
              <div
                className={
                  `w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ` +
                  (idx === currentIndex
                    ? "bg-blue-500 text-white ring-4 ring-blue-200 group-hover:ring-blue-400"
                    : idx < currentIndex
                      ? "bg-blue-500 text-white hover:bg-blue-600 hover:ring-2 hover:ring-blue-300"
                      : "bg-gray-200 text-gray-400 hover:bg-gray-300 hover:ring-2 hover:ring-gray-400")
                }
              >
                {idx < currentIndex ? "✓" : idx + 1}
              </div>
              {/* Tooltip for description, now above the stage circle, appears with ring on hover */}
              <div className="absolute left-1/2 -top-12 z-10 w-48 -translate-x-1/2 rounded bg-gray-900 text-white text-xs px-3 py-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-75 shadow-lg text-center">
                {stage.description}
              </div>
            </div>
            <div className="ml-3 sm:ml-0 sm:mt-2">
              <p className="text-sm font-medium">{stage.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}