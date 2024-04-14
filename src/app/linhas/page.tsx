import { Lines } from "@/features/lines";
import { getLinesServerSideProps } from "@/server-side/lines";

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
    await getLinesServerSideProps({ searchParams });

  return (
    <Lines
      {...{ lines, filter, search, currentLines, itineraryLocations, page }}
    />
  );
};

export default LinesPage;
