import { useLayoutEffect, useRef } from "react";

import { Food } from "../../../types";
import Loader from "../Loader";
import { SingleFoodItem } from "../FoodItem";
import { motion } from "framer-motion";
import NotFound from "../NotFound";
import { isAdmin } from "../../utils/functions";
import { Banana } from "../Assets";

// 菜品视图
const Container = ({
  scrollOffset,
  col,
  items,
  className,
}: {
  scrollOffset: number;
  col?: boolean;
  items: Food[];
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (null !== containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  }, [scrollOffset]);
  // const [{ user }, dispatch] = useStateValue();
  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className={`${className} w-full my-12 flex items-center ${
        (!items || col) && "justify-center"
      }   min-h-[200px] gap-4  px-2 ${
        !col
          ? "overflow-x-scroll scrollbar-hidden scroll-smooth"
          : "overflow-x-hidden flex-wrap"
      }`}
    >
      {items &&
        items.map((food: Food) => {
          food.foodImg = Banana;
          return (
            <SingleFoodItem
              key={food.foodId}
              item={food}
              col={col}
              admin={isAdmin(null)}
            />
          );
        })}
      {/* {items &&
        items.map((item: FoodItem) => (
          <SingleFoodItem
            key={item.id}
            item={item}
            col={col}
            admin={isAdmin(user)}
          />
        ))} */}
      {!items &&
        (!col ? (
          <Loader progress={"Fetching Food Items....."} />
        ) : (
          <NotFound text="Fetching Food Items..." />
        ))}
      {items && items.length <= 0 && (
        <NotFound text="No Food Items Available " />
      )}
    </motion.div>
  );
};

export default Container;
