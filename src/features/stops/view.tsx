"use client";

import "./styles.css";
import Image from "next/image";
import { useStops } from "./io";
import { StopsProps } from "./types";
import { LineItem } from "../../ui/line-item";
import { GoogleMap } from "../../ui/google-map";
import busStop from "../../../public/images/bus-stop-blue.svg";

export const StopsView = ({ stops }: StopsProps) => {
  const {
    center,
    origin,
    response,
    setCenter,
    setOrigin,
    setResponse,
    stopDetails,
    destination,
    setStopDetails,
    setDestination,
  } = useStops({ stops });

  return (
    <section className="w-full flex gap-6 mt-10 mb-12">
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
          <h2 className="text-xl font-bold mb-6 px-4">Linhas disponíveis</h2>
          <ul className="flex flex-col w-full items-center">
            <li className="grid grid-cols-[20%_50%_30%] w-full p-4 font-bold rounded-md">
              <span>Código</span>
              <span>Nome</span>
              <span className="text-right">Detalhes</span>
            </li>
            {stopDetails.map((stop) => (
              <LineItem
                stopsVariant
                key={stop.idLinha}
                line={{
                  id: stop.idLinha,
                  nome: stop.nomeLinha,
                  codigo: stop.codigoLinha,
                }}
                handleItinerary={() => setStopDetails([])}
              />
            ))}
          </ul>
        </div>
      )}
      {!stopDetails.length && (
        <div className="w-1/2 flex flex-col items-center animate-fadeIn">
          <Image width={400} height={400} src={busStop} alt="mapa" />
          <span className="text-xl text-center font-bold">
            Selecione um <span className="text-blue-500">ponto</span> no mapa{" "}
            <br />
            para visualizar as linhas de ônibus <br />
            disponíveis.
          </span>
        </div>
      )}
    </section>
  );
};
