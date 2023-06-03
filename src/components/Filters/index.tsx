import { motion } from "framer-motion";
import Button from "./Button";
import { FoodCat } from "../../../types";
import { BiRestaurant } from "react-icons/bi";
import { labelToIcon } from "../../utils/categories";
import { useStateValue } from "../../context/StateProvider";

const Filters = ({ filter, setFilter }: { filter: string; setFilter: any }) => {
  const [{ categories }, dispatch] = useStateValue();

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className={`w-full py-10 flex items-center justify-start lg:justify-center  h-auto gap-4 md:gap-8  px-2  overflow-x-scroll scrollbar-hidden  scroll-smooth`}
    >
      <Button
        category={{
          catId: 666,
          catName: "菜单",
          catLabel: "all",
          icon: <BiRestaurant />,
        }}
        filter={filter}
        setFilter={setFilter}
      />
      {categories.map((category: FoodCat) => {
        category.icon = labelToIcon(category.catLabel);
        return (
          <Button
            key={category.catId}
            category={category}
            filter={filter}
            setFilter={setFilter}
          />
        );
      })}
    </motion.div>
  );
};

export default Filters;
