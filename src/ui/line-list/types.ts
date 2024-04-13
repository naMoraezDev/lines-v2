import { Line } from "@/service/lines/types";

export interface LineListProps {
  page: number;
  lines: Line[];
  search?: string;
  currentLines: Line[];
  filter?: "onibus" | "lotacao";
}
