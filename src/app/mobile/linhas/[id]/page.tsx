import { Itinerary } from "@/features/itinerary";
import { getItineraryStaticProps } from "@/server-side/itinerary";

const ItineraryPage = async ({ params }: { params: { id: string } }) => {
  const { nome, codigo, itineraryLocations } = await getItineraryStaticProps({
    params,
  });

  return <Itinerary {...{ itineraryLocations, nome, codigo, mobile: true }} />;
};

export default ItineraryPage;
