import "./globals.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Roboto } from "next/font/google";
import { MainLayout } from "@/ui/main-layout";
import { ThemeProvider } from "@/contexts/theme";

const roboto = Roboto({
  preload: true,
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  const isOriginalyDark = cookies().get("app.isDark")?.value === "true";

  return (
    <html lang="pt-BR">
      <head>
        <meta
          content="upgrade-insecure-requests"
          http-equiv="Content-Security-Policy"
        />
      </head>
      <body
        className={`${roboto.variable} font-roboto overflow-x-hidden md:w-screen`}
      >
        <ThemeProvider {...{ isOriginalyDark }}>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
