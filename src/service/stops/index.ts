import staticStops from "@/static/stops.json";
import { Stop } from "./types";

export const StopsService = {
  getStops: () => {
    const response = staticStops as Stop[];

    return response;
  },
};
