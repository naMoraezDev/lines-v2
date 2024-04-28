"use client";

import { MainLayoutProps } from "./types";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export const MainLayoutView = ({
  mobile,
  children,
  notFound,
}: MainLayoutProps) => {
  return (
    <main
      className="
        bg-slate-100 text-slate-500 duration-300
        dark:bg-slate-800 dark:text-slate-50
      "
    >
      <section>
        <Header {...{ mobile, notFound }} />
        <div
          className={`
            ${mobile ? "min-h-screen" : "min-h-[calc(100vh-140px)]"}
            max-w-[1270px] mx-auto px-4 
          `}
        >
          {children}
        </div>
        <Footer {...{ mobile, notFound }} />
      </section>
    </main>
  );
};
