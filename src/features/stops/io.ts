import { useState } from "react";
import { StopsProps } from "./types";
import { Line } from "@/service/stops/types";

export const useStops = ({ stops }: StopsProps) => {
  const [center, setCenter] = useState<any>({
    lat: Number(stops && stops[0].latitude),
    lng: Number(stops && stops[0].longitude),
  });
  const [destination, setDestination] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [response, setResponse] = useState<any | null>(null);
  const [stopDetails, setStopDetails] = useState<Line[]>([]);
  const [origin, setOrigin] = useState<google.maps.LatLngLiteral | null>(null);

  return {
    center,
    origin,
    response,
    setCenter,
    setOrigin,
    stopDetails,
    destination,
    setResponse,
    setStopDetails,
    setDestination,
  };
};
