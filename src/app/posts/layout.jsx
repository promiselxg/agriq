import "../(home)/globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

export const metadata = {
  title: "Agriq Business",
  description:
    "A leading agriculture company helping to improve global food security by enabling millions of farmers to make better use of available resources.",
};

export default function RootLayout({ children }) {
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
