import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Store } from "../Store";
import "../components/Wish/Wish.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Wish = () => {
  const {state, dispatch: ctxDispatch} = useContext(Store);
  const { wish: {wishItems},} = state;

  const removeItemHandler = (item) => {
    ctxDispatch({
      type: 'WISH_REMOVE_ITEM',
      payload: item,
    });
  };

  return(
    <div>
      <Navbar/>
      <div className="wish-container">
        <div className="wish-row">
          <div className="wish-title">
            My Wish List
          </div>
        </div>
        <div className="wish-row">
          <div className="wish-col">
            {wishItems.length === 0 ? <h3 className="infor">Your Wish List is empty.</h3>:
              <div className="wish-cards">
                {wishItems.map((item) => (
                  <div className="wish-card" key={item._id}>
                    <div className="wish-header">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="wish-body">
                      <Link to={`/product/${item.slug}`}>{item.title}</Link>
                      <span className="wish-quantity">Quantity: 1</span>
                    </div>
                    <div className="wish-footer">
                      <span className="wish-price">{item.price}</span>
                      <button onClick={() => removeItemHandler(item)}><FontAwesomeIcon icon={faTrashAlt}/></button>
                    </div>
                  </div>
                ))}
              </div>
            }
          </div>
          <div className="wish-col">
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Wish;