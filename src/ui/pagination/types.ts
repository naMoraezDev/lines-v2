import { Line } from "@/service/lines/types";
import { DefaultProps } from "@/types/default-props";

export interface PaginationProps extends DefaultProps {
  lines: Line[];
  currentPage: number;
  filter?: "onibus" | "lotacao";
}
