import React, { Component } from 'react';
import './details.css';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// const url="https://apidrop1.herokuapp.com/product/1";
 const url = "https://apidrop1.herokuapp.com/details/"
class Details extends Component {
    constructor(props) {
        console.log("inside constructor detail");
        super(props)
        this.state = {
            dressdetails:'',
            categoryId: sessionStorage.getItem('categoryId')


        }
    }


    componentDidMount() {

        console.log("inside compo detail");

        let productId = this.props.location.search.split("=")[1]
        fetch(`${url}${this.state.categoryId}?productId=${productId}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => { console.log(data[0]); this.setState({ dressdetails: data[0] }) })

    }
    render(){
        let {dressdetails}=this.state;
        return (
            <>
             <div id="mainContent">
             <div className="imgDiv">
                <img src={dressdetails.Image} alt=" "/>
            </div>
            <div className="contentDiv">
                <h2>{dressdetails.product_name}</h2>
                <span>231 Customers Say {dressdetails.rating_text} </span>
                <h3><del>Old Price: Rs.1000</del></h3>
                <h3>New Price: Rs.{dressdetails.price}</h3>
                <h3>{dressdetails.description}</h3>
            </div>
            <div>
            {/* <Tabs>
                    <TabList>
                        <Tab>About Us</Tab>
                        <Tab>Contact</Tab>
                    </TabList>
                    <TabPanel>
                        <h2>{dressdetails.product_name}</h2>
                        <p>{dressdetails.product_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <h2>{dressdetails.address}</h2>
                        <h3>Phone: {dressdetails.contact_number}</h3>
                    </TabPanel>
                  
                </Tabs> */}
                </div>
             </div>
             
            </>
        )
            }

    }
        
       
                
             
    

    

export default Details;