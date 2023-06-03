import { FruitsSection, MenuSection, ShowcaseBanner } from "../../components";

const Home = () => {
  return (
    <div className="flex w-full h-auto flex-col items-center justify-center">
      <ShowcaseBanner />
      <FruitsSection />
      <MenuSection title="当 前 热 门 菜 品" />
    </div>
  );
};

export default Home;
