import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const OTP = ({ setOTP, submitOTP, notificationOTP }) => (
    <div className="container text-center">
        <div className="logo-404">
        <div className='null-cart'>
			<Link to="/"><img src="/assets/images/home/logo1.gif" alt="" /></Link>
            
          </div>
        </div>
        <div className="content-404 forgotpass">
            <h1><b>Vui lòng nhập vào mã OTP từ gmail
			</b></h1>
            <span>{notificationOTP}</span>
            <input
                type="text"
                placeholder="Nhập mã OTP..."
                onChange={(e) => setOTP(e.target.value)}
            />
            <br />
            <button
                className="btn btn-default"
                onClick={() => submitOTP()}
            >
                Xác nhận
			</button>
            <h2><Link to="/">Trở về trang chủ</Link></h2>
        </div>
    </div>
)
export default OTP