import { Stop } from "@/service/stops/types";
import { DefaultProps } from "@/types/default-props";

export interface StopsProps extends DefaultProps {
  stops: Stop[];
}
