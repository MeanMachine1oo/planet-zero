import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Planet Zero — Design for Net Zero Living",
  description:
    "Planet Zero designs climate-adaptive infrastructure engineered for thermal comfort, wherever people live and work.",
  openGraph: {
    title: "Planet Zero — Design for Net Zero Living",
    description: "Climate Adaptive Infrastructure Designed for People & Planet",
    url: "https://planetzero.in",
    siteName: "Planet Zero",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
