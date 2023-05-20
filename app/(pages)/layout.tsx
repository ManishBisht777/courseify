import "../../styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import "../../styles/mdx.css";

const fontSans = FontSans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Courseify",
  description: "Share your Knowledge in Public",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
