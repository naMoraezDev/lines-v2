"use client";

import { useSearchbox } from "./io";
import { RiSearchLine } from "react-icons/ri";

export const SearchboxView = () => {
  const { search, handleSearch, handleSubmit } = useSearchbox();

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-80 flex items-center bg-slate-200 py-2 px-4 rounded-full transition-colors duration-500
        dark:bg-slate-700
      "
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
      <button type="submit" className="rounded-full p-1 hover:bg-slate-300">
        <RiSearchLine className="w-5 h-5" />
      </button>
    </form>
  );
};
