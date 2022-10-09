import React, { Component } from 'react';
import axios from 'axios';

const url = "https://apilink1.herokuapp.com/filter";

class BrandFilterDress extends Component {

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
                            <input type="radio" name="subcategory" value="16" />Libas
                        </label>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="12" />AAYU
                        </label>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="14" />Purshottam Wala
                        </label>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="15" />Sheetal Associates
                        </label>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="1" />Gucci
                        </label>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="2" />Westside
                        </label>


                    </div>


                </>
            )

        }
    }
       
        


    


export default BrandFilterDress;