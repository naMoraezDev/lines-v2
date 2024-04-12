"use client";

import Link from "next/link";
import { useMenu } from "./io";
import { LinesLogo } from "@/ui/LinesLogo";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export const MenuView = () => {
  const { open, handleOpen } = useMenu();

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="
          flex justify-center items-center bg-transparent w-10 h-10 rounded-full duration-300 p-2
          hover:bg-slate-100
          dark:hover:bg-slate-700
        "
      >
        <AiOutlineMenu className="w-full h-full" />
      </button>
      <aside
        className={`
          ${open ? "translate-x-0" : "translate-x-[-100%]"}
          w-[300px] fixed left-0 top-0 bg-slate-200 h-screen p-6 flex flex-col gap-6 duration-300 z-50
          dark:bg-slate-800
        `}
      >
        <div className="flex items-center justify-between">
          <LinesLogo />
          <button
            type="button"
            onClick={handleOpen}
            className="
              flex justify-center items-center bg-transparent w-10 h-10 rounded-full duration-300 p-2
              hover:bg-slate-300
              dark:hover:bg-slate-700
            "
          >
            <AiOutlineClose className="w-full h-full" />
          </button>
        </div>
        <Link href="/" className="text-xl">
          Home
        </Link>
        <Link href="/linhas" className="text-xl">
          Linhas
        </Link>
        <Link href="/pontos" className="text-xl">
          Pontos
        </Link>
      </aside>
      <div
        onClick={handleOpen}
        className={`
          ${open ? "opacity-40" : "opacity-0 pointer-events-none"}
          fixed left-0 top-0 w-full h-full bg-slate-900 z-10 duration-300 backdrop-blur-3xl
        `}
      />
    </>
  );
};
