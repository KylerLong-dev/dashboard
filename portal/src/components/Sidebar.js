import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-56 bg-white border-r border-gray-200 min-h-screen p-6 hidden md:block">
      <nav className="space-y-4">
        <Link href="./user/">Home</Link>
        <Link href="./messages">Messages</Link>
        <Link href="./projects">Projects</Link>
        <Link href="./tasks">Tasks</Link>
      </nav>
    </aside>
  );
} 