import { Line } from "@/service/stops/types";
import { Dispatch, SetStateAction } from "react";
import { ItineraryLocation } from "@/service/itinerary/types";

interface Stops {
  codigo: string;
  linhas: Line[];
  terminal: string;
  latitude: string;
  longitude: string;
}

export interface GoogleMapProps {
  center?: any;
  zoom?: number;
  stops?: Stops[];
  setCenter?: Dispatch<any>;
  itinerary?: ItineraryLocation[];
  origin?: google.maps.LatLngLiteral | null;
  destination?: google.maps.LatLngLiteral | null;
  setStopDetails?: Dispatch<SetStateAction<Line[]>>;
  response?: google.maps.DistanceMatrixResponse | null;
  setResponse?: Dispatch<
    SetStateAction<google.maps.DistanceMatrixResponse | null>
  >;
  setOrigin?: Dispatch<SetStateAction<google.maps.LatLngLiteral | null>>;
  setDestination?: Dispatch<SetStateAction<google.maps.LatLngLiteral | null>>;
}
