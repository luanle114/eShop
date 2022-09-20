import React, { useEffect, useReducer } from 'react';
import logger from 'use-reducer-logger';
import ProductHome from '../Product/ProductHome';
import './ProductsHome.css';
import axios from 'axios';


const reduce = (state, action) =>{
  switch(action.type){
    case 'FETCH_REQUEST':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, products: action.payload, loading: false};
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

const ProductsHome = () => {
  // const [products, setProducts] = useState([]); // default is empty database or json, no products

  
  const [{loading, error, products}, dispatch] = useReducer(logger(reduce), {
    products: [],
    loading: true,
    error: ''
  });

  useEffect(() =>{
    const fetchData = async () =>{
      dispatch({type: 'FETCH_REQUEST'});
      try {
        const result = await axios.get('/api/products');
        dispatch({type: 'FETCH_SUCCESS', payload: result.data})
      } catch (error) {
        dispatch({type: 'FETCH_FAIL', payload: error.message});
      }
      // setProducts(result.data)
    }
    fetchData();
  }, []);

  return (
    <div className='hpros-container'>
      <h2>Lastest Product</h2>
      <div className="hpros-row">
        { !!loading ? <h1 className='loading'>Loading...</h1> : error ? <h1 className='error'>{error}</h1>: 
          products.slice(-8).map((item) =>(<ProductHome item={item} key={item._id} />
        ))
        }
        {console.log(loading)}
      </div>
    </div>
  )
};

export default ProductsHome;