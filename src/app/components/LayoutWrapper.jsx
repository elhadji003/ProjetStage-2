"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "../ProtectedRoute";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Vérifie si le chemin commence par /login ou /register
  const isAuthPage =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/");

  const protectedRoutes = ["/home", "/profile"];
  const isProtectedPage = protectedRoutes.includes(pathname);

  return (
    <AuthProvider>
      {!isAuthPage && <Navbar />}
      <main className="mt-12">
        {isProtectedPage ? (
          <ProtectedRoute>{children}</ProtectedRoute>
        ) : (
          children
        )}
      </main>
      {!isAuthPage && <Footer />}
    </AuthProvider>
  );
}
