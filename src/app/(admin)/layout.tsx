export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-theme="admin" className="min-h-screen bg-zinc-50 text-zinc-900">
      <nav className="p-4 border-b border-zinc-200 flex gap-4 text-sm">
        <a href="/admin/dashboard" className="font-medium">Dashboard</a>
        <a href="/admin/users" className="opacity-70">Manage Users</a>
      </nav>
      {children}
    </div>
  );
}