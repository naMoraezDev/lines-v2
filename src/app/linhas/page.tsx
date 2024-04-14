import { Lines } from "@/features/lines";
import { getLinesStaticProps } from "@/server-side/lines";

const LinesPage = async ({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    search?: string;
    filter?: "onibus" | "lotacao";
  };
}) => {
  const { currentLines, filter, itineraryLocations, lines, search, page } =
    await getLinesStaticProps({ searchParams });

  return (
    <Lines
      {...{ lines, filter, search, currentLines, itineraryLocations, page }}
    />
  );
};

export default LinesPage;
