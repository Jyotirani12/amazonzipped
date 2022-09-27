import React ,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './OrderDisplay';
import Header from '../../Header';
const oUrl="https://apilink1.herokuapp.com/order";
class ViewOrder extends Component{
    constructor(props){
        super(props)
        this.state={
        order:''
        }
    }
    render(){
        console.log("insoide render",this.state.order);
        console.log(this.state.order);
        
            return(
                <>
              <Header/>
            <OrderDisplay orderData={this.state.order}/> 
                </>
            )
        
       
      
    }
    componentDidMount(){
        if(this.props.location){
            let query=this.props.location.search.split('&');
            if(query){
                let data={
                    "status":query[0].split('=')[1],
                    "date":query[2].split('=')[1],
                    "bank_name":query[3].split('=')[1]
                }
                let id=query[1].split('=')[1].split('_')[1];
                fetch(`${oUrl}/${id}`,{
                    method:'PATCH',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                    })
                }
            }
        
        let email = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:''
        console.log(email)
        axios.get(`${oUrl}?email=${email}`).then((res) => {this.setState({order:res.data})})

    }
}
export default ViewOrder;
