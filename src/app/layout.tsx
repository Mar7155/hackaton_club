import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "@/components/header";
import { dark, experimental__simple } from "@clerk/themes";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hackaton Club",
  description:
    "Regístrate para unirte a nuestro club de programación y conecta con desarrolladores de todos los niveles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider appearance={{ baseTheme: [dark] }}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
              linear-gradient(rgba(52, 168, 90, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(52, 168, 90, 0.4) 1px, transparent 1px)
            `,
                maskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,1) 40%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,1) 40%)",
                backgroundSize: "32px 32px",
              }}
            />
            {children}
          </ThemeProvider>
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  );
}
