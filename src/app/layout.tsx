import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress, MouseGlow } from "@/components/interactive-effects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bharath Singh Palthyavath | AI Engineer & Software Developer",
  description: "Official portfolio of Bharath Singh Palthyavath. Explore my projects and skills in Artificial Intelligence, Machine Learning, Generative AI, and Software Development.",
  keywords: ["Bharath Singh Palthyavath", "Bharath Singh", "Bharath Singh Tech", "AI Engineer", "Machine Learning", "Data Scientist", "Software Developer", "CBIT", "Portfolio"],
  verification: {
    google: "9L9kUZFfQtYhP_SJkOiWqNmKxKefbOtY9GR9PmXO9nM",
  },
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
