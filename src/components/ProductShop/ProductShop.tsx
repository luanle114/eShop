import React, { useContext } from 'react';
import { faHeart, faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IStyledProductShop } from './ProductShop.style';
import { Link } from 'react-router-dom';
import { Store } from '../../Store';
import axios from 'axios';

const ProductShop = ({item}: any) => {
  const {state, dispatch: ctxDispatch} = useContext(Store);
  const {cart, wish} = state
  const addToCartHandler = async () =>{
    const exstItem = cart.cartItems.find((x: any) => x._id === item._id);
    const quantity = exstItem ? exstItem.quantity + 1 : 1; //if existItem => quantity + 1 in cart

    const { data } = await axios.get(`/api/products/slug/${item.slug}`);
    if(data.countInStock < quantity){
      window.alert('Sorry. Product is out of stock!');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: {...item, quantity},
    })
  };

  const addToWishHandler = async () =>{
    const exstItem = wish.wishItems.find((x: any) => x._id === item._id);
    const quantity = exstItem ? exstItem.quantity : 1;
    if(exstItem){
      window.alert('Sorry. You have already added the product to your wish list');
      return;
    }
    ctxDispatch({
      type: 'WISH_ADD_ITEM',
      payload: {...item, quantity},
    })
  };

  return (
    <IStyledProductShop>
      <div className='proshop-card'>
        <div className="card-header">
          <Link to={`/product/${item.slug}`}>
            <img src={item.image} alt={item.title} />
          </Link>
        </div>
        <div className="card-body">
          <h3 className="title">{item.title}</h3>
          <span>${item.price}</span>
        </div>
        <div className="card-footer">
          <button><FontAwesomeIcon icon={faHeart} onClick={addToWishHandler}/></button>
          {item.countInStock === 0 ? 
            (<button className='cart cart-out' disabled>Out of stock</button>
            ) : ( 
            <button><FontAwesomeIcon icon={faShoppingBag} onClick={addToCartHandler}/></button>)
          }
        </div>
      </div>
    </IStyledProductShop>
  )
};

export default ProductShop;