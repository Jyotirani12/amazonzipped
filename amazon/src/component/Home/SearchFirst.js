import React,{Component} from 'react';
import './searchfirst.css';
import {Link} from 'react-router-dom';
class SearchFirst extends Component{
    
render()
{ 
    return (
   
       <>
       <div id="categories">
            <div id="cat1">
                <div id="cat11">
                    <h5 style={{textAlign:"center"}}>Electronics Items</h5>
                </div>
                <div id="cat12">

                    <img src="https://i.ibb.co/ypNW2Fq/1.jpg" alt="" className="cat1Img" />
                    <p className="cat1P">Headsets</p>
                </div>
                <div id="cat13">
                    <img src="https://i.ibb.co/jv082Vt/2.jpg" alt="" className="cat1Img" />
                    <p className="cat1P">Keyboard</p>
                </div>
                <div id="cat14">
                    <img src="https://i.ibb.co/gMhk2KG/3.jpg" alt="" className="cat1Img" />
                    <p className="cat1P">Computer Mouse</p>
                </div>
                <div id="cat15">
                    <img src="https://i.ibb.co/Pgr5vVg/4.jpg" alt="" className="cat1Img" />
                    <p className="cat1P">Chairs</p>
                </div>
                <div id="cat16">
                <Link to="/listingE/2">See More</Link>
                </div>

            </div>
            {/* <!--shop by category section--> */}
            <div id="cat2">
            <div id="cat11">
                <h5 style={{textAlign:'center'}}>Home & Kitchen Items</h5>
            </div>
            <div id="cat12">

                <a href="#"><img src="https://i.ibb.co/vHmgvnb/kitchen1.jpg" alt=" " className="cat1Img" /></a>
                <p className="cat1P">Table Runner</p>
            </div>
            <div id="cat13">
                <img src="https://i.ibb.co/Qc7h0Gz/kitchen4.jpg" alt=" " className="cat1Img" />
                <p className="cat1P">Table Runner</p>
            </div>
            <div id="cat14">
                <img src="https://i.ibb.co/G3NdWrB/Kithen-2.jpg"  alt=" " className="cat1Img" />
                <p className="cat1P">Dish Cover</p>
            </div>
            <div id="cat15">
                <img src="https://i.ibb.co/v4Wjvmq/k35.jpg" alt="" className="cat1Img" />
                <p className="cat1P">Coffee mMaker</p>
            </div>
            <div id="cat16">
            <Link to="/listing/3">See More</Link>
                
            </div>
        </div>
        <div id="cat3">
            <div id="cat31">
                <h5 style={{textAlign:'center'}}>Dresses</h5>
            </div>
            <div id="cat32">

                <img src="https://i.ibb.co/gyVXwBC/9.jpg" alt="9" border="0" className="cat1Img" /> 
              <Link to="/listing/1">See More</Link>
            </div>

        </div>
        <div id="cat4">
            <div id="cat11">
                <h5 style={{textAlign:'center'}}>Deals On Top Brands</h5>
            </div>
            <div id="cat12">

                <img src="https://i.ibb.co/4J4kG1T/10.jpg" alt="10" className="cat1Img" />

            </div>
            <div id="cat13">
                <img src="https://i.ibb.co/z4qHDXW/11.jpg" alt="11" className="cat1Img" />

            </div>
            <div id="cat14">
                <img src="https://i.ibb.co/DCjPGSV/12.jpg" alt="12" className="cat1Img" />

            </div>
            <div id="cat15">
              <img src="https://i.ibb.co/9vB2Y8K/13.jpg" alt="13" border="0" className="cat1Img"/>

            </div>
            <div id="cat16">
                <Link to="/listing/2">See More</Link>
            </div>
        </div>
            
    </div>
  </>

    )


}
}
   


export default SearchFirst;