"use client";

import Link from "next/link";
import { useSearchbox } from "./io";
import { RiSearchLine } from "react-icons/ri";

export const SearchboxView = () => {
  const { search, handleSearch, searchParam } = useSearchbox();

  return (
    <section
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
      <Link
        href={`/linhas?search=${search || ""}`}
        className="rounded-full p-1 duration-300 hover:bg-slate-300"
      >
        <RiSearchLine className="w-5 h-5" />
      </Link>
    </section>
  );
};
