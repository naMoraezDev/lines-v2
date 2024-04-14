import { Line } from "@/service/lines/types";
import { DefaultProps } from "@/types/default-props";

export interface LineListProps extends DefaultProps {
  page: number;
  lines: Line[];
  search?: string;
  currentLines: Line[];
  filter?: "onibus" | "lotacao";
}
