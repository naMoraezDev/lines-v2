import { Home } from "@/features/home";
import { MainLayout } from "@/ui/MainLayout";

const HomePage = () => {
  return (
    <MainLayout mobile>
      <Home mobile />
    </MainLayout>
  );
};

export default HomePage;
