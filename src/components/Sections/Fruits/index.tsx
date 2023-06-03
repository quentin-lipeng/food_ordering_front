import { PrevNext as PrevNextButtons, Title } from "..";

import Container from "../../Container";
import { useEffect, useState } from "react";
import { appFetchFoodsData } from "../../../Firebase";

const Fruits = () => {
  const [recommend, setRecommend] = useState("fruits");
  const [items, setItems] = useState([]);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const fetchFoods = async () => {
      const foodData = await appFetchFoodsData(recommend);
      setItems(foodData.foods);
    };
    fetchFoods();
  }, [recommend]);

  return (
    <section className="w-full my-5">
      <div className="w-full flex items-center justify-between">
        <Title title="Our fresh & healthy fruits" />
        <PrevNextButtons
          onNext={() => setScrollValue(10000)}
          onPrev={() => setScrollValue(-10000)}
        />
      </div>
      <Container
        className="bg-containerbg"
        scrollOffset={scrollValue}
        items={items}
      />
    </section>
  );
};

export default Fruits;
