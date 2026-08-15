import "./globals.css";
import { CartProvider } from "@/lib/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Thrifted by Shaheer",
  description: "Curated luxury archive. One-of-one artifacts, authenticated and elevated for the culture.",
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
