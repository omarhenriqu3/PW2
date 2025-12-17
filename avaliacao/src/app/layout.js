import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body
      >
        {children}
      </body>
    </html>
  );
}
