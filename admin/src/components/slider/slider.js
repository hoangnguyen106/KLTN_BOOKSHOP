import React, { Component } from "react";
import { Link } from "react-router-dom";
class Slider extends Component {
  render() {
    return (
      <div id="sidebar" className="nav-collapse">
        <ul className="sidebar-menu">
          <li className="sub-menu">
            <a className="" href="/">
              <i className="icon_house_alt"></i>
              <span>Tổng Quát</span>
            </a>
          </li>
          <li className="sub-menu">
            <a href="javascript:" className="">
              <i className="icon_document_alt"></i>
              <span>Quản Lý</span>
              <span className="menu-arrow arrow_carrot-right"></span>
            </a>
            <ul className="sub">
              <li>
                <a className="sub" href="/bookmanager">
                  Sách
                </a>
              </li>
              <li>
                <a className="sub" href="/categorymanager">
                  Thể Loại{" "}
                </a>
              </li>
              <li>
                <a className="sub" href="/publishermanager">
                  Nhà Xuất Bản
                </a>
              </li>
              <li>
                <a className="sub" href="/authormanager">
                  Tác Giả
                </a>
              </li>
              <li>
                <a className="sub" href="/usermanager">
                  Người Dùng
                </a>
              </li>
            </ul>
          </li>
          <li className="sub-menu">
            <a href="/billmanager" className="">
              <i className="fa fa-cubes"></i>
              <span>Đơn Hàng</span>
            </a>
          </li>
          <li>
            <a className="" href="/statistical">
              <i className="icon_piechart"></i>
              <span>Thống Kê</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Slider;
