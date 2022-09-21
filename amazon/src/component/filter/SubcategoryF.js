import React,{Component} from 'react';
import axios from 'axios';

const outUrl="https://apidrop1.herokuapp.com/detailSubcategory/";

class SubcategoryF extends Component{

    filterSubcategory = (event) => {
        let categoryId = this.props.categoryId;
        let subcategoryId = event.target.value;
        let outUrl;
        if( subcategoryId=== ""){
            outUrl = `${outUrl}/${categoryId}`
        }else{
            outUrl= `${outUrl}/${categoryId}?subcategoryId=${subcategoryId}`
        }
        axios.get(outUrl)
        .then((res) => {this.props.restPerSubcategory(res.data)})
    }
    render(){
        console.log("iside subcategory",outUrl)
        return(
            <>
                <center>Subcategory Filter</center>
                
            <div id="subcategory" style={{marginLeft:'15%',display:'block'}} onChange={this.filterSubcategory}>
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