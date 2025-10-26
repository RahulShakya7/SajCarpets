// /app/admin/layout.jsx
"use client";

import { Open_Sans } from "next/font/google";
import { AuthProvider } from "../../providers/authprovider";
import AdminGuard from "./guards/AdminGuard";
import DashboardLayout from "./layout/DashboardLayout";
import MuiThemeProvider from "./theme/MuiThemeProvider";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export default function AdminRootLayout({ children }) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="antialiased">
        <AuthProvider>
          <MuiThemeProvider>
            <AdminGuard>
              <DashboardLayout>{children}</DashboardLayout>
            </AdminGuard>
          </MuiThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
