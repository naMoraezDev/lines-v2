import { GoogleMap } from "@/ui/google-map";
import { DefaultProps } from "@/types/default-props";
import { ItineraryLocation } from "@/service/itinerary/types";

interface ItineraryProps extends DefaultProps {
  nome: string;
  codigo: string;
  itineraryLocations: ItineraryLocation[];
}

export const Itinerary = ({
  nome,
  codigo,
  itineraryLocations,
}: ItineraryProps) => {
  return (
    <main className="mt-10 flex flex-col gap-6 pb-12">
      <h1 className="text-lg font-bold">
        Linha <span className="text-green-500">{codigo}</span> - {nome}
      </h1>
      <div className="overflow-hidden rounded-xl">
        <GoogleMap zoom={14} itinerary={itineraryLocations} />
      </div>
    </main>
  );
};
