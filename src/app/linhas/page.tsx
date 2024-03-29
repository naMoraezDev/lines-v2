import "./styles.css";
import Link from "next/link";
import { MainLayout } from "@/ui/MainLayout";
import { TbMapSearch } from "react-icons/tb";
import { Pagination } from "@/ui/Pagination";
import { LinesService } from "@/service/lines";
import { FilterSelect } from "@/ui/FilterSelect";

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
      <ul className="flex flex-col gap-4 w-full items-center py-10">
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
    </MainLayout>
  );
};

export default LinesPage;
