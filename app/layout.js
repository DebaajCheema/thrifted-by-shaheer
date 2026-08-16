import "./globals.css";
import { CartProvider } from "@/lib/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Thrifted by Shaheer",
  description:
    "Curated luxury archive. One-of-one artifacts, authenticated and elevated for the culture.",
  metadataBase: new URL("https://thrifted-by-shaheer.vercel.app"),
  openGraph: {
    title: "Thrifted by Shaheer",
    description:
      "Curated luxury archive. One-of-one artifacts, authenticated and elevated for the culture.",
    url: "https://thrifted-by-shaheer.vercel.app",
    siteName: "Thrifted by Shaheer",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Thrifted by Shaheer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thrifted by Shaheer",
    description:
      "Curated luxury archive. One-of-one artifacts, authenticated and elevated for the culture.",
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-white">
        <CartProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}