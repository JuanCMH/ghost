import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { MobileShell } from "@/components/mobile-shell";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ghost chat",
  description: "Captura y chatea con fantasmas de diferentes épocas y personalidades.",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={`${montserrat.className} antialiased`}>
        <MobileShell>{children}</MobileShell>
      </body>
    </html>
  );
}
