import "../(home)/globals.css";
import AuthProvider from "@/providers/AuthProvider";
import Header from "./dashboard/(components)/header/header";

export const metadata = {
  title: "Admin Dashboard",
  description: "Generated by Next.js",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="w-full bg-[#F9FAFB] h-fit pb-10">
            <Header />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
