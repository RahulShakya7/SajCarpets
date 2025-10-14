import { ThemeProvider } from "next-themes";
import { Open_Sans } from "next/font/google";
import Footer from "../app/components/footer/footer";
import Header from "../app/components/navbar/header";
import Newsletter from "../app/newsletter/newsletter";
import { AuthProvider } from "../providers/authprovider";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata = {
  title: "My App",
  description: "An awesome Next.js app with theme and auth providers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* CHANGE 1: Added flex, flex-col, and min-h-screen to the body */}
      <body
        className={`${openSans.variable} antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 flex flex-col min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AuthProvider>
            <Header />

            {/* CHANGE 2: Added flex-grow to make the main content fill the available space */}
            <main className="flex-grow">{children}</main>

            <Newsletter />
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}