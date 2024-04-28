import Image from "next/image";
import notFound from "../../public/images/404.svg";

export const NotFound = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 pt-20">
      <Image width={400} height={400} src={notFound} alt="404" />
      <span className="text-xl font-bold text-center">
        Oops! Página não encontrada.
      </span>
    </section>
  );
};
