"use client";

import { useSearchbox } from "./io";
import { RiSearchLine } from "react-icons/ri";
import { DefaultProps } from "@/types/default-props";

export const SearchboxView = ({ mobile }: DefaultProps) => {
  const { search, handleSearch, handleSubmit } = useSearchbox();

  return (
    <form
      onSubmit={handleSubmit}
      className={`
        ${mobile ? "w-full" : "w-80"}
         flex items-center bg-slate-200 py-2 px-4 rounded-full duration-300
        dark:bg-slate-700
      `}
    >
      <input
        type="text"
        name="search"
        value={search}
        autoComplete="off"
        onChange={handleSearch}
        placeholder="Buscar uma linha"
        className="
          w-full bg-transparent appearance-none 
          focus:outline-none
        "
      />
      <button
        type="submit"
        className="rounded-full p-1 duration-300 hover:bg-slate-300 dark:hover:bg-slate-600"
      >
        <RiSearchLine className="w-5 h-5" />
      </button>
    </form>
  );
};
