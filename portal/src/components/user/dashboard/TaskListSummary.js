"use client";

import { useUserTasks } from "@/components/user/hooks/useUserTasks";

const TaskSummaryList = () => {
  const { tasks, loading, error } = useUserTasks();

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!tasks.length) return <div>No tasks found.</div>;

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="border rounded-lg p-4 mb-4 flex flex-col gap-2 transition-colors bg-green-50 border-green-400"
          >
            <div className="flex flex-col md:flex-row md:justify-between items-start">
              <div className="mb-2 md:mb-0">
                <h3 className="font-semibold text-lg">{task.title}</h3>
                <p className="text-gray-600 text-sm">{task.description}</p>
              </div>
              <span className={`font-md text-lg ${task.completed ? "text-green-800" : "text-gray-700"}`}>
                {task.completed ? "Completed" : "To Do"}
              </span>
            </div>
            {task.link && (
              <a
                href={task.link}
                className="inline-flex items-center gap-1 text-blue-800 hover:underline text-sm"
              >
                <span className="text-decoration-none">{task.link}</span>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline">
                  <path d="M5 12l5-5-5-5" />
                </svg>
              </a>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskSummaryList;