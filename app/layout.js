import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="h-screen flex flex-row justify-start">
        <Sidebar />
        <div className="bg-primary flex-1 p-4 text-white">
          <body className={inter.className}>{children}</body>
        </div>
      </div>
    </html>
  );
}
