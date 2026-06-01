import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axie UI",
  description: "The performative UI library for React product apps."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
