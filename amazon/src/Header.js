import React,{Component} from 'react';
import './header.css';
class Header extends Component{
   render()
   {
    return(
      <header>
      <nav>
        <div class="deflex">
            {/* <a href="#"><img src="images/images.png" alt="logo" class="logo" width="60"
                height="60" />
            </a> */}
            <a href="#"><img src="https://i.ibb.co/f0f0FsJ/images.png" alt="images" class="logo" width="60"
                height="60" border="0"/></a>
            <div class="item">
                <p><i class="fa fa-map-marker me"></i>Deliver To</p>
                <h5>Enter Your Address</h5>
              
            </div>

        </div>
        {/* <!-- //search box div --> */}
        <div class="searchBox deflex">
            <button type="submit" class="all">All<i class="fa fa-sort-desc"></i>

                
             

            </button>
            <input type="text"/>
            <button type="submit" class="search"><i class="fa fa-search"></i>

            </button>

        </div>
        <div class="right deflex">
          <div class="item">
            <i class="fa fa-flag"></i><i class="fa fa-sort-desc"></i>
          </div>
          <div class="item">
            <p>Hello,Sign In</p>
            <h5>Account & Lists<i class="fa fa-sort-desc"></i></h5>
          </div>
          <div class="item">
            <p>Returns</p>
            <h5>& Orders</h5>
          </div>
          <div class="item">
            <h3><i class="fa fa-shopping-cart fa-2x"></i>Cart</h3>
            
          </div>
        </div>
    </nav>
    <nav>

    </nav>
    </header>
  
    )
  }
}

    
export default Header;