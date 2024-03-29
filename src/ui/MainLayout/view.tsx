import { Header } from "./components/Header";

export const MainLayoutView = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="
        bg-slate-100 text-slate-500 min-h-screen w-screen transition-colors duration-500
        dark:bg-slate-800 dark:text-slate-50
      "
    >
      <section className="max-w-[1270px] mx-auto">
        <Header />
        {children}
      </section>
    </main>
  );
};
