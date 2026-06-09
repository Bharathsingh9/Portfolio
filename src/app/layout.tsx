import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress, MouseGlow } from "@/components/interactive-effects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bharath Singh Palthyavath | AI/ML Engineer",
  description: "Portfolio of Bharath Singh Palthyavath, an AI/ML Engineer and Generative AI Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <MouseGlow />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
