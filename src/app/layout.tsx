import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "@/styles/globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider";

const font = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jose Rotchen Portfolio",
  description:
    "Soy un desarrollador Full-stack especializado en Frontend, me apasiona crear interfaces de usuario rapidas, bonitas y faciles de utilizar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={font.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
