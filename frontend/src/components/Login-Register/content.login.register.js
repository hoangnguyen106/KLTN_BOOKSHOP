import { Link } from 'react-router-dom'
import React, { useState } from 'react'
function ContentLoginRegister({ setEmailogin, setPasswordlogin, setEmail,
    setFirstname, setLastname, setAddress, setPhone, setPassword, setConfirm,
    notificationRegister, notificationLogin, registerSubmit, loginSubmit }) {
    const [Login, setLogin] = useState(true);
    const [Register, setRegister] = useState(false);
    
    function handleLogin() {
        setLogin(true);
        setRegister(false);
    }
    function handleRegister() {
        setRegister(true)
        setLogin(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
      };
    let xhtmlLogin = '';
    let xhtmlRegister = '';
    if (Login) {
        xhtmlLogin = <form className="login-form" onSubmit={handleSubmit}>
            <div className='login-content col-sm-6'>
                <h2>Đăng nhập tài khoản của bạn</h2>
                <div className="noti">{notificationLogin}</div>
                <input type="email"
                    placeholder="Địa chỉ email..."
                    onChange={(e) => { setEmailogin(e.target.value) }}
                    required
                />
                <input type="password"
                    placeholder="Mật khẩu..."
                    onChange={(e) => { setPasswordlogin(e.target.value) }}
                    required
                />

                <button
                    className="btn btn-default"
                    onClick={() => loginSubmit()}
                >Đăng nhập</button>
                <div className='forgotpassword'>
                    <Link to='/forgotpass/' >Quên mật khẩu ?</Link>
                </div>

            </div>

        </form>
    }

    if (Register) {
        xhtmlRegister = <div className="signup-form">
            <div className='login-content col-sm-6'>

                <h2>Đăng ký tài khoản mới</h2>
                <div className="noti">{notificationRegister}</div>

                <input type="email"
                    placeholder="Nhập vào địa chỉ email của bạn"
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <input type="text"
                    placeholder="Nhập vào họ"
                    onChange={(e) => { setFirstname(e.target.value) }}
                />
                <input type="text"
                    placeholder="Nhập vào tên"
                    onChange={(e) => { setLastname(e.target.value) }}
                />
                <input type="text"
                    placeholder="Nhập vào địa chỉ của bạn"
                    onChange={(e) => { setAddress(e.target.value) }}
                />
                <input type="number"
                    placeholder="Nhập vào số điện thoại"
                    onChange={(e) => { setPhone(e.target.value) }}
                />
                <input type="password"
                    placeholder="Nhập vào mật khẩu"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="password"
                    placeholder="Nhập lại mật khẩu"
                    onChange={(e) => { setConfirm(e.target.value) }}
                />
                <button
                    className="btn btn-default"
                    onClick={() => registerSubmit()}
                >Đăng ký
                </button>
            </div>
        </div>
    }
    return (
        <section className='homePage'>
            <div className="container login-register">
                <div className='menu-profile'>
                    <ul>
                        <li><button onClick={handleLogin} className='menu-custom btn'>Đăng Nhập</button></li>
                        <li> <button onClick={handleRegister} className='menu-custom btn '>Đăng Ký</button></li>
                    </ul>
                    <hr></hr>
                </div>
                <div>

                    {xhtmlRegister}
                    {xhtmlLogin}
                </div>
            </div>
        </section>
    );
}
export default ContentLoginRegister