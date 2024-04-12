import { Home } from "@/features/home";
import { MainLayout } from "@/ui/main-layout";

const HomePage = () => {
  return (
    <MainLayout mobile>
      <Home mobile />
    </MainLayout>
  );
};

export default HomePage;
