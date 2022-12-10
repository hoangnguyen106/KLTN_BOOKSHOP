import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import HeaderMiddle from "../Header/header.middle";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notiUpdateInfor: "",
      oldPassword: "",
      newPassword: "",
      confirm: "",
      notiUpdatePassword: '',
      profile: false
    };
    this.handleClickprofile = this.handleClickprofile.bind(this);
    this.handleClickpassword = this.handleClickpassword.bind(this);

  }
  componentWillMount() {
    if (this.props.isupdate) {
      this.setState({ notiUpdateInfor: "Cập nhật thành công" });
    } else if (this.props.isupdate === false) {
      this.setState({ notiUpdateInfor: "Cập nhật thất bại" });
    } else {
      this.setState({ notiUpdateInfor: "" });
    }
  }
  handleClickprofile(){
    this.setState({
      profile: false
    })
  }
  handleClickpassword(){
    this.setState({
      profile: true
    })
  }
  handeSearch = (e) => {
    if(e === 13) {
        this.props.handleUpdatePassword()
    }
}
  componentWillReceiveProps(nextProps) {
    if (nextProps.isupdate === true) {
       this.setState({ notiUpdateInfor: "Cập nhật thành công" });
    } else if (nextProps.isupdate === false) {
       this.setState({ notiUpdateInfor: "Cập nhật thất bại" });
    } else {
       this.setState({ notiUpdateInfor: "" });
    }
    if(nextProps.notiupdatePassword !== this.props.notiupdatePassword && nextProps.notiupdatePassword === true) {
      this.setState({
        notiUpdatePassword: "Cập nhật mật khẩu mới thành công"
      })
      this.setState({
        oldPassword: '',
        newPassword: '',
        confirm: ''
      })
      this.props.resetUpdatePassword()
    } 
    if(nextProps.notiupdatePassword !== this.props.notiupdatePassword && nextProps.notiupdatePassword === false) {
      this.setState({
        notiUpdatePassword: "Cập nhật mật khẩu mới thất bại"
      })
      this.props.resetUpdatePassword()
    } 
  }
  handleUpdatePassword() {
    if(this.state.newPassword.length === 0 && this.state.oldPassword.length === 0 && this.state.confirm.length === 0){
      this.setState({notiUpdatePassword: 'Không được để trống các trường trên'})
      return
    }
    if(this.state.newPassword.length < 6) {
      this.setState({notiUpdatePassword: 'Mật khẩu mới phải lớn hơn 6 ký tự'})
      return
    } else {
      this.setState({notiUpdatePassword: ''})
    }
    if(this.state.confirm.length < 6) {
      this.setState({notiUpdatePassword: 'Nhập lại mật khẩu không đúng'})
      return
    } else {
      this.setState({notiUpdatePassword: ''})
    }
    if(this.state.newPassword === this.state.oldPassword) {
      this.setState({notiUpdatePassword: 'Mật khẩu mới không được trùng với mật khẩu cũ'})
      return
    }
    this.props.updatePassword(this.state.oldPassword, this.state.newPassword)
  }
 
  render() {
    let xhtml = <div className='login-form'>
     <div className = 'login-content col-sm-6'>
    <div className="shopper-info">
      <p>Thông tin tài khoản</p>
      <p className="error">{this.state.notiUpdateInfor}</p>
      <input
        type="text"
        disabled
        placeholder="Email"
        value={this.props.email}
      />
      <input
        type="text"
        placeholder="Họ"
        value={this.props.firstName}
        onChange={e => this.props.setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tên"
        value={this.props.lastName}
        onChange={e => this.props.setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Địa chỉ"
        value={this.props.address}
        onChange={e => this.props.setAddress(e.target.value)}
      />
      <input
        type="tell"
        placeholder="Số điện thoại"
        value={this.props.phone_number}
        onChange={e => this.props.setPhoneNumber(e.target.value)}
      />
      <button
        onClick={() => this.props.updateInfor()}
        className="btn btn-default"
      >
       Cập nhật
      </button>
    </div>
  </div>
  </div>
if(this.state.profile){
  xhtml =   <div className='login-form'>
  <div className = 'login-content col-sm-6'>
  <div className="shopper-info">
  
    <p>Thay đổi mật khẩu</p>
    <p className="error">{this.state.notiUpdatePassword}</p>
    <input
      value={this.state.oldPassword}
      onChange={e =>
        this.setState({ oldPassword: e.target.value })
      }
      type="password"
      placeholder="Nhập vào mật khâu cũ"
    />
    <input
    value={this.state.newPassword}
      onChange={e =>
        this.setState({ newPassword: e.target.value })
      }
      type="password"
      placeholder="Nhập vào mật khẩu mới"
    />
    <input

    value={this.state.confirm}
      onChange={e => this.setState({ confirm: e.target.value })}
      type="password"
      placeholder="Nhập lại mật khẩu mới"
    />
    <button onClick={() => this.handleUpdatePassword()}
    className="btn btn-default">Cập nhật mật khẩu</button>
  </div>
  </div>
</div>
}
    return (
      <div>
        <header id="header">
         
          <HeaderMiddle
            islogin={this.props.islogin}
            logout={() => this.props.logout()}
            history={this.props.history}
          />
        </header>
        <section id="cart_items " className='homePage'> 
          <div className="container">
          <div className='menu-profile'>
                <ul>
                  <li><button onClick={()=>this.handleClickprofile()} className='menu-custom btn'>Thông Tin Tài Khoản</button></li>
                  <li> <button onClick={()=>this.handleClickpassword()}  className='menu-custom btn'>Thay Đổi Mật Khẩu</button></li>
                </ul>
                <hr></hr>
              </div>
            <div className="shopper-informations">
              <div>
                {xhtml}
                
              </div>
            </div>
          </div>
        </section>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}
export default Profile;