"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "../config/msalConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export default function RootLayout({ children }) {

  

  return (
    
    
    <html lang="en">
      <head>
      <title>
        Deployment Checklist
      </title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MsalProvider instance={msalInstance}>{children}</MsalProvider>
      </body>
    </html>
    
  );
}
