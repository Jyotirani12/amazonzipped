import React, { Component } from 'react';
import axios from 'axios';

const url = "https://apilink1.herokuapp.com/filter";

class BrandFilterK extends Component {

    filterSubcategory = (event) => {
        let categoryId = this.props.categoryId;
        let BrandId = event.target.value;
        let outUrl;
        if (BrandId === "") {
            outUrl = `${url}/${categoryId}`
            console.log(outUrl)
        } else {
            outUrl = `${url}/${categoryId}?BrandId=${BrandId}`
            console.log(outUrl)
        }
        axios.get(outUrl)
            .then((res) => { this.props.restPerBrand(res.data) })
    }
    render() {
       // let categoryId = this.props.categoryId;
       // if (categoryId === 2) {
            return (
                <>
                    <center>Brand </center>

                    <div id="subcategory" style={{ "marginLeft":'15%', "display":'flex','flexDirection':'column' }} onChange={this.filterSubcategory}>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="" />All
                        </label>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="17" />Joseph Joseph
                        </label>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="18" />Elementry
                        </label>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="11" />Home Centre
                        </label>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="10" />Fabindia
                        </label>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="9" />SEJ by Nisha Gupta
                        </label>
                        


                    </div>


                </>
            )

        }
    }
       
        


    


export default BrandFilterK;