"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavigationMenuView = () => {
  const pathname = usePathname();
  return (
    <section className="menu flex gap-12">
      <Link
        href="/"
        className={`
          ${pathname === "/" ? "border-green-400" : "border-none"}
          menu-item pb-2 border-b-4 rounded-sm
        `}
      >
        Home
      </Link>
      <Link
        href="/linhas"
        className={`
          ${pathname === "/linhas" ? "border-green-400" : "border-none"}
          menu-item pb-2 border-b-4 rounded-sm
        `}
      >
        Linhas
      </Link>
      <Link
        href="/pontos"
        className={`
          ${pathname === "/pontos" ? "border-green-400" : "border-none"}
          menu-item pb-2 border-b-4 rounded-sm
        `}
      >
        Pontos
      </Link>
    </section>
  );
};
