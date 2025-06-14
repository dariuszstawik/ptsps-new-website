// import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import Navbar from "@/components/global-components/navbar";
import Footer from "@/components/global-components/footer";
import Footer2 from "@/components/global-components/footer2";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Polskie Towarzystwo Superwizji Pracy Socjalnej",
  description:
    "Misją PTSPS jest praca nad rozwojem superwizji pracy socjalnej oraz profesjonalizacja pomocy społecznej.",
  verification: {
    google: "12hRewapN-XkDdAQjGw1YkzxyxpObauc_IGEr2dN-II",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
