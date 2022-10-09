import React from 'react';
// import ReactDOM from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';

import Home from './component/Home/Home';
import ListingDress from './component/Listing/ListingDress'

import Details from './component/details/Details';

import Electronics from './component/Listing/Electronics';
import Kitchen from './component/Listing/Kitchen';
import PlaceOrder from './component/booking/placeOrder';
import ViewOrder from './component/booking/viewOrder';
import Login from './component/login/login';
import Register from './component/login/register';
import AllFilter from './component/Home/AllFilter';
import CompleteProduct from './component/Listing/CompleteProduct';

import {BrowserRouter,Route} from 'react-router-dom';
const Routing=()=>{
    return(
       
        <BrowserRouter>
      
        <div >
        {/* <Header/> */}
        

     <Route exact path="/" component={Home}/>
     <Route exact path="/listing/:categoryId" component={ListingDress}/>
     <Route exact path="/details/:categoryId" component={Details}/>
     <Route exact path="/all/:categoryId" component={AllFilter}/>
     <Route exact path="/listingE/:categoryId" component={Electronics}/>
     <Route exact path="/listing" component={CompleteProduct}/>
     <Route exact path="/listing/:categoryId" component={Kitchen}/>

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