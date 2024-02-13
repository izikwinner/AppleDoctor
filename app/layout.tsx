import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/component/sidebar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AppleDoctor",
  description: "Created by IZIK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ display: 'flex' }}>
        <Sidebar />
          <div style={{ marginLeft: '220px', padding: '20px', width: '880px'}}>
            {children}
          </div>
        </div>
        </body>
    </html>
  );
}
