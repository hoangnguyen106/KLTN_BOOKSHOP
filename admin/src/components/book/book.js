import React, { Component } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Modal from "./modal";
class Book extends Component {
  constructor() {
    super();
    this.state = {
      pagination: [],
      book: null,
      file: null,
      imagePreviewUrl: null,
      curr: "add",
      category: "Thể Loại",
      publisher: "Nhà Xuất Bản",
      author: "Tác Giả",
      name: "",
      release_date: null,
      price: "",
      img: "",
      describe: "",
      id_publisher: "",
      id_author: "",
      id_category: "",
      noti: "",
      id: null,
      showPopup: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ showPopup: true });
  };

  hideModal = () => {
    this.setState({ showPopup: false });
    this.reset();
  };

  componentWillMount() {
    let tmp = [];
    for (let i = 1; i <= this.props.totalpage; i++) {
      tmp.push(i);
    }
    this.setState({ pagination: tmp });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.totalpage !== this.props.totalpage) {
      let tmp = [];
      for (let i = 1; i <= nextProps.totalpage; i++) {
        tmp.push(i);
      }
      this.setState({ pagination: tmp });
    }
    if (nextProps.book !== null) {
      this.setState({
        imagePreviewUrl: nextProps.book.img,
      });
    }
    if (nextProps.isadd === true) {
      this.reset();
    }
    if (nextProps.isupdate === true) {
      this.reset();
    }
  }
  renderPagination() {
    if (this.state.pagination.length === 0) {
      return null;
    } else {
      return (
        <ul className="pagination pagination-custom col-md-6 offset-md-3">
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
  handleChangeImg = (img) => {
    if (img === undefined) return;
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        file: img,
        img: reader.result,
      });
    };
    reader.readAsDataURL(img);
  };
  invalidPrice = (t) => {
    var str = t.toString();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == "+" || str.charAt(i) == "-") count++;
      else break;
    }
    str = str.substring(count, str.length);
    count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == ".") {
        count++;
      }
      if (str.charAt(i) < "0" || str.charAt(i) > "9") return false;
    }
    if (count > 1) return false;
    return !isNaN(Number.parseFloat(str));
  };
  submitAddBook = () => {
    const {
      id_category,
      name,
      price,
      release_date,
      describe,
      id_publisher,
      id_author,
      file,
    } = this.state;
    if (name.length <= 0) {
      swal({
        title: "Thông Báo",
        text: "Vui lòng nhập tên sách !",
        icon: "warning",
      });
    }
    if (release_date === null) {
      swal({
        title: "Thông Báo",
        text: "Vui lòng chọn Ngày!",
        icon: "warning",
      });
    }
    if (!this.invalidPrice(price)) {
      swal({
        title: "Thông Báo",
        text: "Vui lòng nhập giá!",
        icon: "warning",
      });
    }
    if (id_category === "") {
      swal({
        title: "Thông Báo",
        text: "Vui lòng chọn Thể loại!",
        icon: "warning",
      });
    }

    if (id_author === "") {
      swal({
        title: "Thông Báo",
        text: "Vui lòng chọn Tác giả!",
        icon: "warning",
      });
    }

    if (id_publisher === "") {
      swal({
        title: "Thông Báo",
        text: "Vui lòng chọn Nhà xuất bản!",
        icon: "warning",
      });
    }
    if (file === null) {
      swal({
        title: "Thông Báo",
        text: "Vui lòng chọn ảnh!",
        icon: "warning",
      });
    }
    this.props.addBook(
      id_category,
      name,
      price,
      release_date,
      describe,
      id_publisher,
      id_author,
      file
    );
  };
  submitUpdateBook = () => {
    const {
      id_category,
      name,
      price,
      release_date,
      describe,
      id_publisher,
      id_author,
      file,
      id,
      img,
    } = this.state;
    if (name.length <= 0) {
      swal({
        title: "Thông Báo",
        text: "Vui lòng nhập tên sách !",
        icon: "warning",
      });
    }
    if (release_date === null) {
      swal({
        title: "Thông Báo",
        text: "Vui lòng chọn Ngày!",
        icon: "warning",
      });
    }
    if (!this.invalidPrice(price)) {
      swal({
        title: "Thông Báo",
        text: "Vui lòng nhập giá!",
        icon: "warning",
      });
    }
    if (id_category == "") {
      swal({
        title: "Thông Báo",
        text: "Vui lòng chọn Thể loại!",
        icon: "warning",
      });
    }

    if (id_author == "") {
      swal({
        title: "Thông Báo",
        text: "Vui lòng chọn Tác giả!",
        icon: "warning",
      });
    }

    if (id_publisher == "") {
      swal({
        title: "Thông Báo",
        text: "Vui lòng chọn Nhà xuất bản!",
        icon: "warning",
      });
    }
    if (file == null && img == "") {
      swal({
        title: "Thông Báo",
        text: "Vui lòng chọn ảnh!",
        icon: "warning",
      });
    }
    this.props.updateBook(
      id,
      name,
      id_category,
      price,
      release_date,
      describe,
      id_publisher,
      id_author,
      file
    );
  };
  renderBtnSubmit = () => {
    if (this.state.curr === "add") {
      return (
        <div className="form-group">
          <div className="col-lg-offset-2 col-lg-10">
            <button
              onClick={() => {
                this.submitAddBook();
                swal({
                  title: "Thông Báo",
                  text: "Thêm Mới Thành công!",
                  icon: "success",
                });
                this.setState({
                  showPopup: false,
                });
              }}
              className="btn-custom"
              type="submit">
              Thêm
            </button>
            {/* <button
              className="btn-custom"
              style={{ background: "gray" }}
              disabled>
              Cập nhật
            </button> */}
            <button className="btn-custom" onClick={() => this.reset()}>
              Làm mới
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="form-group">
          <div className="col-lg-offset-2 col-lg-10">
            {/* <button
              className="btn-custom"
              style={{ background: "gray", overflow: "hidden" }}
              disabled
              type="submit">
              Thêm mới
            </button> */}
            <button
              className="btn-custom"
              onClick={() => {
                this.submitUpdateBook();
                swal({
                  title: "Thông Báo",
                  text: "Cập nhật Thành công!",
                  icon: "success",
                });
                this.setState({
                  showPopup: false,
                });
              }}
              type="button">
              Cập nhật
            </button>
            <button className="btn-custom" onClick={() => this.reset()}>
              Làm mới
            </button>
          </div>
        </div>
      );
    }
  };
  reset = () => {
    this.setState({
      noti: "",
      name: "",
      release_date: "",
      file: null,
      imagePreviewUrl: null,
      curr: "add",
      category: "category",
      publisher: "publisher",
      author: "author",
      name: "",
      release_date: null,
      price: "",
      img: "",
      describe: "",
      id_publisher: "",
      id_author: "",
      id_category: "",
      noti: "",
      id: null,
    });
  };
  renderMenuCategory = () => {
    if (this.props.category) {
      return this.props.category.map((element, index) => {
        return (
          <li
            onClick={() =>
              this.setState({
                category: element.name,
                id_category: element._id,
              })
            }>
            <a>{element.name}</a>
          </li>
        );
      });
    } else {
      return null;
    }
  };
  renderMenuAuthor = () => {
    if (this.props.author) {
      return this.props.author.map((element, index) => {
        return (
          <li
            onClick={() =>
              this.setState({ author: element.name, id_author: element._id })
            }>
            <a>{element.name}</a>
          </li>
        );
      });
    } else {
      return null;
    }
  };
  renderMenuPublisher = () => {
    if (this.props.publisher) {
      return this.props.publisher.map((element, index) => {
        return (
          <li
            onClick={() =>
              this.setState({
                publisher: element.name,
                id_publisher: element._id,
              })
            }>
            <a>{element.name}</a>
          </li>
        );
      });
    } else {
      return null;
    }
  };
  getNameCategoryByID = (id) => {
    for (let i = 0; i < this.props.category.length; i++) {
      if (id === this.props.category[i]._id) return this.props.category[i].name;
    }
  };
  getNameAuthorByID = (id) => {
    for (let i = 0; i < this.props.author.length; i++) {
      if (id === this.props.author[i]._id) return this.props.author[i].name;
    }
  };
  getNamePublisherByID = (id) => {
    for (let i = 0; i < this.props.publisher.length; i++) {
      console.log(id + " === " + this.props.publisher[i]._id);
      if (id === this.props.publisher[i]._id)
        return this.props.publisher[i].name;
    }
  };

  render() {
    return (
      <section id="main-content">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="page-header">
              <i className="fa fa-table" /> Table
            </h3>
            <ol className="breadcrumb">
              <li>
                <i className="fa fa-home" />
                <Link to="/">Trang Chủ</Link>
              </li>

              <li>
                <i className="fa fa-th-list" />
                Quản Lý Sách
              </li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Modal show={this.state.showPopup} handleClose={this.hideModal}>
              <div className="form" id="from-book">
                <div
                  className="form-validate form-horizontal"
                  id="feedback_form"
                  method="get"
                  action="">
                  <div className="form-group ">
                    <label for="cname" className="control-label col-lg-2">
                      Tên sách <span className="required">*</span>
                    </label>
                    <div className="col-lg-10">
                      <input
                        onChange={(e) => {
                          this.setState({
                            name: e.target.value,
                          });
                        }}
                        value={this.state.name}
                        className="form-control"
                        id="cname"
                        name="fullname"
                        minlength="5"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label for="cemail" className="control-label col-lg-2">
                      Date<span className="required">*</span>
                    </label>
                    <div className="col-lg-10">
                      <input
                        value={this.state.release_date}
                        onChange={(e) =>
                          this.setState({
                            release_date: e.target.value,
                          })
                        }
                        className="form-control "
                        id="cemail"
                        type="date"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label for="curl" className="control-label col-lg-2">
                      Giá
                    </label>
                    <div className="col-lg-10">
                      <input
                        value={this.state.price}
                        onChange={(e) =>
                          this.setState({
                            price: e.target.value,
                          })
                        }
                        className="form-control "
                        id="curl"
                        type="text"
                        name="url"
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label for="cname" className="control-label col-lg-2">
                      Miêu Tả <span className="required">*</span>
                    </label>
                    <div className="col-lg-10">
                      <input
                        value={this.state.describe}
                        onChange={(e) =>
                          this.setState({
                            describe: e.target.value,
                          })
                        }
                        className="form-control"
                        id="subject"
                        name="subject"
                        minlength="5"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label for="comment " className="control-label col-lg-2">
                      Thể Loại
                    </label>
                    <div className="btn-group col-lg-10">
                      <button
                        style={{ width: "200px" }}
                        type="button"
                        className="btn btn-default dropdown-toggle"
                        data-toggle="dropdown">
                        {this.state.category} <span className="caret" />
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        {this.renderMenuCategory()}
                      </ul>
                    </div>
                  </div>
                  <div className="form-group ">
                    <label for="comment" className="control-label col-lg-2">
                      Tác Giả
                    </label>
                    <div className="btn-group col-lg-10">
                      <button
                        style={{ width: "200px" }}
                        type="button"
                        className="btn btn-default dropdown-toggle"
                        data-toggle="dropdown">
                        {this.state.author} <span className="caret" />
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        {this.renderMenuAuthor()}
                      </ul>
                    </div>
                  </div>
                  <div className="form-group ">
                    <label for="comment" className="control-label col-lg-2">
                      Nhà Xuất Bản
                    </label>
                    <div className="btn-group col-lg-10">
                      <button
                        type="button"
                        className="btn btn-default dropdown-toggle"
                        data-toggle="dropdown"
                        style={{ width: "200px" }}>
                        {this.state.publisher} <span className="caret" />
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        {this.renderMenuPublisher()}
                      </ul>
                    </div>
                  </div>
                  <div className="form-group ">
                    <label for="comment" className="control-label col-lg-2">
                      Chọn ảnh{" "}
                    </label>
                    <div className="col-lg-10">
                      <input
                        className="form-control "
                        type="file"
                        id="ccomment"
                        name="comment"
                        required
                        onChange={(e) =>
                          this.handleChangeImg(e.target.files[0])
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label for="comment" className="control-label col-lg-2">
                      Ảnh
                    </label>
                    <div className="col-lg-10">
                      <img src={this.state.img} style={{ maxWidth: "300px" }} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-10">
                      <p>{this.state.noti}</p>
                    </div>
                  </div>
                  {this.renderBtnSubmit()}
                </div>
              </div>
            </Modal>
            <div>
              {" "}
              <button type="button" onClick={this.showModal}>
                Thêm sách
              </button>
            </div>
          </div>
          <div className="col-lg-12">
            <section className="panel">
              <table className="table table-striped table-advance table-hover">
                <tbody>
                  <tr>
                    <th>
                      <i className="icon_book_alt" /> Tên Sách
                    </th>
                    <th>
                      <i className="icon_calendar" /> Ngày NHập
                    </th>
                    <th>
                      <i className="icon_percent" /> Giá
                    </th>
                    <th>
                      <i className="icon_pin_alt" /> Tóm Tắt
                    </th>
                    <th>
                      <i className="icon_cogs" />
                    </th>
                  </tr>
                  {this.props.book.map((element, index) => {
                    return (
                      <tr>
                        <td>{element.name}</td>
                        <td>{element.release_date.slice(0, 10)}</td>
                        <td>
                          {new Intl.NumberFormat("de-DE", {
                            currency: "EUR",
                          }).format(element.price)}
                          <sup>đ</sup>
                        </td>
                        <td style={{ width: "40%" }}>{element.describe}</td>
                        <td>
                          <div className="btn-group">
                            <a
                              onClick={() =>
                                this.setState({
                                  curr: "update",
                                  name: element.name,
                                  release_date: element.release_date.slice(
                                    0,
                                    10
                                  ),
                                  price: element.price,
                                  describe: element.describe,
                                  category: this.getNameCategoryByID(
                                    element.id_category
                                  ),
                                  id_category: element.id_category,
                                  id_author: element.id_author,
                                  id_publisher: element.id_publisher,
                                  author: this.getNameAuthorByID(
                                    element.id_author
                                  ),
                                  publisher: this.getNamePublisherByID(
                                    element.id_publisher
                                  ),
                                  img: element.img,
                                  id: element._id,
                                  showPopup: true,
                                })
                              }
                              className="btn btn-success">
                              <i className="icon_check_alt2" />
                            </a>
                            <a
                              onClick={() => {
                                this.props.deleteBook(element._id);
                                swal({
                                  title: "Thông Báo",
                                  text: "Xóa Thành công!",
                                  icon: "success",
                                });
                              }}
                              className="btn btn-danger">
                              <i className="icon_close_alt2" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {this.renderPagination()}
            </section>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-12">
            <section className="panel">
              <header className="panel-heading"></header>
              <div className="panel-body">
                <div className="form" id="from-book">
                  <div
                    className="form-validate form-horizontal"
                    id="feedback_form"
                    method="get"
                    action="">
                    <div className="form-group ">
                      <label for="cname" className="control-label col-lg-2">
                        Tên sách <span className="required">*</span>
                      </label>
                      <div className="col-lg-10">
                        <input
                          onChange={(e) => {
                            this.setState({
                              name: e.target.value,
                            });
                          }}
                          value={this.state.name}
                          className="form-control"
                          id="cname"
                          name="fullname"
                          minlength="5"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label for="cemail" className="control-label col-lg-2">
                        Date<span className="required">*</span>
                      </label>
                      <div className="col-lg-10">
                        <input
                          value={this.state.release_date}
                          onChange={(e) =>
                            this.setState({
                              release_date: e.target.value,
                            })
                          }
                          className="form-control "
                          id="cemail"
                          type="date"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label for="curl" className="control-label col-lg-2">
                        Giá
                      </label>
                      <div className="col-lg-10">
                        <input
                          value={this.state.price}
                          onChange={(e) =>
                            this.setState({
                              price: e.target.value,
                            })
                          }
                          className="form-control "
                          id="curl"
                          type="text"
                          name="url"
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label for="cname" className="control-label col-lg-2">
                        Miêu Tả <span className="required">*</span>
                      </label>
                      <div className="col-lg-10">
                        <input
                          value={this.state.describe}
                          onChange={(e) =>
                            this.setState({
                              describe: e.target.value,
                            })
                          }
                          className="form-control"
                          id="subject"
                          name="subject"
                          minlength="5"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label for="comment " className="control-label col-lg-2">
                        Thể Loại
                      </label>
                      <div className="btn-group col-lg-10">
                        <button
                          style={{ width: "200px" }}
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-toggle="dropdown">
                          {this.state.category} <span className="caret" />
                        </button>
                        <ul className="dropdown-menu" role="menu">
                          {this.renderMenuCategory()}
                        </ul>
                      </div>
                    </div>
                    <div className="form-group ">
                      <label for="comment" className="control-label col-lg-2">
                        Tác Giả
                      </label>
                      <div className="btn-group col-lg-10">
                        <button
                          style={{ width: "200px" }}
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-toggle="dropdown">
                          {this.state.author} <span className="caret" />
                        </button>
                        <ul className="dropdown-menu" role="menu">
                          {this.renderMenuAuthor()}
                        </ul>
                      </div>
                    </div>
                    <div className="form-group ">
                      <label for="comment" className="control-label col-lg-2">
                        Nhà Xuất Bản
                      </label>
                      <div className="btn-group col-lg-10">
                        <button
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-toggle="dropdown"
                          style={{ width: "200px" }}>
                          {this.state.publisher} <span className="caret" />
                        </button>
                        <ul className="dropdown-menu" role="menu">
                          {this.renderMenuPublisher()}
                        </ul>
                      </div>
                    </div>
                    <div className="form-group ">
                      <label for="comment" className="control-label col-lg-2">
                        Chọn ảnh{" "}
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control "
                          type="file"
                          id="ccomment"
                          name="comment"
                          required
                          onChange={(e) =>
                            this.handleChangeImg(e.target.files[0])
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label for="comment" className="control-label col-lg-2">
                        Ảnh
                      </label>
                      <div className="col-lg-10">
                        <img
                          src={this.state.img}
                          style={{ maxWidth: "300px" }}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-lg-offset-2 col-lg-10">
                        <p>{this.state.noti}</p>
                      </div>
                    </div>
                    {this.renderBtnSubmit()}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div> */}
      </section>
    );
  }
}
export default Book;
