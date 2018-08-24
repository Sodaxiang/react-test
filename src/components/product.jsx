import React, { Component, Fragment } from "react";
import LeftNav from "./leftNav.jsx";
export default class Product extends Component {
  constructor(props) {
    super(props);
  }
  /*
  show = () => {
    let showPage = null;
   
    let match = this.props.match;
    if (match.url === "/") {
      showPage = <h1>欢迎访问Choerodon</h1>;
    } else if (match.url === "/product") {
      showPage = (
        <Fragment>
          <LeftNav />
          <div className="right">
            <h2>欢迎访问Choerodon产品</h2>
          </div>
        </Fragment>
      );
    } else if (match.url === "/product/iam") {
      showPage = (
        <Fragment>
          <LeftNav />
          <div className="right">
            <h2>欢迎访问iam产品</h2>
          </div>
        </Fragment>
      );
    } else if (match.url === "/product/devops") {
      showPage = (
        <Fragment>
          <LeftNav />
          <div className="right">
            <h2>欢迎访问devops产品</h2>
          </div>
        </Fragment>
      );
    }
    return showPage;
  };*/

  render() {
    // console.log(this.props);
    let productType = this.props.match.params.protype;

    let rightContent = "欢迎访问Choerodon产品";
    if (productType === "iam") {
      rightContent = "欢迎访问iam产品";
    } else if (productType === "devops") {
      rightContent = "欢迎访问devops产品";
    }
    // let showPage = this.show();
    return (
      <Fragment>
        <style>
          {`.left{
                        float:left;
                        width:200px;
                        height:300px;
                        // background-color:green;
                    }
            .left .pro{
                margin:50px 0px 0px 30px;
            }
            .right{
                margin-top:70px;
                text-align:center;
            }`}
        </style>
        <LeftNav />
        <div className="right">
          <h2>{rightContent}</h2>
        </div>
        {/* {showPage} */}
      </Fragment>
    );
  }
}
