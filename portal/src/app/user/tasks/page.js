import TaskList from "@/components/user/tasks/TaskList";

export default function TasksPage() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">My Tasks</h2>
        <p className="text-gray-600">Manage and track your project tasks</p>
      </div>
    
      <TaskList />
    </div>
  );
}