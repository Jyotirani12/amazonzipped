import React from 'react';
// import ReactDOM from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';
import SearchFirst from './SearchFirst';
import Home from './component/Home/Home';
import ListingDress from './component/Listing/ListingDress'
// import SearchFirst from './component/Home/SearchFirst';
import Details from './component/details/Details';
// import DetailFirst from './component/details/DetailFirst';
import Electronics from './component/Listing/Electronics';


import {BrowserRouter,Route} from 'react-router-dom';
const Routing=()=>{
    return(
       
        <BrowserRouter>
      
        <div >
        <Header/>
        

     <Route exact path="/" component={Home}/>
     <Route exact path="/listing/:categoryId" component={ListingDress}/>
     <Route exact path="/details/:categoryId" component={Details}/>
     <Route exact path="/listingE/:categoryId" component={Electronics}/>
    
        <Footer/>
        </div>
        </BrowserRouter>
        
     
       
    )
}
export default Routing;