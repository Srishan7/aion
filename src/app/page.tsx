import { createClient } from "@/lib/supabase/client";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-semibold">Aion</h1>
      <p className="text-sm opacity-70 max-w-md text-center">
        A shared space for two, with a dashboard each and one place to keep
        each other in sync.
      </p>
    </main>
  );
}