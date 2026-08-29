export default function HimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-theme="him"
      className="min-h-screen bg-slate-950 text-cyan-50"
    >
      <nav className="p-4 border-b border-slate-800 flex gap-4 text-sm font-mono">
        <a href="/him/dashboard" className="font-medium text-cyan-400">Dashboard</a>
        <a href="/him/todos" className="opacity-70">Todos</a>
        <a href="/him/workout" className="opacity-70">Workout</a>
        <a href="/him/calorie" className="opacity-70">Calorie</a>
        <a href="/him/profile" className="opacity-70">Profile</a>
      </nav>
      {children}
    </div>
  );
}