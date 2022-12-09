import React from "react";
import Banner from "../components/Banner/Banner";
import CategoryMain from "../components/CategoryMain/CategoryMain";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import ProductsHome from "../components/Products/ProductsHome";
import Slider from "../components/Slider/Slider";


const Home = () =>{
  return(
    <div>
      <Navbar/>
      <Slider/>
      <Banner/>
      <CategoryMain/>
      <ProductsHome/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
export default Home;