import Link from "next/link";
import NavAuth from "./NavAuth"; // Client component for login/logout UI

export default function Header() {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-blue-600">
        🛒 ProductCatalog
      </Link>

      {/* Nav & Auth */}
      <NavAuth />
    </header>
  );
}
