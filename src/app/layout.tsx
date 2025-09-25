import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B&O CLINICA - Aesthetic Plastic Surgery and Hair Transplant Clinic",
  description: "Enhance your natural beauty with expert beauty surgery services at B&O Clinica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/crown1.svg" />
      </head>
      <body
        className={`${manrope.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
