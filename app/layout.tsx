import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <div className="min-h-screen w-full relative bg-white dark:bg-black">
          <div
            className="
              fixed inset-0 z-0
              bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,0,0,0.05),transparent_70%)]
              dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)]
            "
          >  
            <ThemeProvider>{children}</ThemeProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
