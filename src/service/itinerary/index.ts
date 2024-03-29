import { fetchApi } from "../fetch";

export const ItineraryService = {
  getItinerary: async (id: string) => {
    const response = await fetchApi<any>(`/process.php?a=il&p=${id}`);

    return response;
  },
};
