import { MainLayout } from "@/ui/main-layout";
import { Itinerary } from "@/features/itinerary";
import { getItineraryStaticProps } from "@/server-side/itinerary";

const ItineraryPage = async ({ params }: { params: { id: string } }) => {
  const { nome, codigo, itineraryLocations } = await getItineraryStaticProps({
    params,
  });

  return (
    <MainLayout>
      <Itinerary {...{ itineraryLocations, nome, codigo }} />
    </MainLayout>
  );
};

export default ItineraryPage;
