import { GoogleMap } from "@/ui/google-map";
import { ItineraryService } from "@/service/itinerary";
import { ItineraryLocation } from "@/service/itinerary/types";

const ItineraryPage = async ({ params }: { params: { id: string } }) => {
  const itineraryData = await ItineraryService.getItinerary(params.id);

  const itineraryLocations: ItineraryLocation[] = Object.values(itineraryData);

  const { nome, codigo } = itineraryData;

  return (
    <main className="mt-10 flex flex-col gap-6">
      <h1 className="text-lg font-bold">
        Linha <span className="text-green-500">{codigo}</span> - {nome}
      </h1>
      <div className="overflow-hidden rounded-xl">
        <GoogleMap zoom={14} itinerary={itineraryLocations} />
      </div>
    </main>
  );
};

export default ItineraryPage;
