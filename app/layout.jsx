import {Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'], // ✅ valid weights only
  subsets: ['latin']
})



export const metadata = {
  title: "CodexOne",
  description: "This is the official website of codexone, It is a ubuntu UI having website that provides a huge amount of storage and all other facilities for the codexone members only.",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu} antialiased`} cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
