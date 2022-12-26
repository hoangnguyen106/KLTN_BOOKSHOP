/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <>
      {/* // Header top */}
      <div className="header-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="logo pull-left">
                <a href="/">
                  <img src="/assets/images/home/logo1.gif" alt="" />
                </a>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="shop-menu pull-right">
                <ul className="nav navbar-nav collapse navbar-collapse">
                  <li className='dropdown'>
                    <a className='Setting-item'>
                      <i className="fa fa-user dropbtn"></i>
                    </a>
                  </li>
                  <li>
                    <Link to={"/cart"}>
                      <i className="fa fa-shopping-cart" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // Header bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="row header-bot">
            <div className="col-sm-8">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

            </div>
            <div className="col-sm-4">
              <div className="search_box pull-right">
                <input
                  type="text"
                  placeholder="TÌm kiếm sản phẩm..."
                  onChange={(e) => this.props.setSearchText(e.target.value)}
                  onKeyUp={(e) => this.handeSearch(e.keyCode)} />
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default Header