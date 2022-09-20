import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import '../components/Shop/Shop.css'
import Footer from '../components/Footer/Footer';
import ProductsShop from '../components/ProductsShop/ProductsShop';

const Shop = () => {
  return(
    <div>
      <Navbar/>
      <div className="shop-row">
        <div className="shop-col">
          <ProductsShop/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Shop;