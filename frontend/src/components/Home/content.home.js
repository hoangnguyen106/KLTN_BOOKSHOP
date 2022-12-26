import React, { Component } from "react";
import ProductItem from "./product.item";
import NoProduct from "./noProduct";
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
            check_5: false
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
                                    onClick={() => this.props.setPage(element)}
                                >
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
            check_5: false
        });
    };

    render() {
        console.log("boookkkkkkkkkkkkkkkkkkkk", this.props.book)
        return (
            <section>
                <div className="container">
                    <div className="row content-home">
                        <div className="col-sm-3">
                            <div className="left-sidebar">
                                <h2>Thể loại</h2>
                                <div className="panel-group category-products" id="accordian">
                                    {this.props.category.map((element, index) => {
                                        return (
                                            <div
                                                key={index}
                                                onClick={() => {
                                                    this.resetCheck()
                                                    this.props.setTitle(element.name);
                                                    this.props.setBranch("category");
                                                    this.props.setIDBranch(element._id);
                                                    this.props.branchClick("category", element._id);
                                                }}
                                                className="panel panel-default"
                                            >
                                                <div className="panel-heading">
                                                    <h4 className="panel-title item-custom">
                                                        <a key={index}>{element.name}</a>
                                                    </h4>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="price-range">
                                    <h2>Giá tiền</h2>
                                    <div className="well ">
                                        <div className="radio">
                                            <label
                                                onClick={() => {
                                                    this.props.setRangeType(null);
                                                    this.resetCheck();
                                                    this.setState({ check_1: true });
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="optradio"
                                                    checked={this.state.check_1}
                                                />Tất cả giá
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label
                                                onClick={() => {
                                                    this.props.setRangeType({ low: 0, high: 50000 });
                                                    this.resetCheck();
                                                    this.setState({ check_2: true });
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="optradio"
                                                    checked={this.state.check_2}
                                                />0 --{">"} 50.000
                                            </label>
                                        </div>
                                        <div className="radio ">
                                            <label
                                                onClick={() => {
                                                    this.props.setRangeType({ low: 50000, high: 100000 });
                                                    this.resetCheck();
                                                    this.setState({ check_3: true });
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="optradio"
                                                    checked={this.state.check_3}
                                                />50.000 --{">"} 100.000
                                            </label>
                                        </div>
                                        <div className="radio ">
                                            <label
                                                onClick={() => {
                                                    this.resetCheck();
                                                    this.setState({ check_4: true });
                                                    this.props.setRangeType({ low: 100000, high: 150000 });
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="optradio"
                                                    checked={this.state.check_4}
                                                />100.000 --{">"} 150.000
                                            </label>
                                        </div>
                                        <div className="radio ">
                                            <label
                                                onClick={() => {
                                                    this.props.setRangeType({ low: 150000, high: 1500000 });
                                                    this.resetCheck();
                                                    this.setState({ check_5: true });
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="optradio"
                                                    checked={this.state.check_5}
                                                />{" "}
                                                {">"}= 150.000
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-9 padding-right">
                            <div className="features_items">
                                <h2 className="title text-center">
                                    {this.props.title}
                                </h2>

                                {
                                    this.props.book.map((element, index) => {
                                        if (element) {

                                            return (
                                                <ProductItem
                                                    book={element}
                                                    urlImg={element.img}
                                                    price={element.price}
                                                    describe={element.describe}
                                                    id={element._id}
                                                    name={element.name}
                                                    addToCart={product => this.props.addToCart(product)}
                                                />
                                            );
                                        }
                                        else {
                                            return (
                                                <NoProduct />
                                            )
                                        }

                                    })
                                }
                            </div>
                            <div className='Pagination-flex'>{this.renderPagination()}</div>
                        </div>
                    </div>
                </div>
                <div class="float-icon-hotline">			
                        <ul class ="left-icon hotline">
                            <li class="hotline_float_icon"><a target="_blank" rel="nofollow" id="messengerButton" href="https://zalo.me/0327722937"><i class="fa fa-zalo animated infinite tada"></i><span>Zalo</span></a></li>
                            <li class="hotline_float_icon"><a target="_blank" rel="nofollow" id="messengerButton" href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.messenger.com%2Fdesktop%2Flaunch%2F%3Ffunnel_session_id%3D1897cb23-7688-496c-95be-be683bd005f5%26id%3D100016798569242%26origin%3DFB%26fbclid%3DIwAR1qlWqF1BMOqCWk1YMgQ2OTdUIA_V4d-TnlhQ9GYFDPEryO742-gXtuqVI&h=AT1ZQc1BLJwgYvJ9TBIKZD6G13N3zPyTV76f5RloDaWrQO6qx8dkjjIFGh9W7ZjCoXjbiHqdFYB92pLpRGzmIhYhN3OL_BpppgevL9jVR_NDHuQzbj6PXPnMtq5LzpJbDwmVNA"><i class="fa fa-messenger animated infinite tada"></i><span>Facebook</span></a></li>
                        </ul>		
                    </div>
            </section>
        );
    }
}
export default ContentHome;