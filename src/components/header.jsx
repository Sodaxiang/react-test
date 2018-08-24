import React, { Component, Fragment } from "react";
import { Route, Link, Switch } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <style>
          {`
                        header{
                           cle // width:100%;
                            height:60px;
                            // background-color:red;
                        }
                        span{
                           display:inline-block;
                           position:relative;
                           float:right;
                          //  background-color:blue;
                            line-height:60px;
                            margin-right:20px;
                            margin-left:60px;
                        }
                        `}
        </style>
        <header>
          <nav>
            <Link to="/product">
              <span>产品</span>
            </Link>
            <Link to="/">
              <span>首页</span>
            </Link>
          </nav>
        </header>
      </Fragment>
    );
  }
}
