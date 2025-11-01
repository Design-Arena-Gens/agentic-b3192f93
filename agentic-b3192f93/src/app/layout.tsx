import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Puma Pulse | Immersive Sneaker Experience",
  description: "Step into the future with Puma Pulse – a 3D affiliate experience showcasing the most sought-after Puma sneakers."
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
