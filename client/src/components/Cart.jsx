import React, { useContext } from "react";
// icons

import { IoClose } from "react-icons/io5";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { setIsOpen } = useContext(CartContext);
  return (
    <div className="w-full h-full px-4 text-white ">
      <div>
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="text-4xl w-20 h-[98px] flex  justify-start items-center cursor-pointer"
        >
          <IoClose />
        </div>
      </div>
    </div>
  );
};

export default Cart;
