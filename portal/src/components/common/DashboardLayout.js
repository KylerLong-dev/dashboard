"use client";
import Sidebar from "@/components/common/Sidebar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <Sidebar className="hidden md:block" />

      {/* Mobile sidebar drawer */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => setSidebarOpen(false)}
          />
          <Sidebar
            isMobile={true}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col p-6 text-gray-900"
          />
        </>
      )}

      <div className="flex-1 flex flex-col"> {/*container holding the header and main content*/}
        {/* Header */}
        <header className="flex justify-between items-center w-full px-10 py-4 bg-gray-75 text-gray-900">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-2">
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
        </header>

        {/* Main content */}
        <main className="flex-1 px-10 py-6 bg-gray-75 text-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
} 