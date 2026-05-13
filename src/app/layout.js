import { Geist, Geist_Mono } from "next/font/google";
import ConditionalSiteFooter from "@/sites/marketing/components/ConditionalSiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NexaFlow | Voice Intake And Booking Automation",
  description:
    "AI-powered voice intake, FAQ handling, and booking automation for service businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        <ConditionalSiteFooter />
      </body>
    </html>
  );
}
