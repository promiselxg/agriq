import { ThemeContextProvider } from "@/context/ThemeContext";
import Footer from "./_components/Footer/Footer";
import Header from "./_components/header/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "800"],
});

export const metadata = {
  title: "Agriq",
  description:
    "A leading agriculture company helping to improve global food security by enabling millions of farmers to make better use of available resources.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="w-full">
              <Header />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
