import Script from "next/script";
import { Outfit } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        {/* Include the AOS script */}
        <Script src="https://cdn.jsdelivr.net/npm/aos@2.3.1/dist/aos.js" strategy="beforeInteractive" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.1/dist/aos.css" />
        <Script id="aos-init" strategy="lazyOnload">
          {`AOS.init();`}
        </Script>
      </head>
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
