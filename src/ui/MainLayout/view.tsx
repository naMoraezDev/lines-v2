import { Header } from "./components/Header";

export const MainLayoutView = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-[1366px] mx-auto">
      <Header />
      {children}
    </main>
  );
};
