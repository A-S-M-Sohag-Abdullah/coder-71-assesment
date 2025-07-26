"use client";

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/app/lib/store"; // your redux hooks
import { logout } from "@/app/lib/slices/authSlice"; // your logout action
import React, { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      const res = await fetch("/api/logout", { method: "POST" });
      if (res.ok) {
        dispatch(logout());
        router.push("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition cursor-pointer"
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}
