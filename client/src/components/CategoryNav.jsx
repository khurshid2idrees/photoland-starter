import React from "react";
// useFetch hook

import useFetch from "../hooks/useFetch";
// link

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CategoryNav = () => {
  const { data } = useFetch("/categories");

  

  return (
    <aside className="hidden xl:flex">
      <div className="bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden ">
        <div className="bg-accent py-4 text-primary uppercase font-semibold items-center justify-center text-center">
          Browse Categories
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {data?.map((category) => {
            // console.log(category);
            return (
              <Link
                to={`/products/${category.id}`}
                className="cursor-pointer uppercase"
                key={category.id}
                replace 
              >
                {category.attributes.title} cameras
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
