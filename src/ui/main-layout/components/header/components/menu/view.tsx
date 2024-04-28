"use client";

import Link from "next/link";
import { useMenu } from "./io";
import { LinesLogo } from "@/ui/lines-logo";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { DefaultProps } from "@/types/default-props";

export const MenuView = ({ mobile }: DefaultProps) => {
  const { open, handleOpen } = useMenu();

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={`
          ${mobile ? "w-8 h-8" : "w-10 h-10 p-2"}
          flex justify-center items-center bg-transparent rounded-full duration-300 shrink-0
          hover:bg-slate-200
          dark:hover:bg-slate-700
        `}
      >
        <AiOutlineMenu className="w-full h-full" />
      </button>
      <aside
        className={`
          ${mobile ? "w-full" : "w-[300px]"}
          ${open ? "translate-x-0" : "translate-x-[-100%]"}
          fixed left-0 top-0 bg-slate-100 h-screen p-6 flex flex-col gap-6 duration-300 z-50
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
              hover:bg-slate-200
              dark:hover:bg-slate-700
            "
          >
            <AiOutlineClose className="w-full h-full" />
          </button>
        </div>
        <Link href="/home" className="text-xl" onClick={handleOpen}>
          Home
        </Link>
        <Link href="/linhas" className="text-xl" onClick={handleOpen}>
          Linhas
        </Link>
        <Link href="/pontos" className="text-xl" onClick={handleOpen}>
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
