import React,{Component} from 'react';
import './header.css';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

const url = "https://amazonuserapi.herokuapp.com/api/auth/userinfo"

class Header extends Component{

    constructor(props){
        super(props)

        this.state={
            userData:'',
            username:'',
            userImg:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.setItem('loginStatus','LoggedOut')
        this.setState({userData:''})
        this.props.history.push('/')

    }

    conditionalHeader = () => {
        console.log(this.state.userData)
        if(this.state.userData.name){
            let data = this.state.userData;
            let outputArray = [data.name,data.email,data.phone];
            sessionStorage.setItem('userInfo',outputArray);
            sessionStorage.setItem('loginStatus','LoggedIn')
            return(
              <>
              <header>
      <nav>
        <div className="deflex">
           
            <a href="#"><img src="https://i.ibb.co/f0f0FsJ/images.png" alt="images" className="logo" width="60"
                height="60" border="0"/></a>
            <div className="item">
                <p><i className="fa fa-map-marker me"></i>Deliver To</p>
                <h5>Enter Your Address</h5>
              
            </div>

        </div>
        {/* <!-- //search box div --> */}
        <div className="searchBox deflex">
           <div className="dropdown">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
    All
  </button>
  <ul className="dropdown-menu">
    <li ><Link to="/listing/1" className="dropdown-item">Girl's Fashion</Link></li>
    <li><Link to="/listingE/2" className="dropdown-item">Electronics</Link></li>
    <li><Link to="/listingE/2" className="dropdown-item">Home & Kitchen</Link></li>
  </ul>
</div>
            <input type="text" placeholder="search by product name"/>
            <button type="submit" className="search"><i className="fa fa-search"></i>

            </button>

        </div>
        <div>
         {/* <div className="dropdown">
                        <select onChange={this.handleCategory}>
                            <option>----SELECT YOUR CITY----</option>
                            {this.renderCity(this.state.location)}
                        </select>
                        <select className="restSelect" onChange={this.handleRest}>
                            <option>----SELECT YOUR RESTAURANTS----</option>
                            {this.renderRest(this.state.restaurant)}
                        </select>
                    </div> */}
        </div> 
        <div className="right deflex">
          <div className="item">
            <i className="fa fa-flag"></i><i className="fa fa-sort-desc"></i>
          </div>
          <div className="item">
          <Link className="btn btn-success" to="/login">
                    <span className="glyphicon glyphicon-user"></span> Hi {data.name}   
                    </Link> &nbsp;
                    <button className="btn btn-danger" onClick={this.handleLogout}>
                        <span className="glyphicon glyphicon-log-out"></span>  Logout   
                    </button> 
            {/* <p>Hello,Sign In</p>
            <h5>Account & Lists<i className="fa fa-sort-desc"></i></h5> */}
          </div>
          {/* <div className="item">
            <p>Returns</p>
            <h5>& Orders</h5>
          </div> */}
          {/* <div className="item">
            <h3><i className="fa fa-shopping-cart fa-2x"></i>Cart</h3>
            
          </div> */}
        </div>
    </nav>
    <div id="bd">
                <div className="category">


                     <li className="rb"> <Link to="/listing"> All</Link> </li>
                     <li>  <Link to="/listing/1">Girl's Fashion </Link> </li>
                     <li> <Link to="/listingE/2">Electronics</Link> </li>
                    <li>  <Link to="/listing"> Home & Kitchen </Link> </li>


                     </div>
                     </div>
    <nav>

    </nav>
    </header>
                
                   
                </>
            )

        }else{
            return(
              <>
              <header>
      <nav>
        <div className="deflex">
            {/* <a href="#"><img src="images/images.png" alt="logo" className="logo" width="60"
                height="60" />
            </a> */}
            <a href="#"><img src="https://i.ibb.co/f0f0FsJ/images.png" alt="images" className="logo" width="60"
                height="60" border="0"/></a>
            <div className="item">
                <p><i className="fa fa-map-marker me"></i>Deliver To</p>
                <h5>Enter Your Address</h5>
              
            </div>

        </div>
        {/* <!-- //search box div --> */}
        <div className="searchBox deflex">
            {/* <button type="submit" className="all">All<i className="fa fa-sort-desc"></i> */}
            <div className="dropdown">
  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
    All
  </button>
  <ul className="dropdown-menu">
    <li ><Link to="/listing/1" className="dropdown-item">Girl's Fashion</Link></li>
    <li><Link to="/listingE/2" className="dropdown-item">Electronics</Link></li>
    <li><Link to="/listing/3" className="dropdown-item">Home & Kitchen</Link></li>
  </ul>
</div>
                     <input type="text" placeholder="Enter Product Name" />
            <button type="submit" className="search"><i className="fa fa-search"></i>

            </button>

        </div>
        <div className="right deflex">
          <div className="item">
            <i className="fa fa-flag"></i><i className="fa fa-sort-desc"></i>
          </div>
          <div className="item">
          <Link className="btn btn-success" to="/login">
                    <span className="glyphicon glyphicon-log-in"></span>  Login   
                    </Link> &nbsp;
                    <Link className="btn btn-warning" to="/register">
                        <span className="glyphicon glyphicon-user"></span>  SignUp   
                    </Link> 
            {/* <p>Hello,Sign In</p>
            <h5>Account & Lists<i className="fa fa-sort-desc"></i></h5> */}
          </div>
          {/* <div className="item">
            <p>Returns</p>
            <h5>& Orders</h5>
          </div> */}
          {/* <div className="item">
            <h3><i className="fa fa-shopping-cart fa-2x"></i>Cart</h3>
            
          </div> */}
        </div>
    </nav>
    <div id="bd">
                <div className="category">


                     <li className="rb"> <Link to="/listing"> All</Link> </li>
                     <li>  <Link to="/listing/1">Girl's Fashion </Link> </li>
                     <li> <Link to="/listingE/2">Electronics</Link> </li>
                    <li>  <Link to="/listing/3"> Home & Kitchen </Link> </li>


                     </div>
                     </div>
    <nav>

    </nav>
    </header></>
                
                    
                
            )
        }
    }

    render(){
        return(

            <header>
               
                <div id="social">
                    {this.conditionalHeader()}
                   
                </div>
            </header>
            
        )
    }
    
    ///api calling 
    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
}

export default withRouter(Header);