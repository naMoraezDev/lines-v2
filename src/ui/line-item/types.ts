import { Line } from "@/service/lines/types";
import { DefaultProps } from "@/types/default-props";

export interface LineItemProps extends DefaultProps {
  line: Line;
  stopsVariant?: boolean;
  handleItinerary: (id: string) => void;
}
