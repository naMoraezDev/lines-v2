import { LineItemProps } from "./types";
import { TbMapSearch } from "react-icons/tb";

export const LineItemView = ({ line, handleItinerary }: LineItemProps) => {
  return (
    <li className="grid grid-cols-[20%_50%_30%] items-center w-full p-4 font-bold rounded-md">
      <span>{line.codigo}</span>
      <span>{line.nome}</span>
      <span className="flex justify-end items-center text-right">
        <button
          type="button"
          onClick={() => handleItinerary(line.id)}
          className="
            flex gap-2 justify-center items-center bg-green-500 w-fit py-2 px-5 rounded-full text-slate-50 font-bold duration-300
            hover:bg-green-600
          "
        >
          <span>trajeto</span>
          <TbMapSearch />
        </button>
      </span>
    </li>
  );
};
