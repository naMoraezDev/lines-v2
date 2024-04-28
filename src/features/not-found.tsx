"use client";

import Image from "next/image";
import notFound from "../../public/images/404.svg";
import { useRouter } from "next/navigation";

export const NotFound = () => {
  const router = useRouter();

  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 pt-20">
      <Image width={300} height={300} src={notFound} alt="404" />
      <span className="text-xl font-bold text-center">
        Oops! Página não encontrada.
      </span>
      <button className="text-green-500 font-bold" type="button" onClick={() => router.push("/home")}>
        Voltar para a página inicial
      </button>
    </section>
  );
};
