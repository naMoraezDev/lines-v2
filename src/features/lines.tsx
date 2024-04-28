import Image from "next/image";
import { LineList } from "@/ui/line-list";
import { Line } from "@/service/lines/types";
import noData from "../../public/images/no-data.svg";
import { DefaultProps } from "@/types/default-props";
import { ItineraryLocation } from "@/service/itinerary/types";

interface LinesProps extends DefaultProps {
  page: number;
  lines: Line[];
  currentLines: Line[];
  search: string | undefined;
  itineraryLocations: ItineraryLocation[];
  filter: "onibus" | "lotacao" | undefined;
}

export const Lines = ({
  page,
  lines,
  filter,
  mobile,
  search,
  currentLines,
  itineraryLocations,
}: LinesProps) => {
  return (
    <>
      {lines.length > 0 ? (
        <LineList
          {...{
            page,
            lines,
            filter,
            mobile,
            search,
            currentLines,
            itineraryLocations,
          }}
        />
      ) : (
        <section className="w-full flex flex-col items-center animate-fadeIn pt-20">
          <Image width={300} height={300} src={noData} alt="sem resultados" />
          <span className="text-2xl font-bold text-center">
            Oops! Nenhum resultado <br /> para{" "}
            <span className="text-green-500">&quot;{search}&quot;</span>.
          </span>
        </section>
      )}
    </>
  );
};
