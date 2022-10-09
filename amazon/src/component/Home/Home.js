import React from 'react';
import {withRouter} from 'react-router-dom'
import SearchFirst from './SearchFirst.js';
// import SearchSecond from './SearchSecond.js';
// import SearchDeal from './SearchDeal';
import Header from '../../Header';
// import ListingDress from '../Listing/ListingDress';
// import SearchBox from './searchBox';
//  import AllFilter from './AllFilter';
 import ImageSlider from './imageslider';




const Home=()=>{
    return(
       <>
      <Header/>
     
      <ImageSlider/>  

      {/* <SearchBox/> */}
   
   <SearchFirst/>
   
 

   </>
   )
    
}
export default withRouter(Home);