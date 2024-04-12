import Link from "next/link";
import Image from "next/image";
import hero from "../../public/images/bus-stop.svg";
import { DefaultProps } from "@/types/default-props";

export const Home = ({ mobile }: DefaultProps) => {
  return (
    <main className="flex items-center w-full h-[80vh] justify-center animate-fadeIn">
      <div className="flex flex-col gap-8">
        <h1 className="text-[48px] font-bold max-w-[450px] leading-3">
          Consulte <span className="text-green-500">itinerários</span> completos
          de todas as <span className="text-green-500">linhas</span> de ônibus
          de Porto Alegre.
        </h1>
        <Link
          href="/linhas"
          className={`
            ${mobile ? "w-full" : "w-1/3"}
            flex justify-center items-center w-2/3 bg-green-500 h-10 rounded-full text-slate-50 font-bold duration-300
            hover:bg-green-600
          `}
        >
          Navegar
        </Link>
      </div>
      {!mobile && (
        <Image
          priority
          src={hero}
          width={500}
          height={500}
          alt="homem esperando em um ponto de ônibus"
        />
      )}
    </main>
  );
};
