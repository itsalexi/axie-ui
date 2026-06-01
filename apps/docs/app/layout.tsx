import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axie UI",
  description: "A warm, tactile React component system for focused apps."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
