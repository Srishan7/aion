export default function HerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-theme="her"
      className="min-h-screen bg-rose-50 text-rose-950"
    >
      <nav className="p-4 border-b border-rose-200 flex gap-4 text-sm">
        <a href="/her/dashboard" className="font-medium">Dashboard</a>
        <a href="/her/todos" className="opacity-70">Todos</a>
        <a href="/her/cycle" className="opacity-70">Cycle</a>
        <a href="/her/sleep" className="opacity-70">Sleep</a>
        <a href="/her/profile" className="opacity-70">Profile</a>
      </nav>
      {children}
    </div>
  );
}