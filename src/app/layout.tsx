import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "@/styles/globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider";

import { GoogleAnalytics } from "@next/third-parties/google";

const font = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Jose Rotchen - Full-stack Frontend Developer",
  description:
    "Full-stack especializado en Frontend con 3 años de experiencia. Mi pasión es crear aplicaciones centrándome en la usabilidad, el rendimiento y la experiencia del usuario (UX). Tengo muchas ganas de seguir creciendo y aprendiendo cada día, y mi sueño es poder crear aplicaciones que mejoren la vida de miles de personas. Posadas, Misiones - Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${font.className} `}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
      {process.env.GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
