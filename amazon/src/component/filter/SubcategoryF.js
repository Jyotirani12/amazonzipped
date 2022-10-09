import React,{Component} from 'react';
import axios from 'axios';

const url="https://apilink1.herokuapp.com/filter";

class SubcategoryF extends Component{

    filterSubcategory = (event) => {
        let categoryId = this.props.categoryId;
        let subcategoryId = event.target.value;
        sessionStorage.setItem('subcategoryId',subcategoryId);

        let outUrl;
        if(!sessionStorage.getItem('lcost')&&sessionStorage.getItem('hcost')&& sessionStorage.getItem('BrandId'))
        {
            if( subcategoryId=== ""){
                outUrl = `${url}/${categoryId}`
                console.log(outUrl)
                axios.get(outUrl)
                .then((res) => {this.props.restPerSubcategory(res.data)})

            }else{
                outUrl= `${url}/${categoryId}?subcategoryId=${subcategoryId}`
                console.log(outUrl)
                axios.get(outUrl)
                .then((res) => {this.props.restPerSubcategory(res.data)})
            }
           

        }
        else{
            if( subcategoryId=== ""){
                outUrl = `${url}/${categoryId}`
                console.log(outUrl)
                axios.get(outUrl)
                .then((res) => {this.props.restPerSubcategory(res.data)})
            }else if(sessionStorage.getItem('lcost')&&sessionStorage.getItem('hcost')){
                outUrl= `${url}/${categoryId}?subcategoryId=${subcategoryId}&lcost=${sessionStorage.getItem('lcost')}&hcost=${sessionStorage.getItem('lcost')}`
                axios.get(outUrl)
            .then((res) => {this.props.restPerSubcategory(res.data)})
            }
            else if(sessionStorage.getItem('BrandId')){
                outUrl= `${url}/${categoryId}?subcategoryId=${subcategoryId}&lcost=${sessionStorage.getItem('lcost')}&hcost=${sessionStorage.getItem('lcost')}&BrandId=${sessionStorage.getItem('BrandId')}`
                axios.get(outUrl)
                .then((res) => {this.props.restPerSubcategory(res.data)})

            }
           

        }
        
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