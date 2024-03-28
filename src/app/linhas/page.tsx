import "./styles.css";
import Link from "next/link";
import { MainLayout } from "@/ui/MainLayout";
import { TbMapSearch } from "react-icons/tb";
import { LinesService } from "@/service/lines";

const LinesPage = async ({
  searchParams,
}: {
  searchParams?: { page: string };
}) => {
  const page = Number(searchParams?.page) || 1;

  const [busLines, lotationLines] = await Promise.all([
    LinesService.getLines("o"),
    LinesService.getLines("l"),
  ]);

  const lines = [...lotationLines, ...busLines];

  const pages = Math.ceil(lines.length / 10);

  const currentLines = lines.slice((page - 1) * 10, page * 10);

  return (
    <MainLayout>
      <ul className="flex flex-col gap-4 w-full items-center mt-10">
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

      <span>
        <Link href={`/linhas?page=${page - 1}`}>anterior</Link>
      </span>
      <span>
        {page}/{pages}
      </span>
      <span>
        <Link href={`/linhas?page=${page + 1}`}>próximo</Link>
      </span>
    </MainLayout>
  );
};

export default LinesPage;
