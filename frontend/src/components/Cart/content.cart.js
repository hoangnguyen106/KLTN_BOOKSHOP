import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, ModalTitle } from "react-bootstrap";
class ContentCart extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      show: false,
      name: "",
      phone: "",
      address: "",
      notiName: "",
      notiPhone: "",
      notiAddress: "",
      notiDetailAddress: "",
      ispay: false,
      showpaymentfail: false,
      noti: false,
    };
  }
  componentWillMount() {
    let total = 0;
    for (let i = 0; i < this.props.cart.length; i++) {
      total +=
        Number(this.props.cart[i].price) * Number(this.props.cart[i].count);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.cart !== this.props.cart) {
      let total = 0;
      for (let i = 0; i < nextProps.cart.length; i++) {
        total +=
          Number(nextProps.cart[i].price) * Number(nextProps.cart[i].count);
      }
      this.setState({ total: total });
    }
    if (nextProps.ispay !== this.props.ispay && nextProps.ispay === true) {
      this.setState({ ispay: true });
    }
    if (
      nextProps.ispay !== this.props.ispay &&
      nextProps.ispay === false &&
      this.props.cart.length === 0
    ) {
      this.setState({ showpaymentfail: true });
    }
  }
  reset = () => {
    this.setState({
      show: false,
      name: "",
      phone: "",
      address: "",
      errorMessage: "",
      noti: false,
      notiName: "",
      notiPhone: "",
      notiAddress: "",
      notiDetailAddress: "",
      ispay: false,
      showpaymentfail: false,
    });
  };
  handlePayment = () => {
    if (this.props.cart.length === 0) {
      this.setState({
        errorMessage: "Vui lòng chọn sản phẩm để thanh toán",
        showpaymentfail: true,
      });
    }
    if (!this.props.islogin) {
      this.setState({ errorMessage: "Vui lòng đăng nhập để thanh toán" });
    }
    let check = true;
    if (this.state.name.length < 1) {
      this.setState({
        notiName: "Vui lòng nhập vào tên của bạn",
      });
      check = false;
    } else {
      this.setState({
        notiName: "",
      });
    }
    if (!this.isvaidPhone(this.state.phone)) {
      this.setState({
        notiPhone: "Vui lòng nhập đúng định dạng số điện thoại",
      });
      check = false;
    } else {
      this.setState({ notiPhone: "" });
    }

    if (this.state.address === "") {
      this.setState({ notiDetailAddress: "Không được để trống địa chỉ" });
      check = false;
    } else {
      this.setState({ notiDetailAddress: "" });
    }
    if (check === false) return;
    this.props.payment(
      this.state.address,
      this.state.phone,
      this.state.name,
      this.state.total
    );
    this.setState({ noti: true });
  };
  isvaidPhone = (phone) => {
    if (phone.length < 10 || phone.length > 11) return false;
    for (let i = 0; i < phone.length; i++) {
      if (phone.charAt(i) < "0" || phone.charAt(i) > "9") return false;
    }
    return true;
  };

  render() {
    let xhtml = "";
    if (this.state.noti) {
      xhtml = (
        <div className="aler-box">
          <div
            className="btn-close "
            onClick={() => this.setState({ noti: false })}></div>

          <div className="aler-title">
            <h3 className="title">
              Đặt hàng thành công. Vui lòng vào đơn hàng của bạn để xem.
            </h3>
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
      // <div>
      //   <section id="cart_items">
      //     <div className="container">
      //       <div className="table-responsive cart_info">
      //         <table className="table table-condensed">
      //           <thead>
      //             <tr className="cart_menu">
      //               <td className="image">Sản phẩm</td>
      //               <td className="description" />
      //               <td className="price">Giá</td>
      //               <td className="quantity">Số lượng</td>
      //               <td className="total">Tổng tiền</td>
      //               <td />
      //             </tr>
      //           </thead>
      //           <tbody>
      //             {this.props.cart.map((element, index) => {
      //               return (
      //                 <tr>
      //                   <td className="cart_product">
      //                     <a href="">
      //                       <img src={element.img} alt="" />
      //                     </a>
      //                   </td>
      //                   <td className="cart_description">
      //                     <h4>
      //                       <p href="">{element.name}</p>
      //                     </h4>
      //                   </td>
      //                   <td className="cart_price">
      //                     <p>{element.price}</p>
      //                   </td>
      //                   <td className="cart_quantity">
      //                     <div className="cart_quantity_button">
      //                       <span
      //                         className="cart_quantity_down"
      //                         onClick={() => {
      //                           if (element.count === 1) {
      //                             return;
      //                           }
      //                           element.count -= 1;
      //                           this.props.updateProductInCart(element);
      //                         }}>
      //                         {" "}
      //                         -{" "}
      //                       </span>
      //                       <input
      //                         className="cart_quantity_input"
      //                         type="text"
      //                         name="quantity"
      //                         value={element.count}
      //                         autocomplete="off"
      //                         size="2"
      //                       />
      //                       <span
      //                         className="cart_quantity_up"
      //                         onClick={() => {
      //                           element.count += 1;
      //                           this.props.updateProductInCart(element);
      //                         }}>
      //                         {" "}
      //                         +{" "}
      //                       </span>
      //                     </div>
      //                   </td>
      //                   <td className="cart_total">
      //                     <p className="cart_total_price">
      //                       {new Intl.NumberFormat("de-DE", {
      //                         currency: "EUR",
      //                       }).format(element.price * element.count)}
      //                       <sup>đ</sup>
      //                     </p>
      //                   </td>
      //                   <td className="cart_delete">
      //                     <a
      //                       className="cart_quantity_delete"
      //                       onClick={() =>
      //                         this.props.deteleProductInCart(element._id)
      //                       }>
      //                       <i className="fa fa-times" />
      //                     </a>
      //                   </td>
      //                 </tr>
      //               );
      //             })}
      //           </tbody>
      //         </table>
      //       </div>
      //     </div>
      //   </section>
      //   <section id="do_action">
      //     <div className="container">
      //       <div className="row">
      //         <div className="col-md-12">
      //           <div class="total_area">
      //             <ul>
      //               <li>
      //                 Phí Vận Chuyển
      //                 <span>
      //                   0<sup>đ</sup>{" "}
      //                 </span>
      //               </li>
      //               <li>
      //                 Tổng Tiền{" "}
      //                 <span>
      //                   {" "}
      //                   {new Intl.NumberFormat("de-DE", {
      //                     currency: "EUR",
      //                   }).format(this.state.total)}
      //                   <sup>đ</sup>
      //                 </span>
      //               </li>
      //             </ul>
      //             <Modal
      //               show={this.state.show}
      //               onHide={() => this.setState({ show: false })}
      //               container={this}
      //               aria-labelledby="contained-modal-title">
      //               <Modal.Header closeButton>
      //                 <Modal.Title id="contained-modal-title">
      //                   Thông báo
      //                 </Modal.Title>
      //               </Modal.Header>
      //               <Modal.Body>Vui Lòng Đăng Nhập Để Thanh Toán</Modal.Body>
      //               <Modal.Footer>
      //                 <Button onClick={() => this.setState({ show: false })}>
      //                   <a>Hủy</a>
      //                 </Button>
      //                 <Button onClick={this.handleHide}>
      //                   <Link to="/login_register">Đăng nhập</Link>
      //                 </Button>
      //               </Modal.Footer>
      //             </Modal>
      //           </div>
      //         </div>
      //         <div className="col-md-12">
      //           <span style={{ fontSize: "16px", color: "red" }}>
      //             {this.state.errorMessage}
      //           </span>
      //           <div className="chose_area">
      //             <ul class="user_option">
      //               <li>
      //                 <label>Họ và tên</label>
      //                 <input
      //                   type="text"
      //                   value={this.state.name}
      //                   onChange={(e) =>
      //                     this.setState({ name: e.target.value })
      //                   }
      //                 />
      //                 <span>{this.state.notiName}</span>
      //               </li>
      //               <li>
      //                 <label>Số điện thoại</label>
      //                 <input
      //                   type="text"
      //                   value={this.state.phone}
      //                   onChange={(e) =>
      //                     this.setState({ phone: e.target.value })
      //                   }
      //                 />
      //                 <span>{this.state.notiPhone}</span>
      //               </li>
      //             </ul>

      //             <ul className="user_option">
      //               <li>
      //                 <label>Địa chỉ</label>
      //                 <input
      //                   type="text"
      //                   value={this.state.address}
      //                   onChange={(e) =>
      //                     this.setState({ address: e.target.value })
      //                   }
      //                 />
      //                 <span>{this.state.notiDetailAddress}</span>
      //               </li>
      //             </ul>
      //             <Modal
      //               show={this.state.ispay}
      //               onHide={() => this.setState({ ispay: false })}
      //               container={this}
      //               aria-labelledby="contained-modal-title">
      //               <Modal.Header closeButton>
      //                 <Modal.Title id="contained-modal-title">
      //                   Thông báo
      //                 </Modal.Title>
      //               </Modal.Header>
      //               <Modal.Body>
      //                 Đặt Hàng Thành Công, Vui Lòng Vào Đơn Hàng Để Xem Chi Tiết
      //               </Modal.Body>
      //               <Modal.Footer>
      //                 <Button
      //                   onClick={() => {
      //                     this.reset();
      //                     window.location.reload();
      //                   }}>
      //                   <a>Đồng ý</a>
      //                 </Button>
      //               </Modal.Footer>
      //             </Modal>

      //             <Modal
      //               show={this.state.showpaymentfail}
      //               onHide={() => this.setState({ showpaymentfail: false })}
      //               container={this}
      //               aria-labelledby="contained-modal-title">
      //               <Modal.Header closeButton>
      //                 <Modal.Title id="contained-modal-title">
      //                   Thông báo
      //                 </Modal.Title>
      //               </Modal.Header>
      //               <Modal.Body>
      //                 Vui lòng chọn sản phẩm để thanh toán
      //               </Modal.Body>
      //               <Modal.Footer>
      //                 <Button
      //                   onClick={() =>
      //                     this.setState({ showpaymentfail: false })
      //                   }>
      //                   <a>Đồng ý</a>
      //                 </Button>
      //               </Modal.Footer>
      //             </Modal>
      //             <div className="cart-option">
      //               <button
      //                 className="button update"
      //                 onClick={() => this.handlePayment()}>
      //                 Đặt hàng
      //               </button>
      //               <button className="button update">
      //                 <Link to={"/"}>Tiếp tục mua hàng</Link>
      //               </button>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </section>
      // </div>

      <div className="container px-3 my-5 clearfix">
        {/* Shopping cart table */}
        <div className="card">
          <div className="card-header">
            <h2>GIỎ HÀNG CỦA BẠN</h2>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered m-0">
                <thead>
                  <tr>
                    {/* Set columns width */}
                    <th
                      className="text-center py-3 px-4"
                      style={{ minWidth: 400 }}>
                      Tên sản phẩm &amp; Chi tiết
                    </th>
                    <th className="text-right py-3 px-4" style={{ width: 100 }}>
                      Giá
                    </th>
                    <th
                      className="text-center py-3 px-4"
                      style={{ width: 120 }}>
                      Số lượng
                    </th>
                    <th className="text-right py-3 px-4" style={{ width: 100 }}>
                      Tổng tiền
                    </th>
                    <th
                      className="text-center align-middle py-3 px-0"
                      style={{ width: 40 }}>
                      <a
                        href="#"
                        className="shop-tooltip float-none text-light"
                        title=""
                        data-original-title="Clear cart">
                        <i className="ino ion-md-trash" />
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.cart.map((element, index) => {
                    console.log(element);
                    return (
                      <tr>
                        <td className="p-4">
                          <div className="media align-items-center d-flex">
                            <img
                              src={element.img}
                              className="d-block ui-w-40 ui-bordered mr-4"
                              alt=""
                            />
                            <div className="media-body">
                              <a href="#" className="d-block text-dark">
                                {element.name}
                              </a>
                              <small>
                                <span className="text-muted">Ngày tạo: </span>{" "}
                                {element.release_date}
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="text-right font-weight-semibold align-middle p-4">
                          {element.price}
                        </td>
                        <td className="align-middle p-4">
                          <div className="cart_quantity_button d-flex">
                            {" "}
                            <span
                              className="cart_quantity_down"
                              onClick={() => {
                                if (element.count === 1) {
                                  return;
                                }
                                element.count -= 1;
                                this.props.updateProductInCart(element);
                              }}>
                              {" "}
                              -{" "}
                            </span>
                            <input
                              className="cart_quantity_input"
                              type="text"
                              name="quantity"
                              value={element.count}
                              autocomplete="off"
                              size="2"
                            />
                            <span
                              className="cart_quantity_up"
                              onClick={() => {
                                element.count += 1;
                                this.props.updateProductInCart(element);
                              }}>
                              {" "}
                              +{" "}
                            </span>
                          </div>
                        </td>
                        <td className="text-right font-weight-semibold align-middle p-4">
                          <p className="cart_total_price">
                            {" "}
                            {new Intl.NumberFormat("de-DE", {
                              currency: "EUR",
                            }).format(element.price * element.count)}
                            <sup>đ</sup>
                          </p>
                        </td>
                        <td className="text-center align-middle px-0">
                          <a
                            className="shop-tooltip close float-none text-danger"
                            title=""
                            onClick={() =>
                              this.props.deteleProductInCart(element._id)
                            }
                            data-original-title="Remove">
                            ×
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* / Shopping cart table */}
            <span style={{ fontSize: "16px", color: "red" }}>
              {this.state.errorMessage}{" "}
            </span>
            <div className="d-flex flex-wrap justify-content-between align-items-center pb-4">
              <div className="mt-4">
                <div>
                  {" "}
                  <label className="text-muted font-weight-normal">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                    placeholder="Họ tên"
                    className="form-control"
                  />
                  <span style={{ fontSize: "11px", color: "red" }}>
                    {this.state.notiName}
                  </span>
                </div>
                <div>
                  <label className="text-muted font-weight-normal">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    value={this.state.phone}
                    onChange={(e) => this.setState({ phone: e.target.value })}
                    placeholder="Số điện thoại"
                    className="form-control"
                  />
                  <span style={{ fontSize: "11px", color: "red" }}>
                    {this.state.notiPhone}
                  </span>
                </div>
                <div>
                  <label className="text-muted font-weight-normal">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    value={this.state.address}
                    onChange={(e) => this.setState({ address: e.target.value })}
                    placeholder="Địa chỉ"
                    className="form-control"
                  />
                  <span style={{ fontSize: "11px", color: "red" }}>
                    {this.state.notiDetailAddress}
                  </span>
                </div>
              </div>
              <div className="d-flex">
                <div
                  className="text-right mt-4"
                  style={{
                    fontSize: "13px",
                  }}>
                  <label className="text-muted font-weight-normal mb-3">
                    Tổng tiền
                  </label>
                  <div className="text-large">
                    <span>
                      {" "}
                      {new Intl.NumberFormat("de-DE", {
                        currency: "EUR",
                      }).format(this.state.total)}
                      <sup>đ</sup>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-right d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-lg btn-default md-btn-flat mt-2 mr-3">
                <Link to={"/"}>Tiếp tục mua hàng</Link>
              </button>
              <button
                onClick={() => this.handlePayment()}
                type="button"
                className="btn btn-lg btn-primary mt-2">
                Đặt hàng
              </button>
            </div>
            {xhtml}
          </div>
        </div>
      </div>
    );
  }
}
export default ContentCart;
