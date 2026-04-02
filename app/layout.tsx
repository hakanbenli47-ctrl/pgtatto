import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PG TATTOO STUDIO ",
  description: "Antalya’da premium Tatto deneyimi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}