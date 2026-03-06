import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Planet Zero — Design for Net Zero Living",
  description:
    "Climate-adaptive infrastructure engineered for thermal comfort, wherever people live and work.",
  openGraph: {
    title: "Planet Zero — Design for Net Zero Living",
    description: "4-layered smart living infrastructure designed for thermal comfort.",
    siteName: "Planet Zero",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300;1,9..144,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
