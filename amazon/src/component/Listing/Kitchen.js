import React,{Component} from 'react';
import './electronics.css';
import {Link} from 'react-router-dom';


import CostFilterK from '../filter/CostFilterK';
import BrandFilterK from '../filter/BrandFilterK';
import Header from '../../Header';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-grid.css';
 const url="https://apilink1.herokuapp.com/product/";
 
 class Kitchen extends Component{

    constructor(props){
      
        super(props)
        this.state={
            listingData:'',
            categoryId:this.props.match.params.categoryId
                      
        }
    }
    
    renderItem=()=>{
     
        let listingData=this.state.listingData;
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
   
    setDataPerFilter=(data)=>{
        this.setState({ listingData:data})
    }
    componentDidMount(){

      let categoryId=this.props.match.params.categoryId;
      sessionStorage.setItem('categoryId',categoryId)
      fetch(`${url}${categoryId}`,{method:'GET'})
      .then(res=>res.json())
      .then((data)=>{this.setState({listingData:data})})
     
  }
      
    render(){
    //  console.log(this.state.listingData);
                    return(
                    <>
                    <Header/>
                    <div id="listing">
                      <div id="filter">
                        <center> <h5>Filters</h5></center>
                       
                    <CostFilterK categoryId={this.props.match.params.categoryId} 
                      restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                    </div>
                    <hr/>
                    <div>
                    <BrandFilterK categoryId={this.props.match.params.categoryId} 
                      restPerBrand={(data) => {this.setDataPerFilter(data)}}/>
                    </div>

                    
                   
                      </div>
                        <div id="filterItem">
                        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 mg-1 mt-2">
                       
                          
                                {this.renderItem()}   
                             
                            </div>
                             
                        </div>
                    
                     </>
    
                    )
                }
            
 }
 export default Kitchen;
