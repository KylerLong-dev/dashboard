import Link from "next/link";

export default function Sidebar({ isMobile = false, setSidebarOpen, className="" }) {
  return (
    <aside className={`w-56 bg-white border-r border-gray-200 min-h-screen p-4 text-gray-900 ${className}`}>
      {isMobile && (
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold pl-2 mb-4">Logo</h1>
          <button
            className="text-gray-700 text-2xl font-bold hover:text-gray-900 mb-4 pr-2 cursor-pointer"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>
      )}
      <div>
        <h1 className="text-2xl font-bold pl-2 mb-4 hidden md:block">Logo</h1>
      </div>
      <nav className="space-y-1 flex flex-col">
        <Link href="./user/" className="hover:bg-gray-100 p-2 rounded-md">Dashboard</Link>
        <Link href="./messages" className="hover:bg-gray-100 p-2 rounded-md">Messages</Link>
        <Link href="./projects" className="hover:bg-gray-100 p-2 rounded-md">Projects</Link>
        <Link href="./tasks" className="hover:bg-gray-100 p-2 rounded-md">Tasks</Link>
      </nav>
    </aside>
  );
} 