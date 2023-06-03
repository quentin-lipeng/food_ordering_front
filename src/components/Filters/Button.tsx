import { motion } from "framer-motion";
import { MdOutlineFastfood } from "react-icons/md";
import { FoodCat } from "../../../types";
const Button = ({
  category,
  filter,
  setFilter,
}: {
  category: FoodCat;
  filter: string;
  setFilter: any;
}) => {
  return (
    <motion.div
      onClick={() => setFilter(category.catLabel)}
      //   whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      className={`group ${
        category.catLabel === filter
          ? "hover:bg-btnOverlay bg-cartNumBg"
          : "bg-btnOverlay hover:bg-cartNumBg"
      } w-24 min-w-[6rem] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all  ease-out`}
    >
      <div
        className={`w-10 h-10 rounded-full ${
          category.catLabel === filter
            ? "group-hover:bg-cartNumBg bg-btnOverlay"
            : "bg-cartNumBg group-hover:bg-btnOverlay"
        }  flex items-center justify-center`}
      >
        <span
          className={`${
            category.catLabel === filter
              ? "text-textColor group-hover:text-btnOverlay"
              : "group-hover:text-textColor text-btnOverlay"
          } text-lg`}
        >
          {category.icon || <MdOutlineFastfood />}
        </span>
      </div>
      <p
        className={`text-base ${
          category.catLabel === filter
            ? "group-hover:text-textColor text-white"
            : "text-textColor group-hover:text-white"
        } `}
      >
        {category.catName}
      </p>
    </motion.div>
  );
};

export default Button;
