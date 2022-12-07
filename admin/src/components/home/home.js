import React, { Component } from "react";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      sum: 1000,
      productNumber:null,
    };
  }
  tinh(count) {
    return (count / this.state.sum) * 100 + "%";
  }
  // componentWillReceiveProps(nextProps) {    
  //   this.setState({
  //       toatalProduct: this.toatalProducts(nextProps.dataByTotal),
  //   });   
  // }
  // toatalProducts = bills => {
  //   let total = 0;
  //   for (let i = 0; i < bills.length; i++) {
  //     for (let k = 0; k < bills[i].products.length; k++) {
  //       total += parseInt(bills[i].products[k].count);
  //     }
  //   }
  //   return total;
  // };
  render() {
    return (
      <div>
        <section id="main-content">
          <section className="wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="page-header">
                  <i className="fa fa-laptop" /> Tổng Quan
                </h3>
                <ol className="breadcrumb">
                  <li>
                    <i className="fa fa-home" />
                    <a href="index.html">Trang Chủ</a>
                  </li>
                  <li>
                    <i className="fa fa-laptop" />Tổng Quan
                  </li>
                </ol>
              </div>
            </div>
            
            
            

            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="panel panel-default">
                  
                  <div className="panel-body">
                    <table className="table bootstrap-datatable countries">
                      <thead>
                        <tr>
                          <th />
                          <th>Tên Sản Phẩm</th>
                          <th>Giá Tiền</th>
                          <th>Số Lượng Đã Bán</th>
                          <th>Hiệu Xuất</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.top_product.map((element, index) => {
                          return(
                            <tr>
                            <td>
                              <div className='home-image'>
                                <img
                                  src={element.img}
                                  
                                />
                              </div>
                              
                            </td>
                            <td>{element.name}</td>
                            <td>{new Intl.NumberFormat('de-DE', {currency: 'EUR' }).format(element.price)}<sup>đ</sup></td>
                            <td>{element.count}</td>
                            <td>
                              <div className="progress thin">
                                <div
                                  className="progress-bar progress-bar-info progress-bar-striped"
                                  role="progressbar"
                                  aria-valuenow="0"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: this.tinh(element.count) }}
                                />
                              </div>
                              <span className="sr-only"></span>
                            </td>
                          </tr>
                          ) 
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              
            
            </div>

         
            <br />
   

          </section>
          
        </section>
      </div>
    );
  }
}
export default Home;
