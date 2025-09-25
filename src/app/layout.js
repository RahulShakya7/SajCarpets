// src/app/layout.jsx
import { ThemeProvider } from "next-themes"; // for dark/light mode
import { Open_Sans } from "next/font/google";
import { AuthProvider } from "../providers/authprovider"; // custom auth provider (e.g. NextAuth)
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

// ✅ Global metadata (SEO, OpenGraph, etc.)
export const metadata = {
  title: "My App",
  description: "An awesome Next.js app with theme and auth providers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.variable} antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        {/* Theme + Auth Providers wrap the app */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
