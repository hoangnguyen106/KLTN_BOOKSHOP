import React, { Component } from "react";
import { Link } from "react-router-dom";
class EnterNewPassword extends Component {
  constructor() {
    super();
    this.state = {
        newpassword: '',
        confirm: '',
        noti:''
    }
  }
  handleSubmit() {
    if(this.state.newpassword.length < 6) {
        this.setState({noti:'Password must contain at least 6 characters'})
        return
    } else {
        this.setState({noti: ''})
    }
    if(this.state.confirm !== this.state.newpassword) {
        this.setState({
            noti: 'Confirm invalid'
        })
        return
    } else {
        this.setState({noti: ''})
    }
    this.props.submitEnterNewPassword();
  }
  render() {
    return (
      <div className="container text-center">
        <div className="logo-404">
        <div className='null-cart'>
			    <Link to="/"><img src="/assets/images/home/logo1.gif" alt="" /></Link>
          </div>
        </div>
        <div className="content-404 forgotpass">
          <h1>
            <b>Vui lòng nhập mật khẩu bạn muốn thay đổi</b>
          </h1>
          <p style={{ color: "tomato" }}>
            {this.state.noti}
          </p>
          <input
            type="password"
            placeholder="Nhập vào mật khẩu mới..."
            onChange={e => {this.props.setNewPassword(e.target.value) 
                this.setState({newpassword: e.target.value})}}
          />
          <br />
          <input
            type="password"
            placeholder="Xác nhận mật khẩu..."
            onChange={e => {this.props.setConfirm(e.target.value)
            this.setState({confirm: e.target.value})}}
          />
          <br />
          <button
            className="btn btn-default"
            onClick={() => 
                this.handleSubmit()}
          >
            Xác nhận
          </button>
          <h2>
            <Link to="/">Trở về trang chủ</Link>
          </h2>
        </div>
      </div>
    );
  }
}
export default EnterNewPassword;