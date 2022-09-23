import React, { useEffect, useState } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './ProductsShop.css';
import ProductShop from '../ProductShop/ProductShop.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPaginate from 'react-paginate';


const ProductsShop = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  //filter all products
  const fillterResult = (catItem) => {
    const result = data.filter((curDate) => {
      return curDate.category === catItem;
    });
    setData(result);
  };
  // show all category
  useEffect(() => {
    const fetchData = async () =>{
      const result = await axios.get('/api/category');
      setCategory(result.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () =>{
      const result = await axios.get('/api/products');
      setData(result.data);
    };
    fetchData();
  }, []);

  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 4;
  const pagesVisited = pageNumber * productPerPage;
  const displayProducts = data.slice(pagesVisited, pagesVisited + productPerPage).map((item) =>(
    <ProductShop item={item} key={item._id}/>
  ));
  const pageCount = Math.ceil(data.length / productPerPage);
  const changePage = ({selected}) =>{
    setPageNumber(selected);
  };

  return (
    <div className='prosShop-container'>
      <div className='prosShop-row'>
        <div className="prosShop-col">
          <h2>Category</h2>
          <button className='prosShop-button' onClick={() => setData(data)}> All <FontAwesomeIcon icon={faChevronRight}/></button>
          {/* Show all category if exists*/}
          {category.map((item) => (
            <button className='prosShop-btn' onClick={() => fillterResult(item.title)}>{item.title} <FontAwesomeIcon icon={faChevronRight}/></button>
          ))}
        </div>
        <div className="prosShop-col">
          <div className="prosShop-products">
            {/* Show product card */}
            {displayProducts}
          </div>
          <div className="prosShop-pagination">
            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">>"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductsShop;