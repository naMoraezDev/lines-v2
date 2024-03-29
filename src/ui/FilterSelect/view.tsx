"use client";

import { useRouter } from "next/navigation";

export const FilterSelectView = () => {
  const router = useRouter();
  return (
    <section className="flex justify-center items-center gap-4">
      <span>Filtrar por :</span>
      <select
        name="filter"
        onChange={(e) => router.push(`/linhas?filter=${e.target.value}`)}
        className="bg-transparent border-[1px] border-green-500 rounded-lg p-2 text-slate-900 duration-500 focus:outline-none dark:bg-slate-100"
      >
        <option value="onibus">Ônibus</option>
        <option value="lotacao">Lotação</option>
      </select>
    </section>
  );
};
