"use client";

import Image from "next/image";
import { useLineList } from "./io";
import { LineItem } from "../line-item";
import { LineListProps } from "./types";
import { Pagination } from "../pagination";
import { GoogleMap } from "@/ui/google-map";
import { FilterSelect } from "../filter-select";
import mapHero from "../../../public/images/map-hero.svg";

export const LineListView = ({
  page,
  lines,
  filter,
  search,
  currentLines,
}: LineListProps) => {
  const { loading, itinerary, currentLine, handleItinerary } = useLineList();

  return (
    <section className="pb-10">
      <div className="w-full flex py-10 gap-6">
        <div className="w-1/2">
          <ul className="flex flex-col w-full items-center animate-fadeIn">
            {!search && (
              <section className="w-full flex mb-6">
                <FilterSelect />
              </section>
            )}
            <li className="grid grid-cols-[20%_50%_30%] w-full p-4 font-bold rounded-md">
              <span>Código</span>
              <span>Nome</span>
              <span className="text-right">Detalhes</span>
            </li>
            {currentLines.map((line) => (
              <LineItem key={line.id} {...{ line, handleItinerary }} />
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          {Boolean(itinerary.length && !loading) && (
            <div className="animate-fadeIn flex flex-col gap-2">
              <span className="text-lg font-bold">
                Linha{" "}
                <span className="text-green-500">{currentLine?.codigo}</span> -{" "}
                {currentLine?.nome}
              </span>
              <div className="rounded-xl overflow-hidden h-min">
                <GoogleMap itinerary={itinerary} />
              </div>
            </div>
          )}
          {!itinerary.length && (
            <div className="w-full flex flex-col justify-center items-center animate-fadeIn">
              <Image width={400} height={400} src={mapHero} alt="mapa" />
              <span className="text-xl text-center font-bold">
                Selecione uma linha para <br />
                visualizar o <span className="text-green-500">trajeto</span> no
                mapa.
              </span>
            </div>
          )}
        </div>
      </div>
      {!search && <Pagination {...{ lines, filter, currentPage: page }} />}
    </section>
  );
};
