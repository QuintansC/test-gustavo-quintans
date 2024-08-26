import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: 'Test Buzzvel - Gustavo Quintans',
  description: 'This test was created to applicate to buzzvel test',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {;
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
