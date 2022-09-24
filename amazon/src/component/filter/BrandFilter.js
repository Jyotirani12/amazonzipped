import React,{Component} from 'react';
import axios from 'axios';

const url="https://apilink1.herokuapp.com/filter";

class BrandFilter extends Component{

    filterSubcategory = (event) => {
        let categoryId = this.props.categoryId;
        let BrandId = event.target.value;
        let outUrl;
        if(  BrandId=== ""){
            outUrl = `${url}/${categoryId}`
        }else{
            outUrl= `${url}/${categoryId}?BrandId=${BrandId}`
        }
        axios.get(outUrl)
        .then((res) => {this.props.restPerSubcategory(res.data)})
    }
    render(){
        
        // console.log("iside subcategory",this.filterSubcategory.outUrl)
        return(
            <>
                <center>Subcategory Filter</center>
                
            <div id="BrandCategory" style={{"marginLeft":'15%',"display":'flex'}} onChange={this.filterSubcategory}>
        <label className="radio">
            <input type="radio" name="subcategory" value=""/>All
        </label>
        <label className="radio">
            <input type="radio" name="subcategory" value="3"/>HP
        </label>
        <label className="radio">
            <input type="radio" name="subcategory" value="4"/>ASUS
        </label>
        <label className="radio">
            <input type="radio" name="subcategory" value="7"/>Acer
        </label>
        <label className="radio">
            <input type="radio" name="subcategory" value="5"/>Epson
        </label>
        <label className="radio">
            <input type="radio" name="subcategory" value="8"/>Apple
        </label>

    </div>

        
            </>
        )
    }
}

export default BrandFilter;