import ProjectSummaryList from './ProjectSummaryList'
import RecentMessages from './RecentMessages'
import TaskListSummary from './TaskListSummary'

const summaryData = [
    { title: 'Active Projects', value: 2 }, // Replace with real data
    { title: 'Tasks To Do', value: 7 },
    { title: 'Messages', value: 12 },
  ];

const DashboardContent = () => (
  <div className="p-4 sm:p-6 w-full max-w-7xl mx-auto">
    {/* Header */}
    <header className="mb-4 sm:mb-6 px-2 sm:px-0">
      <h2 className="text-gray-500 text-base sm:text-lg">
        Welcome back! Here's an overview of your projects.
      </h2>
    </header>

    {/* Summary Cards */}
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 sm:mb-8">
      {summaryData.map(({ title, value }) => (
        <div
          key={title}
          className="bg-white rounded-xl shadow p-4 flex flex-col border-l-4 border-blue-500"
        >
          <span className="text-sm text-gray-500">{title}</span>
          <span className="text-2xl font-bold mt-2">{value}</span>
        </div>
      ))}
    </section>

    <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <section className="lg:col-span-2">
        <h2 className="text-lg font-semibold mb-4">Projects</h2>
        <ProjectSummaryList />
      </section>
      <aside>
        <h2 className="text-lg font-semibold mb-4">Recent Messages</h2>
        <RecentMessages />
      </aside>
      <section className="lg:col-span-3 mt-6">
        <h2 className="text-lg font-semibold mb-4">Task List</h2>
        <TaskListSummary />
      </section>
    </main>
  </div>
)
export default DashboardContent