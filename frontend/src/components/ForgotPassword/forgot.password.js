import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const ForgotPassword = ({ setEmail, submit, notification }) => (
	<div className="container text-center">
		<div className="logo-404">
		<div className='null-cart'>
			<Link to="/"><img src="/assets/images/home/logo1.gif" alt="" /></Link>
            
          </div>
			
		</div>
		<div className="content-404 forgotpass">
			<h1><b> Quên mật khẩu
			</b></h1>
			<span>{notification}</span>
			<input
			type="email"
				placeholder="Nhập vào email bạn muốn thay đổi mật khẩu..."
				onChange={e => setEmail(e.target.value)}
			/>
			<br />
			<button
				className="btn btn-default"
				onClick={() => submit()}
			>
				Xác nhận
			</button>
			<h2><Link to="/">Trở về trang chủ</Link></h2>
		</div>
	</div>
)
export default ForgotPassword