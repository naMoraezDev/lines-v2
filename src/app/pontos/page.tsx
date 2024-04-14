import { Stops } from "@/features/stops";
import { StopsService } from "@/service/stops";

const StopsPage = async () => {
  const stops = StopsService.getStops();

  return <Stops {...{ stops }} />;
};

export default StopsPage;
