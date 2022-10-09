import React ,{Component} from 'react';
import axios from 'axios';
import './search.css';
import {withRouter} from 'react-router-dom';
const url="https://apilink1.herokuapp.com/category";
const subUrl="https://apilink1.herokuapp.com/subcategory?categoryId="

class Search extends Component{
    constructor(props){
        console.log("inside searchboxfile",props)
        super(props)
            this.state={
                categoryData:'',
                subcategoryData:''
                

            }
    }
    renderCategory=(data)=>{

        if(data){
           
            return data.map((item) => {
                return(
                    <option value={item.category_id} key={item.category_id}>{item.category}</option>
                )
            })
        }

    }
    renderSubcategory=(data)=>{
        if(data){
             console.log(data[0].category_id)
          // sessionStorage.setItem('categoryId',data[0].category_id)
        //    sessionStorage.setItem("subcategoryId",data[0].subcategory_Id)

            return data.map((item) => {
                return(
                    <option value={item.subcategory_id} key={item.subcategory_id}>{item.subcategory}</option>
                    
                )
            })
        }

    }
    handleCategory=(event) => {
        let categoryId = event.target.value;
        
        sessionStorage.setItem('categoryId',event.target.value)
        fetch(`${subUrl}${categoryId}`,{method:'GET'})
        
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({subcategoryData:data})
        })
    }
    // handleRest=(event)=>{this.props.history.push(`/all/${sessionStorage.getItem("categoryId")}?subcategoryId=${event.target.value}`)
      handleRest=(event)=>{
        sessionStorage.setItem('subcategoryId',event.target.value)
        
        this.props.history.push(`/all/${sessionStorage.getItem("categoryId")}?subcategoryId=${event.target.value}`);
    

}


    render(){
        return(
            <>
            <div className="dropdown">
                        <select onChange={this.handleCategory}>
                            <option>----SELECT Category----</option>
                            {this.renderCategory(this.state.categoryData)}
                        </select>
                        <select className="restSelect" onChange={this.handleRest}>
                            <option>----SELECT Subcategory----</option>
                            {this.renderSubcategory(this.state.subcategoryData)}
                        </select>
                    </div>
          
            </>
        )
    }
    async componentDidMount(){
        

        let response = await axios.get(`${url}`);
      
        let responseSub = await axios.get(`${subUrl}/${sessionStorage.getItem("categoryId")}`);
        //console.log(responseSub);

        this.setState({categoryData:response.data,subcategoryData:responseSub.data})
        
    }
}
export default withRouter(Search);