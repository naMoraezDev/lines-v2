import { Stops } from "@/ui/Stops";
import { MainLayout } from "@/ui/MainLayout";
import { StopsService } from "@/service/stops";

const StopsPage = async () => {
  const stops = StopsService.getStops();

  return (
    <MainLayout>
      <Stops {...{ stops }} />
    </MainLayout>
  );
};

export default StopsPage;
