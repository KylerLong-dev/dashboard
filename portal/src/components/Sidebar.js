import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-56 bg-white border-r border-gray-200 min-h-screen p-6 hidden md:block text-gray-900">
      <div>
        <h1 className="text-2xl font-bold pl-2 mb-4">Logo</h1>
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