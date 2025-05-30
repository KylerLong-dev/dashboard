import React from "react";
import Link from "next/link";

export default function TaskItem({ title, description, status, link }) {
  return (
    <div className="border rounded-lg p-4 mb-4 flex flex-col gap-2 transition-colors bg-green-50 border-green-400">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">{ title }</h3>
          <p className="text-gray-600 text-sm">{ description }</p>
        </div>
        <span className="font-medium text-green-800">{ status }</span>
      </div>
      <Link
        href="#"
        className="inline-flex items-center gap-1 text-blue-600 hover:underline text-sm mt-2"
      >
        <span>{ link }</span>
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline">
          <path d="M5 12l5-5-5-5" />
        </svg>
      </Link>
    </div>
  );
}
