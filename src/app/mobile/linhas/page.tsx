import { Lines } from "@/features/lines";
import { MainLayout } from "@/ui/main-layout";
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
    <MainLayout mobile>
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
    </MainLayout>
  );
};

export default LinesPage;
