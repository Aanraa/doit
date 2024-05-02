import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="h-full flex flex-row justify-start">
        <Sidebar />
        <div className="h-fit flex flex-1 p-4 text-white bg-white">
          <body className={inter.className}>{children}</body>
        </div>
      </div>
    </html>
  );
}
