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
      {...{
        page,
        lines,
        filter,
        search,
        mobile: true,
        currentLines,
        itineraryLocations,
      }}
    />
  );
};

export default LinesPage;
