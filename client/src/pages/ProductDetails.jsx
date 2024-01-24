import React from "react";

//useParams hook
import { useParams } from "react-router-dom";
// useFetch hook
import useFetch from "../hooks/useFetch";
// components
import RelatedProducts from "../components/RelatedProducts";
// context
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  // get product data base on the id

  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);

  if (!data) {
    return <div className="container mx-auto ">loading...</div>;
  }

  console.log(data);
  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0 ">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center">
            <img
              src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
              alt=""
              className="w-full max-w-[65%]"
            />
          </div>
          {/* category title */}
          <div>
            {data[0].attributes.categories.data[0].attributes.title} cameras
          </div>
          {/* title  */}
          <h2>{data[0].attributes.title}</h2>
          {/* descripton */}

          <p>{data[0].attributes.description}</p>
          {/* price & btn */}
          <div>
            {/* price */}
            <div>${data[0].attributes.price}</div>
          </div>

          <button className="btn btn-accent">Add to cart</button>
        </div>

        {/* related products */}
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
