import React from "react";
import Hero from "../components/Hero.jsx";

// usefetch hook


import LatestProducts from "../components/LatestProducts.js";

const Home = () => {
  // console.log(data);

  return (
   <section>
    <Hero/>
    <LatestProducts/>
   </section>
  );
};

export default Home;
