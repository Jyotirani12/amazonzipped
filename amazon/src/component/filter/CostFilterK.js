import React,{Component} from 'react';
import axios from 'axios';

const url = "https://apilink1.herokuapp.com/filter";

class CostFilterK extends Component{

    filterData = (event) => {
        let categoryId = this.props.categoryId;
        let cost = (event.target.value).split('-')
        let lcost = cost[0];
        let hcost = cost[1]
        let costUrl;
        if(event.target.value === ""){
            console.log(event.target.value)
            costUrl = `${url}/${categoryId}`
            console.log(costUrl)
        }else{
            console.log(event.target.value)
            costUrl = `${url}/${categoryId}?lcost=${lcost}&hcost=${hcost}`
            console.log(costUrl)
        }
        axios.get(costUrl)
        .then((res) => {this.props.restPerCost(res.data)})
       
      
    }

    render(){
        return(

            <>
                <center>Cost Filter</center>
                <div style={{"marginLeft":'15%',"display":'flex','flexDirection':'column'}} onChange={this.filterData}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="0-500"/>0-500
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="501-1000"/>501-1000
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1001-1500"/>1001-1500
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1501-2000"/>1501-2000
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="2001-2500"/>2001-2500
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="2501-5000"/>2501-5000
                    </label>
                </div>
            </>
        )
    }
}

export default CostFilterK;