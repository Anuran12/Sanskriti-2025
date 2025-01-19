import "@/app/globals.css";
import PrelineScript from "@/components/shared/preline";
import { TailwindIndicator } from "@/components/shared/tailwind";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { DataTableStoreProvider } from "@/stores/dataTableStoreProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  title: "Sanskriti 2025",
  description: "Sanskriti 2025",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={cn("bg-background font-sans antialiased", inter.variable)}
        >
          <SessionProvider>
            <TooltipProvider>
              <DataTableStoreProvider isSelecting={false}>
                {children}
              </DataTableStoreProvider>
            </TooltipProvider>
          </SessionProvider>
          <PrelineScript />
          <Toaster />
          <TailwindIndicator />
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
      <Script src="https://checkout.razorpay.com/v2/checkout.js" />
    </>
  );
}
