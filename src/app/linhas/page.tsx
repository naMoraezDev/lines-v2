import "./styles.css";
import Link from "next/link";
import Image from "next/image";
import { MainLayout } from "@/ui/MainLayout";
import { TbMapSearch } from "react-icons/tb";
import { Pagination } from "@/ui/Pagination";
import { LinesService } from "@/service/lines";
import { FilterSelect } from "@/ui/FilterSelect";
import noData from "../../../public/images/no-data.svg";

const LinesPage = async ({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    search?: string;
    filter?: "onibus" | "lotacao";
  };
}) => {
  const filter = searchParams?.filter;
  const search = searchParams?.search;
  const page = Number(searchParams?.page) || 1;

  const [busLines, lotationLines] = await Promise.all([
    LinesService.getLines("o"),
    LinesService.getLines("l"),
  ]);

  const lines = filter
    ? filter === "onibus"
      ? busLines
      : lotationLines
    : search
    ? [...busLines, ...lotationLines].filter(
        (line) =>
          line.nome.toLowerCase().includes(search.toLowerCase()) ||
          line.codigo.toLowerCase().includes(search.toLowerCase())
      )
    : [...lotationLines, ...busLines];

  const currentLines = lines.slice((page - 1) * 10, page * 10);

  return (
    <MainLayout>
      {lines.length > 0 ? (
        <>
          <ul className="flex flex-col gap-4 w-full items-center py-10 animate-fadeIn">
            {!search && (
              <section className="w-[70%] flex justify-end">
                <FilterSelect />
              </section>
            )}
            <li className="grid grid-cols-[20%_50%_30%] w-[70%] py-4 px-4 font-bold rounded-md">
              <span>Código</span>
              <span>Nome</span>
              <span className="text-right">Detalhes</span>
            </li>
            {currentLines.map((line) => (
              <li
                key={line.id}
                className="grid grid-cols-[20%_50%_30%] items-center w-[70%] py-4 px-4 font-bold rounded-md"
              >
                <span>{line.codigo}</span>
                <span>{line.nome}</span>
                <span className="flex justify-end items-center text-right">
                  <Link
                    href={`/linhas/${line.id}`}
                    className="
                      flex gap-2 justify-center items-center bg-green-500 w-fit py-2 px-5 rounded-full text-slate-50 font-bold duration-300
                      hover:bg-green-600
                    "
                  >
                    <span>trajeto</span>
                    <TbMapSearch />
                  </Link>
                </span>
              </li>
            ))}
          </ul>
          {!search && <Pagination {...{ lines, filter, currentPage: page }} />}
        </>
      ) : (
        <section className="w-full h-[80vh] flex flex-col justify-center items-center animate-fadeIn">
          <Image width={400} height={400} src={noData} alt="sem resultados" />
          <span className="text-2xl font-bold text-center">
            Oops! Nenhum resultado <br /> para{" "}
            <span className="text-green-500">&quot;{search}&quot;</span>.
          </span>
        </section>
      )}
    </MainLayout>
  );
};

export default LinesPage;
