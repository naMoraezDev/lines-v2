"use client";

import { MainLayoutProps } from "./types";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { useSelectedLayoutSegments } from "next/navigation";

export const MainLayoutView = ({ children }: MainLayoutProps) => {
  const segments = useSelectedLayoutSegments();
  const mobile =
    segments.includes("mobile") || segments.includes("__DEFAULT__");

  return (
    <main
      className="
        bg-slate-100 text-slate-500 duration-300
        dark:bg-slate-800 dark:text-slate-50
      "
    >
      <section>
        <Header {...{ mobile }} />
        <div
          className={`
            ${mobile ? "min-h-screen" : "min-h-[calc(100vh-140px)]"}
            max-w-[1270px] mx-auto px-4 
          `}
        >
          {children}
        </div>
        <Footer {...{ mobile }} />
      </section>
    </main>
  );
};
