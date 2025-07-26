"use client";

import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { useAppSelector } from "@/app/lib/store";

export default function NavAuth() {
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);

  return (
    <div className="flex items-center space-x-4">
      {isLoggedIn ? (
        <>
          <span className="text-gray-800">Hi, {user?.name}</span>
          <Link
            href="/cart"
            className="text-gray-700 hover:text-blue-600 font-bold"
          >
            Cart
          </Link>
          <LogoutButton />
        </>
      ) : (
        <Link
          href="/login"
          className="text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 transition cursor-pointer"
        >
          Login
        </Link>
      )}
    </div>
  );
}
