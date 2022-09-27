import React,{Component} from 'react';
import axios from 'axios';

const url = "https://apilink1.herokuapp.com/filter";

class CostFilter extends Component{

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
                <div style={{marginLeft:'15%'}} onChange={this.filterData}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="0-15000"/>0-15000
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="15001-20000"/>15001-20000
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="20001-30000"/>20001-30000
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="30001-50000"/>30001-50000
                    </label>
                </div>
            </>
        )
    }
}

export default CostFilter;