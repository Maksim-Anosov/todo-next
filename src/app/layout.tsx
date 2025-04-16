import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import { Nunito } from "next/font/google";
import { Providers } from "@/shared/Providers";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Todos by Ansaks",
  description: "What do you want to do?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={nunito.className}>
      <body className="relative flex flex-col h-screen justify-between">
        <Providers>
          <div className="absolute inset-0 z-[-10]">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <main className="mt-10 grow overflow-hidden">{children}</main>

          <footer className="text-center text-2xl min-h-[15vh] mt-auto flex justify-center items-center">
            <p>&copy;Ansaks</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
