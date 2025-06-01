"use client"

import React from "react";

const STAGES = [
  { id: "onboarding", label: "Onboarding", description: "Initial project setup and introduction" },
  { id: "planning", label: "Planning", description: "Research, strategy, and project roadmap" },
  { id: "design", label: "Design", description: "UI/UX design and prototyping phase" },
  { id: "development", label: "Development", description: "Building and implementing the solution" },
  { id: "launch", label: "Launch", description: "Final testing and project deployment" }
];

export default function ProjectProgress( {currentStage }) {
  return (
    <div className="relative my-4">
      {/* Progress bar background */}
      <div className="hidden sm:block absolute top-4 left-0 w-full h-1 bg-gray-200 rounded-full" />
      {/* Completed progress bar (static width for now) */}
      <div
        className="hidden sm:block absolute top-4 left-0 h-1 bg-blue-500 rounded-full transition-all duration-500"
        style={{width: `` }} //Include math to calculate width of progress bar based on currentStage prop
      />
      <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        {/* Onboarding */}
        <div className="flex sm:flex-col items-center group relative">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500 text-white">✓</div>
          <div className="ml-3 sm:ml-0 sm:mt-2">
            <p className="text-sm font-medium text-gray-700">Onboarding</p>
          </div>
        </div>
        {/* Planning */}
        <div className="flex sm:flex-col items-center group relative">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500 text-white">✓</div>
          <div className="ml-3 sm:ml-0 sm:mt-2">
            <p className="text-sm font-medium text-gray-700">Planning</p>
          </div>
        </div>
        {/* Design (current) */}
        <div className="flex sm:flex-col items-center group relative">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500 text-white ring-4 ring-blue-100">3</div>
          <div className="ml-3 sm:ml-0 sm:mt-2">
            <p className="text-sm font-medium text-blue-600">Design</p>
          </div>
        </div>
        {/* Development */}
        <div className="flex sm:flex-col items-center group relative">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-gray-400">4</div>
          <div className="ml-3 sm:ml-0 sm:mt-2">
            <p className="text-sm font-medium text-gray-400">Development</p>
          </div>
        </div>
        {/* Launch */}
        <div className="flex sm:flex-col items-center group relative">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-gray-400">5</div>
          <div className="ml-3 sm:ml-0 sm:mt-2">
            <p className="text-sm font-medium text-gray-400">Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
}