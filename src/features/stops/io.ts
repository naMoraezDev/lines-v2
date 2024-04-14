import { useEffect, useState } from "react";
import { StopsProps } from "./types";
import { Line } from "@/service/stops/types";

export const useStops = ({ stops }: StopsProps) => {
  const [open, setOpen] = useState(false);
  const [center, setCenter] = useState<any>({
    lat: Number(stops && stops[0].latitude),
    lng: Number(stops && stops[0].longitude),
  });
  const [destination, setDestination] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [response, setResponse] = useState<any | null>(null);
  const [stopDetails, setStopDetails] = useState<Line[]>([]);
  const [origin, setOrigin] = useState<google.maps.LatLngLiteral | null>(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (stopDetails.length > 0) {
      setOpen(true);
    }
  }, [stopDetails]);

  return {
    open,
    center,
    origin,
    response,
    setCenter,
    setOrigin,
    handleOpen,
    stopDetails,
    destination,
    setResponse,
    setStopDetails,
    setDestination,
  };
};
