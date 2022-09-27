import React,{Component} from 'react';
import axios from 'axios';

const url="https://apilink1.herokuapp.com/filter";

class SubcategoryF extends Component{

    filterSubcategory = (event) => {
        let categoryId = this.props.categoryId;
        let subcategoryId = event.target.value;
        let outUrl;
        if( subcategoryId=== ""){
            outUrl = `${url}/${categoryId}`
            console.log(outUrl)
        }else{
            outUrl= `${url}/${categoryId}?subcategoryId=${subcategoryId}`
            console.log(outUrl)
        }
        axios.get(outUrl)
        .then((res) => {this.props.restPerSubcategory(res.data)})
    }
    render(){
        
        // console.log("iside subcategory",this.filterSubcategory.outUrl)
        return(
            <>
                <center>Subcategory Filter</center>
                
            <div id="subcategory" style={{"marginLeft":'15%',"display":'flex','flexDirection':'column'}} onChange={this.filterSubcategory}>
        <label className="radio">
            <input type="radio" name="subcategory" value=""/>All
        </label>
        <label className="radio">
            <input type="radio" name="subcategory" value="1"/>Printer
        </label>
        <label className="radio">
            <input type="radio" name="subcategory" value="3"/>Monitor
        </label>
        <label className="radio">
            <input type="radio" name="subcategory" value="4"/>Desktop
        </label>

    </div>

        
            </>
        )
    }
}

export default SubcategoryF;