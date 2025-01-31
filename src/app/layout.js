import React from 'react';

import { Inter } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from './contexts/theme';
// import reportWebVitals from './reportWebVitals';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Rotating Text Animation</title>
        <meta name="description" content="Rotating text animation example in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </head>

        <body className={inter.className}>{children}</body>

    </html>
  );
}
