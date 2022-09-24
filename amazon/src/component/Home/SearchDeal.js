import React,{Component} from 'react';
import './searchdeal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {card} from 'react-bootstrap';

const dUrl="https://apilink1.herokuapp.com/deal";

class SearchDeal extends Component{
    constructor(props){
        // console.log("inside")
        super(props)
        this.state={
            dealData:''
        }
    }
    renderDeal=()=>{
       
        let data=this.state.dealData;
         console.log(data)
        if(data){
            return data.map((item)=>{
                return(

                    // <div className="row row-cols-1 row-cols-md-6 mx-2 my-2" key={item._id}>
                        <div className="col" key={item._id}>
                                        <div className="card">
                                                            <img src={data.image}  className="card-img-top" alt="..."/>
                                                            <div className="card-body">
                                                                <h5 className="card-title">{data.product_name}</h5>
                                                                <p className="card-text">{data.Discount}</p>
                                                            </div>
                                        </div>
                        </div>
                    // </div>
                    
                )
            })
        }

    }
   
render(){
    console.log("inside render")
    return(
        <>
        <div className="deal">
            <div className="dealhead">
                <h5>Deal Of The Day</h5>
            </div>
            <div className="row row-cols-1 row-cols-md-6 mx-2 my-2">
            {this.renderDeal()}
            </div>
           
       
       
        </div>
        </>
    )
}
        

    
   

componentDidMount()
{
    fetch(`${dUrl}`,{method:'GET'})
    .then(res=>res.json())
    .then((data)=>{this.setState({dealData:data})})
}
}
export default SearchDeal;