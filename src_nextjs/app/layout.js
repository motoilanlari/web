import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Motoilanlari - Türkiye’nin en büyük motosiklet alım satım platformu!",
  description: "Türkiye’nin en büyük motosiklet alım satım platformu! Motosiklet ilanları yayınlayın, hayalinizdeki motoru kolayca bulun. Hızlı, güvenilir ve kullanıcı dostu mobil uygulama ile motor alım satımı şimdi çok daha kolay!",
    keywords: 'motosiklet, motor, motosiklet ilanları, motor ilanları, motosiklet alım satım, motor alım satım, motosiklet ilan, motor ilan, motosiklet ilanı, motor ilanı, motosiklet satılık, motor satılık, motosiklet kiralık, motor kiralık, motosiklet fiyatları, motor fiyatları, motosiklet markaları, motor markaları, motosiklet modelleri, motor modelleri, motosiklet resimleri, motor resimleri, motosiklet'
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
          <title>Motoilanlari - Türkiye’nin en büyük motosiklet alım satım platformu!</title>
          <meta name="author" content="Mahmut Yüksel MERT"/>
          <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96"/>
          <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg"/>
          <link rel="shortcut icon" href="/favicon/favicon.ico"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
          <meta name="apple-mobile-web-app-title" content="Motoilanlari"/>
          <link rel="manifest" href="/favicon/site.webmanifest"/>
      </head>
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {children}
      </body>
      </html>
  );
}
