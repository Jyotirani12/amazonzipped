import React,{Component} from 'react';

class MenuDisplay extends Component{

    orderId = [];

    placeOrder = (id) => {
        this.orderId.push(id);
        this.props.finalOrder(this.orderId)
    }

    removeOrder = (id) => {
        if(this.orderId.indexOf(id)>-1){
            this.orderId.splice(this.orderId.indexOf(id),1)
        }
        this.props.finalOrder(this.orderId)
    }

    renderCart = (orders) => {
        if(orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item}&nbsp;</b>
                )
            })
        }
    }

    renderMenu = ({menudata}) => {
        if(menudata){
            return menudata.map((item,i) => {
                return(
                    <div key={i}>
                        <div className="col-md-4">
                            <b>{item.product_id}</b>
                            <img src={item.Image} style={{height:80,width:80}} alt="..."/> &nbsp;
                            {item.product_name} - Rs.{item.Price}
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-success"
                            onClick={() => {this.placeOrder(item.product_id)}}>
                                <span className="glyphicon glyphicon-plus"></span>
                            </button> &nbsp;
                            <button className="btn btn-danger"
                            onClick={() => {this.removeOrder(item.product_id)}}>
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                        </div>
                    </div>
                )
            })
        }

    }

    render(){
        return(
            <div>
                <div className="col-md-12 bg-success">
                    <h1>Item Added</h1>
                    Item Number  {this.renderCart(this.orderId)} Added
                </div>
                <div className="col-md-12 bg-info">
                    {this.renderMenu(this.props)}
                </div>
            </div>
        )
    }
}

export default MenuDisplay;