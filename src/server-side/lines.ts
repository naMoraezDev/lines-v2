import { LinesService } from "@/service/lines";
import { ItineraryService } from "@/service/itinerary";
import { ItineraryLocation } from "@/service/itinerary/types";

interface GetLinesStaticProps {
  searchParams?: {
    page?: string;
    search?: string;
    filter?: "onibus" | "lotacao";
  };
}

export const getLinesStaticProps = async ({
  searchParams,
}: GetLinesStaticProps) => {
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

  return {
    page,
    lines,
    filter,
    search,
    currentLines,
    itineraryLocations,
  };
};
