import { Stop } from "./types";
import { fetchApi } from "../fetch";

export const StopsService = {
  getStops: async () => {
    const response = await fetchApi<Stop[]>("/process.php?a=tp&p=", {
      next: { revalidate: 60 * 60 * 24 },
    });

    return response;
  },
};
