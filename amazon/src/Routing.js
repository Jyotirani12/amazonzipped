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
import PlaceOrder from './component/booking/placeOrder';
import ViewOrder from './component/booking/viewOrder';
import Login from './component/login/login';
import Register from './component/login/register'

import {BrowserRouter,Route} from 'react-router-dom';
const Routing=()=>{
    return(
       
        <BrowserRouter>
      
        <div >
        {/* <Header/> */}
        

     <Route exact path="/" component={Home}/>
     <Route exact path="/listing/:categoryId" component={ListingDress}/>
     <Route exact path="/details/:categoryId" component={Details}/>
     <Route exact path="/listingE/:categoryId" component={Electronics}/>
     <Route exact path="/placeOrder/:productName" component={PlaceOrder}/>
     <Route exact path="/viewBooking" component={ViewOrder}/>
     <Route exact path="/register" component={Register}/>
     <Route exact path="/login" component={Login}/>


     
    
        <Footer/>
        </div>
        </BrowserRouter>
        
     
       
    )
}
export default Routing;