import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas Advisory Real Estate — Coming Soon",
  description:
    "Foundations First. Everything Else Follows. Coming soon — atlasadvisory.ae",
  openGraph: {
    title: "Atlas Advisory Real Estate — Coming Soon",
    description: "Foundations First. Everything Else Follows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
