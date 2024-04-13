import Link from "next/link";
import Image from "next/image";
import { DefaultProps } from "@/types/default-props";
import busStopIllustration from "../../public/images/bus-stop.svg";

export const Home = ({ mobile }: DefaultProps) => {
  return (
    <main
      className={`
        ${
          mobile ? "flex-col mt-12 items-center" : "items-center justify-center"
        }
        flex w-full h-[80vh] animate-fadeIn
      `}
    >
      <div
        className={`
          ${mobile ? "gap-14" : "gap-8"}
          flex flex-col 
        `}
      >
        <h1
          className={`
            ${mobile ? "text-4xl" : "text-5xl max-w-[450px]"}
            font-bold leading-[1.5]
          `}
        >
          Consulte <span className="text-green-500">itinerários</span> completos
          de todas as <span className="text-green-500">linhas</span> de ônibus
          de Porto Alegre.
        </h1>
        <Link
          href="/linhas"
          className={`
            ${mobile ? "w-full" : "w-2/3"}
            flex justify-center items-center w-2/3 bg-green-500 h-10 rounded-full text-slate-50 font-bold duration-300
            hover:bg-green-600
          `}
        >
          Navegar
        </Link>
      </div>
      <Image
        priority
        width={500}
        height={500}
        src={busStopIllustration}
        alt="homem esperando em um ponto de ônibus"
      />
    </main>
  );
};
