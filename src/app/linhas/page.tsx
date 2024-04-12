import "./styles.css";
import Image from "next/image";
import { LineList } from "@/ui/LineList";
import { MainLayout } from "@/ui/main-layout";
import { LinesService } from "@/service/lines";
import { ItineraryService } from "@/service/itinerary";
import noData from "../../../public/images/no-data.svg";
import { ItineraryLocation } from "@/service/itinerary/types";

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

  const itineraryData = await ItineraryService.getItinerary("7");

  const itineraryLocations: ItineraryLocation[] = Object.values(itineraryData);

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
        <LineList
          {...{ lines, filter, search, currentLines, itineraryLocations, page }}
        />
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
