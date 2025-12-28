"use client";

import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "../components/Navbar";
import { ReactNode } from "react";
import Head from "next/head";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Nalawade Classes</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Rokkitt:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <body className="font-poppins antialiased">
        {/* <Navbar /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
