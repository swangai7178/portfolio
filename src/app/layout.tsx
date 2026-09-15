import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samuel Wangai — Full Stack Systems Engineer",
  description:
    "Samuel Wangai is a Full Stack Systems Engineer focused on mobile architecture, backend systems, security and performance.",
  keywords: [
    "Samuel Wangai",
    "Full Stack Engineer",
    "Flutter Developer",
    "Backend Engineer",
    "Mobile Architecture",
    "Ruby on Rails",
    "Laravel",
    "Node.js",
    "Rust",
    "PostgreSQL",
  ],
  authors: [{ name: "Samuel Wangai" }],
  openGraph: {
    title: "Samuel Wangai — Full Stack Systems Engineer",
    description:
      "Mobile Architecture · Backend Systems · Security · Performance",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
