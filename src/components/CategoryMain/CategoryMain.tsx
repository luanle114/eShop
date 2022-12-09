import React, { useState, useEffect } from 'react';
import {IStyledCategoryMain } from "./CategoryMain.style"
import axios from 'axios';

const CategoryMain = () => {
  const [categoryItems, setCategoryItems] = useState([]); // default is empty database or json, no products

  useEffect(() =>{
    const fetchData = async () =>{
      const result = await axios.get('/api/category');
      setCategoryItems(result.data)
    }
    fetchData();
  }, []);

  return (
    <IStyledCategoryMain>
      <div className='cate-container'>
        <div className='cate-row'>
          {categoryItems.map((item: any) =>(
            <div className="cate-col" key={item._id}>
              <img src={item.image} alt=''/>
              <div className='cate-content'>
                <p>{item.title}</p>
                <button className="cate-btn">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </IStyledCategoryMain>
  )
};

export default CategoryMain;