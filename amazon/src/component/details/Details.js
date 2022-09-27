import React, { Component } from 'react';
import './details.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
//import {Link} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuDisplay from './menuList';
import Header from '../../Header';
// const url="https://apidrop1.herokuapp.com/product/1";
 const url = "https://apilink1.herokuapp.com/details"

class Details extends Component {
    constructor(props) {
        console.log("inside constructor detail",props);
        super(props)
        this.state = {
            dressdetails:'',
            categoryId: sessionStorage.getItem('categoryId'),
            userItem:'',
            menuList:'',



        }
    }

    async componentDidMount(){
        let productId = this.props.location.search.split('=')[1];
    // console.log(productId)
     //console.log(this.state.categoryId)
        let response = await axios.get(`${url}/${this.state.categoryId}?productId=${productId}`)
        // let response=await axios.get('${url}')
        //console.log(response)
        let menudata = await axios.get(`${url}/${this.state.categoryId}`)
       // console.log(menudata)
        this.setState({dressdetails:response.data[0],menuList:menudata.data})
    }
    proceed=()=>{
        sessionStorage.setItem('menu',this.state.userItem);
         this.props.history.push(`/placeOrder/${this.state.dressdetails.product_name}`)
    }
    addToCart = (data) => {
        this.setState({userItem:data})
    }
    render(){
        console.log(this.state.dressdetails)
        let {dressdetails}=this.state;
        console.log(dressdetails)
        return (
            <>
            <Header/>
             <div id="mainContent">
             <div className="imgDiv">
                <img src={dressdetails.Image} alt="image"/>
            </div>
            <div className="contentDiv">
                <h2>{dressdetails.product_name}</h2>
                <span>231 Customers Say {dressdetails.rating_text} </span>
                <h2>Rating:4.3 8.1k</h2>
                <h3>Discount:{dressdetails.Discount} %</h3>
                <h3>New Price: Rs.{dressdetails.Price}</h3>
                <h5>inclusive of all taxes</h5>
                <h3>{dressdetails.description}</h3>
                <div>
                            <Link to={`/listing/${this.state.categoryId}`} className="btn btn-danger">Back</Link> &nbsp;
                            <button className="btn btn-success" onClick={this.proceed}>Add To Cart</button>
                        </div>
           
            <Tabs>
                            <TabList>
                                <Tab>About Us</Tab>
                                <Tab>Contact</Tab>
                            </TabList>
                            <TabPanel>
                                <h2>{dressdetails.Description}</h2>
                                <p>{dressdetails.Description} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
        </p>
                            </TabPanel>
                            <TabPanel>
                                <h2>{dressdetails.Description}</h2>
                                <h3>Phone: {dressdetails.Description}</h3>
                            </TabPanel>
                           
                        </Tabs>
                        <div className="col-md-12">
                    <MenuDisplay menudata={this.state.menuList}
                    finalOrder={(data)=>{this.addToCart(data)}}/>
                </div>
                </div>
             </div>
             
             
             
            </>
        )
            }

    }
        
       
                
             
    

    

export default Details;