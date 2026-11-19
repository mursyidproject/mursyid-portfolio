import type { Metadata } from "next";
import "./globals.css";
import MeshBackground from "../components/MeshBackground";
import CustomCursor from "../components/CustomCursor";

export const metadata: Metadata = {
  title: "Mursyid, S.Kom. | Data Analyst & Software Engineer",
  description: "Portfolio of Mursyid - Data Analyst & Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased selection:bg-[#00F0FF]/30 selection:text-[#00F0FF]">
        <CustomCursor />
        <MeshBackground />
        {children}
      </body>
    </html>
  );
}