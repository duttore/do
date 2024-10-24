import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { DefaultSeo } from "next-seo";  // Import next-seo
import SEO from "../seo-config";  // Import custom SEO configuration
import { type Metadata } from "next";

// Optional: Update metadata if necessary
export const metadata: Metadata = {
  title: "My Awesome Website",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${GeistSans.variable}`}>
      <body>
        {/* Add DefaultSeo to apply global SEO settings */}
        <DefaultSeo {...SEO} />
        {children}
      </body>
    </html>
  );
}