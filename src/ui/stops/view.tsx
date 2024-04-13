"use client";

import { useState } from "react";
import { StopsProps } from "./types";
import { LineItem } from "../line-item";
import { GoogleMap } from "../google-map";
import { Line } from "@/service/stops/types";

export const StopsView = ({ stops }: StopsProps) => {
  const [stopDetails, setStopDetails] = useState<Line[]>([]);
  const [center, setCenter] = useState<any>({
    lat: Number(stops && stops[0].latitude),
    lng: Number(stops && stops[0].longitude),
  });
  const [origin, setOrigin] = useState<google.maps.LatLngLiteral | null>(null);
  const [destination, setDestination] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [response, setResponse] = useState<any | null>(null);

  return (
    <section className="w-full flex gap-6 mt-10">
      <div className="w-1/2 rounded-xl overflow-hidden animate-fadeIn">
        <GoogleMap
          {...{
            stops,
            center,
            origin,
            response,
            setOrigin,
            setCenter,
            destination,
            setResponse,
            setStopDetails,
            setDestination,
          }}
        />
      </div>
      {Boolean(stopDetails.length) && (
        <div className="w-1/2 animate-fadeIn">
          <ul className="flex flex-col w-full items-center">
            <li className="grid grid-cols-[20%_50%_30%] w-full p-4 font-bold rounded-md">
              <span>Código</span>
              <span>Nome</span>
              <span className="text-right">Detalhes</span>
            </li>
            {stopDetails.map((stop) => (
              <LineItem
                key={stop.idLinha}
                line={{
                  codigo: stop.codigoLinha,
                  nome: stop.nomeLinha,
                  id: stop.idLinha,
                }}
                handleItinerary={() => setStopDetails([])}
              />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
