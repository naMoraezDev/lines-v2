import { Line } from "@/service/lines/types";

export interface PaginationProps {
  lines: Line[];
  currentPage: number;
}
