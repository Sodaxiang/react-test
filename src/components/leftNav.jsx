import React, { Component, Fragment } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import "./leftNav.css";
class LeftNav extends Component {
  handleClick = link => {
    // console.log(e);
    // this.props.history.push("/product/iam");
    this.props.history.push(link);
  };
  render() {
    return (
      <Fragment>
        <style>
          {/* {`.left{
                        float:left;
                        width:200px;
                        height:300px;
                        // background-color:green;
                    }
            .left .pro{
                margin:50px 0px 0px 30px;
            }
            a{
              margin:50px 0px 0px 30px;
              display:block;
              background-color:'white';
            }
            a:hover{
              background-color:'green';
            }
            a:visited{
              color:'#f00'
            }
          `} */}
        </style>
        <div className="left">
          {/* <NavLink to="/product/iam" activeStyle={{ color: "#f00" }}> */}
          <a onClick={this.handleClick.bind(this, "/product/iam")}>
            <div className="pro">iam产品</div>
          </a>
          {/* </NavLink> */}
          {/* <NavLink to="/product/devops" activeStyle={{ color: "#f00" }}> */}
          <a onClick={this.handleClick.bind(this, "/product/devops")}>
            <div className="pro">devops产品</div>
          </a>
          {/* </NavLink> */}
        </div>
      </Fragment>
    );
  }
}
export default withRouter(LeftNav);
