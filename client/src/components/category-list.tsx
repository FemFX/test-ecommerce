import { Category } from "@/types/category.type";
import Link from "next/link";

const CategoryList = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="mb-10">
      <div className="mb-2">Categories:</div>
      <div className="grid grid-cols-5 gap-3">
        {categories.map((category) => (
          <Link
            href={`/category/${category.id}`}
            key={category.id}
            className="bg-neutral-300 p-3 rounded flex"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
