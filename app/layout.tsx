import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/app/_redux/_providers/providers";
import Menu from "@/app/_components/_menu/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PHB Saas",
  description: "PHB Saas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="grid grid-cols-[80px,auto] grid-rows-[80px,auto] min-h-screen">
            <Menu />
            <main className="col-start-2">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
