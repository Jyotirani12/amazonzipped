import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './completeProduct.css';
import Header from '../../Header';
const url="https://apilink1.herokuapp.com/product";
class CompleteProduct extends Component{
    constructor(props){
        super(props)
        
            this.state={
                allData:'',
                categoryId:sessionStorage.getItem('categoryId')
            }
        
    }
    componentDidMount(){
        
       
        fetch(`${url}`,{method:'GET'})
        .then(res=>res.json())
        .then((data)=>{this.setState({allData:data})})
       
    }
    renderItem=()=>{
       console.log("inside all product page",this.state.categoryId)
           let listingData=this.state.allData;
           if(listingData){
          
               return listingData.map((item,i)=>{
                       return(            
                       
                       <Link to={`/details/${this.state.categoryId}?productId=${item.product_id}`} key={i}>
                        
               
                 <div className="col">
                 <div className="card mg-1 mt-2">
                   <img src={item.Image} className="card-img-top" alt="..."/>
                   <div className="card-body">
                     <h5 className="card-title">{item.product_name}</h5>
                   
                     <p className="card-text">{item.Brand[0].brand_id}</p>
                     <p className="card-text">{item.Brand[0].brand_name}</p>
   
                     <p>Price: Rs.{item.Price}</p>
                     </div>
                 </div>
                 </div>
                 </Link>
              
                       )
                       
                   }
                   )
               
               }
       }

    render(){
        return(
            <>
                <Header/>
                <div id="dataItem">

               
            <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4 mg-1">
                       
                          
                       {this.renderItem()}   
                    
                   </div>
                   </div>
            <h1>all product</h1>
            </>

        
        )
       
    }
}

export default CompleteProduct;