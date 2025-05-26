"use client";
import { useState } from "react";

export default function UserDashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  //Need to conditionally render a fixed, full-screen overlay and sidebar
  //when sidebarOpen is true

  return (
      <div>

        <div className="flex justify-between">

          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="flex gap-4 items-center mb-4">
            <button
              className="block md:hidden rounded hover:bg-gray-200 focus:outline-none cursor-pointer"
              aria-label="Open sidebar"
              onClick={() => setSidebarOpen(true)}
            >
              <svg
                className="w-8 h-8 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="avatar avatar-placeholder">
              <div className="cursor-pointer bg-neutral-800 text-white text-lg w-8 h-8 flex items-center justify-center rounded-full">
                <span>K</span>
              </div>
            </div>

          </div>
        </div>

      </div>
  );
} 