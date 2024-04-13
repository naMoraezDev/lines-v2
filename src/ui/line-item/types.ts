import { Line } from "@/service/lines/types";

export interface LineItemProps {
  line: Line;
  handleItinerary: (id: string) => void;
}
