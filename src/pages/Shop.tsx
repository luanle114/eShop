import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { IStyledShop } from '../components/Shop/Shop.style'
import Footer from '../components/Footer/Footer';
import ProductsShop from '../components/ProductsShop/ProductsShop';

const Shop = () => {
  return(
    <div>
      <Navbar/>
      <IStyledShop>
        <div className="shop-row">
          <div className="shop-col">
            <ProductsShop/>
          </div>
        </div>
      </IStyledShop>
      <Footer/>
    </div>
  )
}

export default Shop;