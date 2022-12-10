import React, { Component } from "react";
// import HeaderTop from "../header/header.top";
import HeaderMiddle from "../Header/header.middle";
// import HeaderBottom from "../Header/header.bottom";
import ContentCart from "./content.cart";
import Footer from "../Footer/footer";
class Cart extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <header id="header">
          <HeaderMiddle
            islogin={this.props.islogin}
            logout={() => this.props.logout()}
            history={this.props.history}
          />
        </header>
        <ContentCart
          islogin={this.props.islogin}
          cart={this.props.cart}
          updateProductInCart={product =>
            this.props.updateProductInCart(product)
          }
          deteleProductInCart={(id_product) => this.props.deteleProductInCart(id_product)}
    
       
          payment={( address, phone, name,total) => 
            this.props.payment( address, phone, name,total)}
          ispay={this.props.ispay}
        />
        <footer id="footer">
          <Footer/>
        </footer>
      </div>
    );
  }
}
export default Cart;