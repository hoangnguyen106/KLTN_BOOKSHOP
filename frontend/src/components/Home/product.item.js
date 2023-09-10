import React from "react";
import { Link } from "react-router-dom";
const ProductItem = ({ urlImg, price, name, id, book, addToCart }) => (
  <div className="col-sm-4">
    {/* <div className="product-image-wrapper">
      <div className="single-products">
        <div className="productinfo text-center">
          <Link to={"/product/" + id}>
            <img src={urlImg} alt="" />
          </Link>
          <h4 className="name-product">{name}</h4>
          <div className="product-content">
            <h2>Giá:</h2>
            <Link to={"/product/" + id}>
              <h2>
                {new Intl.NumberFormat("de-DE", { currency: "EUR" }).format(
                  price
                )}
                <sup>đ</sup>
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div> */}

    <div className="card border-0 rounded-0 shadow" style={{ width: "100%" }}>
      <Link to={"/product/" + id}>
        <img src={urlImg} className="card-img-top rounded-0" alt="..." />
      </Link>
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <h4 className="card-title">{name}</h4>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <h4 className="card-title text-danger">
              {" "}
              <Link to={"/product/" + id}>
                <h4>
                  {new Intl.NumberFormat("de-DE", { currency: "EUR" }).format(
                    price
                  )}
                  <sup>đ</sup>
                </h4>
              </Link>
            </h4>
          </div>
        </div>
      </div>

      {/* <div className="col-12 d-flex justify-content-start align-align-items-center">
        {" "}
        <Link to={"/product/" + id}>
          <h4>
            {new Intl.NumberFormat("de-DE", { currency: "EUR" }).format(price)}
            <sup>đ</sup>
          </h4>
        </Link>
      </div> */}
      <div className="col-12 d-flex">
        <div className="col-6"></div>
        <div className="col-6 ">
          <Link to={"/product/" + id}>
            <a className="btn btn-dark w-100 p-3 rounded-0 text-warning justify-content-end">
              Xem chi tiết
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
export default ProductItem;
