import React,{Component} from 'react';
import {Link} from 'react';

class SearchFirst extends Component{
    constructor(){
        super()
        this.state={
            category:''
                }

    }
render()
{ 
    return (
   
          
    <div id="categories">
        <div id="cat1">
            <div id="cat11">
                <h5 style="text-align:center">Gaming Accessories</h5>
            </div>
            <div id="cat12">

                <img src="images/1.jpg" alt="" class="cat1Img" />
                <p class="cat1P">Headsets</p>
            </div>
            <div id="cat13">
                <img src="images/2.jpg" alt="" class="cat1Img" />
                <p class="cat1P">Keyboard</p>
            </div>
            <div id="cat14">
                <img src="images/3.jpg" alt="" class="cat1Img" />
                <p class="cat1P">Computer Mouse</p>
            </div>
            <div id="cat15">
                <img src="images/4.jpg" alt="" class="cat1Img" />
                <p class="cat1P">Chairs</p>
            </div>
            <div id="cat16">
                <p class="cat1P"><a href="/listing.html" target="_blank">See More</a></p>
            </div>

        </div>
        {/* <!--shop by category section--> */}
        <div id="cat2">
            <div id="cat11">
                <h5 style="text-align:center">Shop By Categories</h5>
            </div>
            <div id="cat12">

                <a href="#"><img src=" images/5.jpg" alt="" class="cat1Img" /></a>
            <p class="cat1P">Computer & Accessories</p>
        </div>
        <div id="cat13">
            <img src="images/6.jpg" alt="" class="cat1Img" />
            <p class="cat1P">Video Games</p>
        </div>
        <div id="cat14">
            <img src="images/7.jpg" alt="" class="cat1Img" />
            <p class="cat1P">Baby</p>
        </div>
        <div id="cat15">
            <img src="images/8.jpg" alt="" class="cat1Img" />
            <p class="cat1P">Toys</p>
        </div>
        <div id="cat16">
            <p class="cat1P"><a href="/listing.html" target="_blank">See More</a></p>
        </div>
    </div>
    <div id="cat3">
        <div id="cat31">
            <h5 style="text-align:center">Dresses</h5>
        </div>
        <div id="cat32">

            <img src="images/9.jpg" alt="" class="cat12Img" />
            <p class="cat12P"><a href="/listing.html" target="_blank">See More</a></p>
        </div>

    </div>
        <div id="cat4">
        <div id="cat11">
            <h5 style="text-align:center">Deals On Top Brands</h5>
        </div>
        <div id="cat12">

            <img src="images/10.jpg" alt="" class="cat1Img" />

        </div>
        <div id="cat13">
            <img src="images/11.jpg" alt="" class="cat1Img" />

        </div>
        <div id="cat14">
            <img src="images/12.jpg" alt="" class="cat1Img" />

        </div>
        <div id="cat15">
            <img src="images/13.jpg" alt="" class="cat1Img" />

        </div>
        <div id="cat16">
            <p class="cat1P"><Link to='/listing/3'>See More</Link></p>
        </div>
    </div>
    </div>
  

    )


}
}
   


export default SearchFirst;