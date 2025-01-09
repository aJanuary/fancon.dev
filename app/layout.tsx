import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fancon.dev",
  description: "Discord community for fan-run convention software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-auto flex min-h-screen flex-col bg-gradient-to-br from-midnight-moss-950 via-midnight-moss-900 to-midnight-moss-950 p-0 text-white antialiased`}
      >
        <nav className="flex h-10 flex-row items-center gap-12 bg-black px-4 py-2 text-sm text-green-50">
          <h1>
            <span
              className="bg-gradient-to-br from-lemon to-cyan bg-clip-text font-bold text-transparent"
              aria-hidden
            >
              {"{}"}
            </span>{" "}
            fancon.dev
          </h1>
        </nav>

        {children}
      </body>
    </html>
  );
}
