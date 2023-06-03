import { useEffect, useState } from "react";

import Container from "../../Container";
import Filters from "../../Filters";
import { Title } from "..";
import { appFetchFoodsData } from "../../../Firebase";

// 菜单页面
const Menu = ({ title }: { title?: string }) => {
  const [scrollValue, setScrollValue] = useState(0);
  const [filter, setFilter] = useState<string>("all");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const foodData = await appFetchFoodsData(filter);
      setItems(foodData.foods);
    };
    fetchFoods();
  }, [filter]);
  return (
    <section className="w-full my-5" id="menu">
      <div className="w-full flex items-center justify-center">
        <Title title={title || "Our Hot Dishes"} center />
      </div>
      {/* 菜品分类 */}
      <Filters filter={filter} setFilter={setFilter} />
      {/*  菜品 */}
      <Container
        className="bg-containerbg"
        col
        scrollOffset={scrollValue}
        items={items}
      />
    </section>
  );
};

export default Menu;
