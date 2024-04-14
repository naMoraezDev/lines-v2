import Link from "next/link";
import { LineItemProps } from "./types";
import { TbMapSearch } from "react-icons/tb";

export const LineItemView = ({
  line,
  mobile,
  handleItinerary,
}: LineItemProps) => {
  return (
    <li
      className={`
        ${mobile ? "grid-cols-[20%_60%_20%] gap-2" : "grid-cols-[20%_50%_30%] "}
        grid items-center w-full p-4 font-bold rounded-md relative
      `}
    >
      <span>{line.codigo}</span>
      <span className="break-all">{line.nome}</span>
      <span
        className={`
          ${mobile && "w-fit"}
          flex justify-end items-center text-right
        `}
      >
        <button
          type="button"
          onClick={() => handleItinerary(line.id)}
          className={`
            ${mobile ? "w-10 h-10 p-0 text-xl" : "w-fit py-2 px-5"}
            flex gap-2 justify-center items-center bg-green-500 rounded-full text-slate-50 font-bold duration-300
            hover:bg-green-600
          `}
        >
          {!mobile && <span>trajeto</span>}
          <TbMapSearch />
        </button>
      </span>

      {mobile && (
        <Link
          href={`/linhas/${line.id}`}
          className="absolute top-0 left-0 w-full h-full"
        />
      )}
    </li>
  );
};
