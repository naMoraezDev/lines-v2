import { MainLayout } from "@/ui/main-layout";
import { NotFound } from "@/features/not-found";

const NotFoundPage = () => {
  return (
    <MainLayout notFound>
      <NotFound />
    </MainLayout>
  );
};

export default NotFoundPage;
