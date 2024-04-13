"use client";

import { useRouter } from "next/navigation";

export const FilterSelectView = () => {
  const router = useRouter();
  return (
    <section className="flex justify-center items-center gap-4">
      <span>Filtrar por :</span>
      <select
        name="filter"
        onChange={(e) =>
          router.push(
            `/linhas${
              e.target.value === "todos" ? "" : `?filter=${e.target.value}`
            }`
          )
        }
        className="bg-transparent rounded-lg py-2 px-4 outline-none cursor-pointer"
      >
        <option value="todos" style={{ color: "black" }}>
          Todos
        </option>
        <option value="onibus" style={{ color: "black" }}>
          Ônibus
        </option>
        <option value="lotacao" style={{ color: "black" }}>
          Lotação
        </option>
      </select>
    </section>
  );
};
