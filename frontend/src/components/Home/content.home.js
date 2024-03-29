import React, { Component } from "react";
import ProductItem from "./product.item";
import { Link } from "react-router-dom";
class ContentHome extends Component {
  constructor(props) {
    console.log("props =>>>>", props);
    super(props);
    this.state = {
      pagination: [],
      check_1: true,
      check_2: false,
      check_3: false,
      check_4: false,
      check_5: false,
    };
  }
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
  }
  renderPagination() {
    if (this.state.pagination.length === 0) {
      return null;
    } else {
      return (
        <ul className="pagination pagination-custom">
          <li onClick={() => this.props.backPage()}>
            <Link to="/">&laquo;</Link>
          </li>
          {this.state.pagination.map((element, index) => {
            if (this.props.page === element) {
              return (
                <li
                  className="active"
                  onClick={() => this.props.setPage(element)}>
                  <Link to="/">{element}</Link>
                </li>
              );
            } else {
              return (
                <li onClick={() => this.props.setPage(element)}>
                  <Link to="/">{element}</Link>
                </li>
              );
            }
          })}
          <li onClick={() => this.props.nextPage()}>
            <Link to="/">&raquo;</Link>
          </li>
        </ul>
      );
    }
  }
  resetCheck = () => {
    this.setState({
      check_1: false,
      check_2: false,
      check_3: false,
      check_4: false,
      check_5: false,
    });
  };
  render() {
    return (
      // <section>
      //   <div className="container">
      //     <div className="row content-home">
      //       <div className="col-sm-3 mt-2">
      //         <div className="left-sidebar">
      //           <h2>Thể loại</h2>
      //           <div className="panel-group category-products" id="accordian">
      //             <div className="panel panel-default">
      //               <div
      //                 className="panel-heading"
      //                 onClick={(e) => {
      //                   this.resetCheck();
      //                   this.props.setTitle("ALL BOOK");
      //                   this.props.branchClick("", e._id);
      //                 }}>
      //                 <h4 className="panel-title item-custom">
      //                   <a>Tất cả</a>
      //                 </h4>
      //               </div>
      //             </div>
      //             {this.props.category.map((element, index) => {
      //               return (
      //                 <div
      //                   key={index}
      //                   onClick={() => {
      //                     this.resetCheck();
      //                     this.props.setTitle(element.name);
      //                     this.props.setBranch("category");
      //                     this.props.setIDBranch(element._id);
      //                     this.props.branchClick("category", element._id);
      //                   }}
      //                   className="panel panel-default">
      //                   <div className="panel-heading">
      //                     <h4 className="panel-title item-custom">
      //                       <a key={index}>{element.name}</a>
      //                     </h4>
      //                   </div>
      //                 </div>
      //               );
      //             })}
      //           </div>

      //           <div className="price-range">
      //             <h2>Giá tiền</h2>
      //             <div className="well ">
      //               <div className="radio">
      //                 <label
      //                   onClick={() => {
      //                     this.props.setRangeType(null);
      //                     this.resetCheck();
      //                     this.setState({ check_1: true });
      //                   }}>
      //                   <input
      //                     type="radio"
      //                     name="optradio"
      //                     checked={this.state.check_1}
      //                   />
      //                   Tất cả giá
      //                 </label>
      //               </div>
      //               <div className="radio">
      //                 <label
      //                   onClick={() => {
      //                     this.props.setRangeType({ low: 0, high: 50000 });
      //                     this.resetCheck();
      //                     this.setState({ check_2: true });
      //                   }}>
      //                   <input
      //                     type="radio"
      //                     name="optradio"
      //                     checked={this.state.check_2}
      //                   />
      //                   0 --{">"} 50.000
      //                 </label>
      //               </div>
      //               <div className="radio ">
      //                 <label
      //                   onClick={() => {
      //                     this.props.setRangeType({ low: 50000, high: 100000 });
      //                     this.resetCheck();
      //                     this.setState({ check_3: true });
      //                   }}>
      //                   <input
      //                     type="radio"
      //                     name="optradio"
      //                     checked={this.state.check_3}
      //                   />
      //                   50.000 --{">"} 100.000
      //                 </label>
      //               </div>
      //               <div className="radio ">
      //                 <label
      //                   onClick={() => {
      //                     this.resetCheck();
      //                     this.setState({ check_4: true });
      //                     this.props.setRangeType({
      //                       low: 100000,
      //                       high: 150000,
      //                     });
      //                   }}>
      //                   <input
      //                     type="radio"
      //                     name="optradio"
      //                     checked={this.state.check_4}
      //                   />
      //                   100.000 --{">"} 150.000
      //                 </label>
      //               </div>
      //               <div className="radio ">
      //                 <label
      //                   onClick={() => {
      //                     this.props.setRangeType({
      //                       low: 150000,
      //                       high: 1500000,
      //                     });
      //                     this.resetCheck();
      //                     this.setState({ check_5: true });
      //                   }}>
      //                   <input
      //                     type="radio"
      //                     name="optradio"
      //                     checked={this.state.check_5}
      //                   />{" "}
      //                   {">"}= 150.000
      //                 </label>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>

      //       <div className="col-sm-9 padding-right">
      //         <div className="features_items">
      //           <h2 className="title text-center">{this.props.title}</h2>
      //           {this.props.book.map((element, index) => {
      //             return (
      //               <ProductItem
      //                 book={element}
      //                 urlImg={element.img}
      //                 price={element.price}
      //                 describe={element.describe}
      //                 id={element._id}
      //                 name={element.name}
      //                 addToCart={(product) => this.props.addToCart(product)}
      //               />
      //             );
      //           })}
      //         </div>
      //         <div className="Pagination-flex">{this.renderPagination()}</div>
      //       </div>
      //     </div>
      //   </div>
      // </section>

      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Thể loại</h3>
                <div>
                  <ul className="ps-0">
                    <li
                      className="panel panel-default"
                      onClick={(e) => {
                        this.resetCheck();
                        this.props.setTitle("ALL BOOK");
                        this.props.branchClick("", e._id);
                      }}>
                      <div className="panel-heading">
                        <h4 className="panel-title item-custom">
                          <a>Tất cả</a>
                        </h4>
                      </div>
                    </li>
                    {this.props.category.map((element, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => {
                            this.resetCheck();
                            this.props.setTitle(element.name);
                            this.props.setBranch("category");
                            this.props.setIDBranch(element._id);
                            this.props.branchClick("category", element._id);
                          }}
                          className="panel panel-default">
                          <div className="panel-heading">
                            {" "}
                            <h4 className="panel-title item-custom">
                              <a key={index}>{element.name}</a>{" "}
                            </h4>{" "}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Bộ lọc</h3>
                <div>
                  <h5 className="sub-title">Giá</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="radio"
                        name="optradio"
                        checked={this.state.check_1}
                      />
                      <label
                        onClick={() => {
                          this.props.setRangeType(null);
                          this.resetCheck();
                          this.setState({ check_1: true });
                        }}
                        htmlFor="my-input"
                        className="form-check-label">
                        Tất cả giá
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        name="optradio"
                        checked={this.state.check_2}
                      />
                      <label
                        onClick={() => {
                          this.props.setRangeType({ low: 0, high: 50000 });
                          this.resetCheck();
                          this.setState({ check_2: true });
                        }}
                        htmlFor="my-input"
                        className="form-check-label">
                        Từ 0đ đến 50.000đ
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        name="optradio"
                        checked={this.state.check_3}
                      />
                      <label
                        onClick={() => {
                          this.props.setRangeType({ low: 50000, high: 100000 });
                          this.resetCheck();
                          this.setState({ check_3: true });
                        }}
                        htmlFor="my-input"
                        className="form-check-label">
                        Từ 50.000đ đến 100.000đ
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        name="optradio"
                        checked={this.state.check_4}
                      />
                      <label
                        onClick={() => {
                          this.resetCheck();
                          this.setState({ check_4: true });
                          this.props.setRangeType({
                            low: 100000,
                            high: 150000,
                          });
                        }}
                        htmlFor="my-input"
                        className="form-check-label">
                        Từ 100.000đ đến 150.000đ
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        name="optradio"
                        checked={this.state.check_5}
                      />
                      <label
                        onClick={() => {
                          this.props.setRangeType({
                            low: 150000,
                            high: 1500000,
                          });
                          this.resetCheck();
                          this.setState({ check_5: true });
                        }}
                        htmlFor="my-input"
                        className="form-check-label">
                        Từ 150.000đ trở lên
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                {this.props.book.map((element, index) => {
                  return (
                    <ProductItem
                      book={element}
                      urlImg={element.img}
                      price={element.price}
                      describe={element.describe}
                      id={element._id}
                      name={element.name}
                      addToCart={(product) => this.props.addToCart(product)}
                    />
                  );
                })}
              </div>
              <div className="Pagination-flex mt-3">{this.renderPagination()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContentHome;
