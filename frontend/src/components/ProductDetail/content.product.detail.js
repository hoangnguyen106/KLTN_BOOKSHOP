import React, { Component } from "react";
import storeConfig from "../../config/storage.config";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class ContentProductDetail extends Component {
  constructor(props) {
    console.log("===============>>", props);
    super(props);
    this.state = {
      name: "",
      email: "",
      notificationComment: "",
      comment: "",
      quantity: 1,
      noti: false,
      show: false,
      pagination: [],
    };
  }
  componentWillMount() {
    let tmp = [];
    for (let i = 1; i <= this.props.totalpage; i++) {
      tmp.push(i);
    }
    this.setState({ pagination: tmp });
    if (storeConfig.getUser() !== null) {
      this.setState({
        name: storeConfig.getUser().firstName,
        email: storeConfig.getUser().email,
      });
    } else {
      this.setState({
        name: "",
        email: "",
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.totalpage !== this.props.totalpage) {
      let tmp = [];
      for (let i = 1; i <= nextProps.totalpage; i++) {
        tmp.push(i);
      }
      this.setState({ pagination: tmp });
    }
    if (nextProps.islogin === false) {
      this.setState({
        name: "",
        email: "",
      });
    }
  }
  renderPagination() {
    if (this.state.pagination.length === 0) {
      return null;
    } else {
      return (
        <ul className="pagination pagination-custom">
          <li onClick={() => this.props.backPage()}>
            <a>&laquo;</a>
          </li>
          {this.state.pagination.map((element, index) => {
            if (this.props.page === element) {
              return (
                <li
                  className="active"
                  onClick={() => this.props.setPage(element)}>
                  <a>{element}</a>
                </li>
              );
            } else {
              return (
                <li onClick={() => this.props.setPage(element)}>
                  <a>{element}</a>
                </li>
              );
            }
          })}
          <li onClick={() => this.props.nextPage()}>
            <a>&raquo;</a>
          </li>
        </ul>
      );
    }
  }
  handlename = (name) => {
    if (this.state.name === "") {
      this.setState({ name: name });
    }
  };
  submitComment = () => {
    if (this.state.name === "") {
      this.setState({ notificationComment: "Vui lòng đăng nhập để bình luận" });
      return;
    } else {
      this.setState({ notificationComment: "" });
    }
    if (this.state.comment === "") {
      this.setState({
        notificationComment: "Vui lòng nhập nội dung bình luận",
      });
      return;
    } else {
      this.setState({ notificationComment: "" });
    }
    this.props.submitComment(
      this.state.name,
      this.state.email,
      this.state.comment,
      this.props.id_book
    );
    this.setState({ comment: "" });
  };
  submitOrder = () => {
    if (this.state.quantity < 0) {
      this.setState({ noti: false });
      return;
    } else {
      this.setState({ noti: true });
    }
    let product = this.props.mproductDetail;
    product.count = this.state.quantity;
    this.props.addToCart(product);
  };

  render() {
    let xhtml = "";
    console.log(this.state.noti);
    if (this.state.noti) {
      xhtml = (
        <div className="aler-box">
          <div
            className="btn-close "
            onClick={() => this.setState({ noti: false })}></div>

          <div className="aler-title">
            <h3 className="title">Thêm vào giỏ hàng thành công</h3>
            <img
              className="aler-body"
              alt=""
              src="https://plus24h.com/upload/editor/images/icon-dat-hang-thanh-cong-09.jpg"
            />
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src={this.props.mproductDetail.img} />
                  </div>
                  <div className="tab-pane" id="pic-2">
                    <img src={this.props.mproductDetail.img} />
                  </div>
                  <div className="tab-pane" id="pic-3">
                    <img src={this.props.mproductDetail.img} />
                  </div>
                  <div className="tab-pane" id="pic-4">
                    <img src={this.props.mproductDetail.img} />
                  </div>
                  <div className="tab-pane" id="pic-5">
                    <img src={this.props.mproductDetail.img} />
                  </div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active">
                    <a data-target="#pic-1" data-toggle="tab">
                      <img src={this.props.mproductDetail.img} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-2" data-toggle="tab">
                      <img src={this.props.mproductDetail.img} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" data-toggle="tab">
                      <img src={this.props.mproductDetail.img} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-4" data-toggle="tab">
                      <img src={this.props.mproductDetail.img} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-5" data-toggle="tab">
                      <img src={this.props.mproductDetail.img} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">
                  {this.props.mproductDetail.name}
                </h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <span className="review-no">41 reviews</span>
                </div>
                <p className="product-description">
                  {this.props.mproductDetail.describe}
                </p>
                <h4 className="price">
                  Giá: <span>{this.props.mproductDetail.price}</span>
                </h4>
                <p
                  className="count"
                  style={{
                    paddingRight: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  Số Lượng:
                </p>
                <input
                  style={{ width: "10%" }}
                  type="number"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  min="0"
                  max="500"
                  onChange={(e) => this.setState({ quantity: e.target.value })}
                  value={this.state.quantity}
                />
                <h5 className="sizes mt-3">
                  Số người xem:
                  <span
                    className="size"
                    data-toggle="tooltip"
                    title="small"
                    style={{ fontSize: "12px", color: "#ff9f1a" }}>
                    {this.props.mproductDetail.view_counts} viewers
                  </span>
                </h5>
                <h5 className="colors">
                  Giảm giá:
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#ff9f1a",
                      marginLeft: "10px",
                    }}>
                    {this.props.mproductDetail.sales}
                  </span>
                </h5>
                <h5 className="colors">
                  <div style={{marginTop: '14%'}}>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#ff9f1a",
                        marginLeft: "10px",
                      }}>
                      <button
                        onClick={() => this.submitOrder()}
                        type="button"
                        class="btn btn-success"
                        style={{
                          fontSize: '18px'
                        }}
                        >
                        <i className="fa fa-shopping-cart" />
                        Thêm vào giỏ hàng
                      </button>
                    </span>
                  </div>
                </h5>
              </div>
              {xhtml}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContentProductDetail;
