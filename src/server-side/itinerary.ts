import { ItineraryService } from "@/service/itinerary";
import { ItineraryLocation } from "@/service/itinerary/types";

interface GetItineraryStaticProps {
  params: { id: string };
}

export const getItineraryStaticProps = async ({
  params,
}: GetItineraryStaticProps) => {
  const itineraryData = await ItineraryService.getItinerary(params.id);

  const itineraryLocations: ItineraryLocation[] = Object.values(itineraryData);

  const { nome, codigo } = itineraryData;

  return {
    nome,
    codigo,
    itineraryLocations,
  };
};
