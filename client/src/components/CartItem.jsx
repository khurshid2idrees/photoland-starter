import React from "react";
// link
import { Link } from "react-router-dom";
// icons
import { IoClose } from "react-icons/io5";
// components

import Qty from "../components/Qty";

const CartItem = ({ item }) => {
  return (
    <div className="flex gap-x-8">
      <Link to={`product/${item.id}`} className="w-[70px]">
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          alt=""
        />
      </Link>
      <div className="flex-1">
        {/* title & remove icon */}
        <div className="flex gap-x-4 mb-3 bg-pink-50/10">
          <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
          <div className="cursor-pointer text-[24px] hover:text-accent transition-all">
            <IoClose />
          </div>
        </div>
        <div className="bg-yellow-200/20 flex items-center gap-x-12">
          {/* quantity */}
          <div className="flex gap-x-4 mb-2 ">
            <div>
              <Qty item={item} />
            </div>
            <div>$ {item.attributes.price * item.amount}</div>
          </div>
        </div>
        {/* price */}
        <div className="">
          <span className="text-accent">
            $ {item.attributes.price} per piece
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
