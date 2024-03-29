import Link from "next/link";
import Image from "next/image";
import { MainLayout } from "@/ui/MainLayout";
import hero from "../../public/images/bus-stop.svg";

const HomePage = () => {
  return (
    <MainLayout>
      <main className="flex items-center w-full justify-center animate-fadeIn">
        <div className="flex flex-col gap-8">
          <h1 className="text-[48px] font-bold max-w-[450px]">
            Consulte <span className="text-green-500">itinerários</span>{" "}
            completos de todas as <span className="text-green-500">linhas</span>{" "}
            de ônibus de Porto Alegre.
          </h1>
          <Link
            href="/linhas"
            className="
              flex justify-center items-center w-2/3 bg-green-500 h-10 rounded-full text-slate-50 font-bold duration-300
              hover:bg-green-600
            "
          >
            Navegar
          </Link>
        </div>
        <Image
          src={hero}
          width={500}
          height={500}
          alt="homem esperando em um ponto de ônibus"
        />
      </main>
    </MainLayout>
  );
};

export default HomePage;
