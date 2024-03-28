import { Line } from "./types";
import { fetchApi } from "../fetch";

export const LinesService = {
  getLines: async (type: "o" | "l") => {
    const response = await fetchApi<Line[]>(`/process.php?a=nc&p=%&t=${type}`, {
      next: { revalidate: 60 * 60 * 24 },
    });

    return response;
  },
};
