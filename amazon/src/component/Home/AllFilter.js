import React ,{Component} from 'react';
import axios from 'axios';
import './allfilter.css';
import Header from '../../Header';

import {Link} from 'react-router-dom';
const url="https://apilink1.herokuapp.com/filter";
class AllFilter extends Component{
    constructor(props){
        super(props)
        this.state={
            allData:''

        }
    }
    
    renderData=(data)=>{
        console.log(this.state.allData)
        if(data){
            if(data.length){
                return data.map((item,i) => {
                    console.log(data.Image)
                       return(
                        <Link to={`/details/${this.state.categoryId}?productId=${item.product_id}`} key={i}>
                        {/* <div key={i}> */}
                            {/* <img src={data.Image} alt="allimage"/>
        <h1>{data.product_name}</h1> */}
        <div className="col">
              <div className="card">
                <img src={item.Image} className="card-img-top imageset" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{item.product_name}</h5>
                  <p className="card-text">{item.Brand[0].brand_name}</p>
                  <p className="card-text">{item.Price}</p>
                  {/* </div> */}
              
              </div>
        
                        </div>
                        </div>
                        </Link>

                         //  <option value={item.subcategory_id} key={item.subcategory_id}>{item.subcategory}</option>
                           
                       )
                   })

            }
            
          
       }


    }
    render(){
        return(
            <>
            <Header/>
            
            <div className="row row-cols-1 row-cols-md-4  row-cols-lg-4 g-4 mt-2" style={{width:'80%',marginLeft:'10%'}} >
                {this.renderData(this.state.allData)}
            </div>
            </>
        )
}
async componentDidMount(){
    console.log("categoryid",sessionStorage.getItem('categoryId'))

    let response = await axios.get(`${url}/${sessionStorage.getItem('categoryId')}?subcategoryId=${sessionStorage.getItem('subcategoryId')}`)
  
    console.log("inside all",response);

    this.setState({allData:response.data})
    
}
}
export default AllFilter;