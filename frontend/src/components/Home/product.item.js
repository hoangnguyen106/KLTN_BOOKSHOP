import React from "react";
import { Link } from "react-router-dom";
const ProductItem = ({ urlImg, price, name, id, book, addToCart }) => (
  // <div className="col-sm-4">

  //   <div className="card border-0 rounded-0 shadow" style={{ width: "100%" }}>
  //     <Link to={"/product/" + id}>
  //       <img src={urlImg} className="card-img-top rounded-0" alt="..." />
  //     </Link>
  //     <div className="card-body">
  //       <div className="row">
  //         <div className="col-12">
  //           <h4 className="card-title">{name}</h4>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="card-body">
  //       <div className="row">
  //         <div className="col-12">
  //           <h4 className="card-title text-danger">
  //             {" "}
  //             <Link to={"/product/" + id}>
  //               <h4>
  //                 {new Intl.NumberFormat("de-DE", { currency: "EUR" }).format(
  //                   price
  //                 )}
  //                 <sup>đ</sup>
  //               </h4>
  //             </Link>
  //           </h4>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="col-12 d-flex justify-content-start align-align-items-center">
  //       {" "}
  //       <Link to={"/product/" + id}>
  //         <h4>
  //           {new Intl.NumberFormat("de-DE", { currency: "EUR" }).format(price)}
  //           <sup>đ</sup>
  //         </h4>
  //       </Link>
  //     </div>
  //     <div className="col-12 d-flex">
  //       <div className="col-6"></div>
  //       <div className="col-6 ">
  //         <Link to={"/product/" + id}>
  //           <a className="btn btn-dark w-100 p-3 rounded-0 text-warning justify-content-end">
  //             Xem chi tiết
  //           </a>
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <div className="col-4">
    <div className="product-card mb-3" style={{ height: "97%" }}>
      {/* <div className="wishlist-icon position-absolute">
        <Link to={"/product/" + id}>
          <img src={urlImg} alt="" />
        </Link>
      </div> */}
      <div className="product-image" style={{ height: "63%" }}>
        <img
          src={urlImg}
          className="img-fluid"
          style={{ objectFit: "fill" }}
          alt="product image"
        />
      </div>
      <div className="product-details">
        <h4 className="brand">{name}</h4>
        <p
          className="price"
          style={{
            marginTop: "10px",
          }}>
          <Link to={"/product/" + id}>
            <h4>
              {new Intl.NumberFormat("de-DE", { currency: "EUR" }).format(
                price
              )}
              <sup>đ</sup>
            </h4>
          </Link>
        </p>
        <div>
          <Link to={"/product/" + id}>
            <a className="btn btn-dark w-100 p-3 rounded-0 text-warning justify-content-end">
              Xem chi tiết{" "}
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
export default ProductItem;
