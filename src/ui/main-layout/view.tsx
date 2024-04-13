"use client";
import { MainLayoutProps } from "./types";
import { Header } from "./components/header";
import { useSelectedLayoutSegments } from "next/navigation";

export const MainLayoutView = ({ children }: MainLayoutProps) => {
  const mobile = useSelectedLayoutSegments()[0] === "mobile";

  return (
    <main
      className="
        bg-slate-100 text-slate-500 min-h-screen w-full duration-300
        dark:bg-slate-800 dark:text-slate-50
      "
    >
      <section className="max-w-[1270px] mx-auto pb-20">
        <Header {...{ mobile }} />
        <div className="px-4">{children}</div>
      </section>
    </main>
  );
};
