import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "TechVersa - Adaptive software for an ever-changing world",
  description: "TechVersa designs, builds, and scales cloud-ready web & AI solutions for startups and enterprises. Build faster. Scale smarter.",
  keywords: ["software development", "web development", "AI solutions", "cloud computing", "startup", "enterprise"],
  authors: [{ name: "TechVersa" }],
  creator: "TechVersa",
  publisher: "TechVersa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://techversa.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TechVersa - Adaptive software for an ever-changing world",
    description: "TechVersa designs, builds, and scales cloud-ready web & AI solutions for startups and enterprises.",
    url: "https://techversa.com",
    siteName: "TechVersa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechVersa - Adaptive software for an ever-changing world",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechVersa - Adaptive software for an ever-changing world",
    description: "TechVersa designs, builds, and scales cloud-ready web & AI solutions for startups and enterprises.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#050512" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TechVersa",
              "description": "Adaptive software for an ever-changing world",
              "url": "https://techversa.com",
              "logo": "https://techversa.com/logo.png",
              "sameAs": [
                "https://github.com/techversa",
                "https://linkedin.com/company/techversa",
                "https://twitter.com/techversa"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://techversa.com/contact"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
