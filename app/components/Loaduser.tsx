// app/components/LoadUser.tsx
"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/app/lib/slices/authSlice"; // Adjust the import path as necessary

export default function LoadUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/me", { credentials: "include" });
        if (!res.ok) return;

        const data = await res.json();
        if (data?.user) {
          dispatch(
            loginSuccess({ name: data.user.name, email: data.user.email })
          );
        }
      } catch (err) {
        console.error("Auth check failed:", err);
      }
    };

    checkAuth();
  }, [dispatch]);

  return null;
}
