export interface Stop {
  codigo: string;
  linhas: Line[];
  latitude: string;
  terminal: string;
  longitude: string;
}

export interface Line {
  idLinha: string;
  nomeLinha: string;
  codigoLinha: string;
}
