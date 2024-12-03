import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fancon.dev",
  description:
    "A Discord community of people who are involved in software for fan-run conventions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} m-auto max-w-prose bg-olive p-4 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
