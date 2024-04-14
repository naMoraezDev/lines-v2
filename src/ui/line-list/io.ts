import { useState } from "react";
import { ItineraryService } from "@/service/itinerary";
import { ItineraryLocation, Line } from "@/service/itinerary/types";

export const useLineList = () => {
  const [loading, setLoading] = useState(false);
  const [currentLine, setCurrentLine] = useState<Line>();
  const [itinerary, setItinerary] = useState<ItineraryLocation[]>([]);

  const handleItinerary = async (id: string) => {
    setLoading(true);
    const response = await ItineraryService.getItinerary(id);
    setItinerary(Object.values(response));
    setCurrentLine({
      nome: response.nome,
      id: response.idlinha,
      codigo: response.codigo,
    });
    setLoading(false);
  };

  return { loading, itinerary, currentLine, handleItinerary };
};
