"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { usePathname } from "next/navigation";
import { APP_NAME } from "@/constants/constants/constant";
import { useState } from "react";
import SplashScreen from "../components/SplashScreen";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: APP_NAME,
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const isHome = pathName == "/";
  const [isLoading, setIsLoading] = useState(isHome);
  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoading && isHome ? <h1>{<SplashScreen finishLoading={()=>setIsLoading(false)}/>}</h1> : <>{children}</>}
      </body>
    </html>
  );
}
