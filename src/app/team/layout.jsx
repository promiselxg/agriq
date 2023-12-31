import "../(home)/globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function TeamLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
