import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aion",
  description: "A shared space for two — todos, wellness tracking, and everything in between.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}