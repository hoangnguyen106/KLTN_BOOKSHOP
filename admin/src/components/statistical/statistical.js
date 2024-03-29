import React, { Component } from "react";

class Statistical extends Component {
  flatOptions = {
    altInput: true,
    altFormat: 'Y'
  }
  constructor() {
    super();
    this.state = {
      billNumberDay: null,
      productNumberDay: null,
      UserNumberDay: null,
      totalDay: null,
      billNumberMonth: null,
      productNumberMonth: null,
      UserNumberMonth: null,
      totalMonth: null,
      year: "",
      notiGetYear: "",
      billNumberYear: null,
      productNumberYear: null,
      UserNumberYear: null,
      totalYear: null,
      yearQuauter: "",
      quauter: "",
      notiYearQuauter: "",
      notiQuauter: "",
      billNumberQuauter: null,
      productNumberQuauter: null,
      UserNumberQuauter: null,
      totalQuauter: null
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.dataByDay !== this.props.dataByDay) {
      this.setState({
        billNumberDay: nextProps.dataByDay.length,
        productNumberDay: this.calculatorProductNumber(nextProps.dataByDay),
        UserNumberDay: this.calculatorUserNumber(nextProps.dataByDay),
        totalDay: this.calculatorTotal(nextProps.dataByDay)
      });
    }
    if (nextProps.dataByMonth !== this.props.dataByMonth) {
      this.setState({
        billNumberMonth: nextProps.dataByMonth.length,
        productNumberMonth: this.calculatorProductNumber(nextProps.dataByMonth),
        UserNumberMonth: this.calculatorUserNumber(nextProps.dataByMonth),
        totalMonth: this.calculatorTotal(nextProps.dataByMonth)
      });
    }
    if (nextProps.dataByYear !== this.props.dataByYear) {
      this.setState({
        billNumberYear: nextProps.dataByYear.length,
        productNumberYear: this.calculatorProductNumber(nextProps.dataByYear),
        UserNumberYear: this.calculatorUserNumber(nextProps.dataByYear),
        totalYear: this.calculatorTotal(nextProps.dataByYear)
      });
    }
    if (nextProps.dataByQuauter !== this.props.dataByQuauter) {
      this.setState({
        billNumberQuauter: nextProps.dataByQuauter.length,
        productNumberQuauter: this.calculatorProductNumber(nextProps.dataByQuauter),
        UserNumberQuauter: this.calculatorUserNumber(nextProps.dataByQuauter),
        totalQuauter: this.calculatorTotal(nextProps.dataByQuauter)
      });
    }
  }
  calculatorTotal = bills => {
    let total = 0;
    for (let i = 0; i < bills.length; i++) {
      for (let k = 0; k < bills[i].products.length; k++) {
        total += parseInt(
          bills[i].products[k].count * parseInt(bills[i].products[k].price)
        );
      }
    }
    return total;
  };
  calculatorProductNumber = bills => {
    let total = 0;
    for (let i = 0; i < bills.length; i++) {
      for (let k = 0; k < bills[i].products.length; k++) {
        total += parseInt(bills[i].products[k].count);
      }
    }
    return total;
  };
  calculatorUserNumber = bills => {
    let arr = [];
    for (let i = 0; i < bills.length; i++) {
      if (arr.indexOf(bills.id_user) === -1) {
        arr.push(bills.id_user);
      }
    }
    return arr.length;
  };
  handleGetStatisticalByYear = () => {
    let year = this.state.year;
    let check = true;
    if (year.length === 0) {
      this.setState({ notiGetYear: "Please enter Year" });
      return;
    } else {
      this.setState({ notiGetYear: "" });
    }
    for (let i = 0; i < year.length; i++) {
      if (year.charAt(i) < "0" || year.charAt(i) > "9") {
        check = false;
        break;
      }
    }
    if (check === false) {
      this.setState({ notiGetYear: "Year invalid" });
      return;
    } else {
      this.setState({ notiGetYear: "" });
    }
    if (parseInt(year) < 1990 || parseInt(year) > 3000) {
      this.setState({
        notiGetYear: "Year range 1990 - 3000"
      });
      return;
    } else {
      this.setState({ notiGetYear: "" });
    }
    this.props.getStatisticalByYear(year);
  };
  handleGetStatisticalByQuauter = () => {
    let year = this.state.yearQuauter;
    let quauter = this.state.quauter;
    let check = true;
    if (year.length === 0) {
      this.setState({
        notiYearQuauter: "Please enter year"
      });
      check = false;
    } else {
      this.setState({
        notiYearQuauter: ""
      });
    }
    if (quauter.length === 0) {
      this.setState({
        notiQuauter: "Please enter quauter"
      });
      check = false;
    } else {
      this.setState({
        notiQuauter: ""
      });
    }
    if (check === false) {
      return;
    }
    check = true;
    for (let i = 0; i < year.length; i++) {
      if (year.charAt(i) < "0" || year.charAt(i) > "9") {
        check = false;
        break;
      }
    }
    if (check === false) {
      this.setState({ notiYearQuauter: "Year invalid" });
      return;
    } else {
      this.setState({ notiYearQuauter: "" });
    }
    if (parseInt(year) < 1990 || parseInt(year) > 3000) {
      this.setState({
        notiYearQuauter: "Year range 1990 - 3000"
      });
      return;
    } else {
      this.setState({ notiYearQuauter: "" });
    }

    check = true;
    for (let i = 0; i < quauter.length; i++) {
      if (quauter.charAt(i) < "0" || quauter.charAt(i) > "9") {
        check = false;
        break;
      }
    }
    if (check === false) {
      this.setState({ notiQuauter: "Quauter invalid" });
      return;
    } else {
      this.setState({ notiQuauter: "" });
    }
    if (parseInt(quauter) < 1 || parseInt(quauter) > 4) {
      this.setState({
        notiQuauter: "Year range 1 - 4"
      });
      return;
    } else {
      this.setState({ notiQuauter: "" });
    }
    this.props.getStatisticalByQuauter(year, quauter);
  };
  render() {
    return (
      <section id="main-content">
        <section class="wrapper">
          <div class="row">
            <div class="col-lg-12">
              <h3 class="page-header">
                <i class="fa fa-table" /> Thống Kê
              </h3>
              <ol class="breadcrumb">
                <li>
                  <i class="fa fa-home" />
                  <a href="index.html">Trang Chủ</a>
                </li>
                <li>
                  <i class="fa fa-table" />Thống Kê
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <section className="panel">
                <header className="panel-heading">
                  Thống Kê Theo Ngày
                  <input
                    type="date"
                    style={{
                      marginLeft: "10px",
                      height: "30px",
                      backgroundColor: "#F7F7F7",
                      borderRadius: "5px",
                      outline:"none",
                      border: "2px solid rgb(142 186 199 / 1)"
                    }}
                    onChange={e =>
                      this.props.getStatisticalByDay(e.target.value)
                    }
                  />
                </header>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                      <th>Số Đơn Hàng</th>
                        <th>Số Sản Phẩm </th>
                        <th>Số Người Mua</th>
                        <th>Tổng Thu</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{this.state.billNumberDay}</td>
                        <td>{this.state.productNumberDay}</td>
                        <td>{this.state.UserNumberDay}</td>
                        <td>{new Intl.NumberFormat('de-DE', {currency: 'EUR' }).format(this.state.totalDay)}<sup>đ</sup></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <section className="panel">
                <header className="panel-heading">
                  Thống Kê Theo Tháng
                  <input
                    type="month"
                    style={{
                      marginLeft: "10px",
                      height: "30px",
                      backgroundColor: "#F7F7F7",
                      borderRadius: "5px",
                      outline:"none",
                      border: "2px solid rgb(142 186 199 / 1)"
                    }}
                    onChange={e =>
                      this.props.getStatisticalByMonth(e.target.value)
                    }
                  />
                </header>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                      <th>Số Đơn Hàng</th>
                        <th>Số Sản Phẩm </th>
                        <th>Số Người Mua</th>
                        <th>Tổng Thu</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{this.state.billNumberMonth}</td>
                        <td>{this.state.productNumberMonth}</td>
                        <td>{this.state.UserNumberMonth}</td>
                        <td>{new Intl.NumberFormat('de-DE', {currency: 'EUR' }).format(this.state.totalMonth)}<sup>đ</sup></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <section className="panel">
                <header className="panel-heading">
                  Thống Kê Theo Năm
                  <input
                    type="text" name="datepicker" id="datepicker"
                    style={{
                      marginLeft: "10px",
                      height: "30px",
                      backgroundColor: "#F7F7F7",
                      borderRadius: "5px",
                      outline:"none",
                      border: "2px solid rgb(142 186 199 / 1)"
                    }}
                    min="1600"
                    onKeyDown={e => {
                      if (e.keyCode === 13) {
                        this.handleGetStatisticalByYear();
                      }
                    }}
                    onChange={e => this.setState({ year: e.target.value })}
                  />
                  <span style={{ marginLeft: "50px" }}>
                    {this.state.notiGetYear}
                  </span>
                </header>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Số Đơn Hàng</th>
                        <th>Số Sản Phẩm </th>
                        <th>Số Người Mua</th>
                        <th>Tổng Thu</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{this.state.billNumberYear}</td>
                        <td>{this.state.productNumberYear}</td>
                        <td>{this.state.UserNumberYear}</td>
                        <td>{new Intl.NumberFormat('de-DE', {currency: 'EUR' }).format(this.state.totalYear)}<sup>đ</sup></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
      
        </section>
      </section>
    );
  }
}

export default Statistical;
