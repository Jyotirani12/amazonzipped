import React from 'react';
import SubcategoryF from './SubcategoryF';
import CostFilter from './CostFilter';
import BrandFilter  from './BrandFilter';



function AllFilter () {
  return (
    <div>
       <>
       <SubcategoryF/>
       <CostFilter/>
       <BrandFilter/>
       </> 
    </div>
  )
}

export default AllFilter;
