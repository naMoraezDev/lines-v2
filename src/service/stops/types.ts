import { Line } from "../lines/types";

export interface Stop {
  codigo: string;
  linhas: Line[];
  latitude: string;
  terminal: string;
  longitude: string;
}
