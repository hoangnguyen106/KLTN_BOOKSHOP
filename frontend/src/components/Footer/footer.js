/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'

function Footer() {
    return (
        <Fragment><div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="companyinfo">
                            <h2><span>BookShop</span></h2>
                            <p>Bookshop là một website chuyên bán sách, bao gồm nhiều thể loại đa dạng và phong phú
                                , chúng tôi muốn cung cấp các trải nhiệm tuyệt vời nhất đên khách hàng
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6"></div>
                    <div className="col-sm-3">
                    </div>
                </div>
            </div>
        </div><div className="footer-widget">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="single-widget">
                                <h2>Thông Tin Về Chúng Tôi</h2>
                                <ul className="nav nav-pills nav-stacked ">
                                    <li><i className='fas fa-map-marker-alt'></i><a href="https://www.google.com/maps/place/29+%C4%90%C3%A1+M%E1%BB%8Dc+5,+Ho%C3%A0+Minh,+Li%C3%AAn+Chi%E1%BB%83u,+%C4%90%C3%A0+N%E1%BA%B5ng+550000/@16.0516559,108.1667824,17z/data=!3m1!4b1!4m5!3m4!1s0x31421915fefecc53:0xe3f47adcd45bf8df!8m2!3d16.0516559!4d108.1667824">Đà Nẵng</a></li>
                                    <li><i className='far fa-envelope'></i><a href="#">nguyenhoangnhom4@gmail.com</a></li>
                                    <li><i className='fas fa-phone-volume'></i><a href="#">0935053171</a></li>
                                    <li><i class="fab fa-facebook-f"></i><a href="https://www.facebook.com/profile.php?id=100088596912732">BookShop</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-widget">
                                <h2>Thông tin về bán hàng</h2>
                                <form action="#" className="form-footer container">
                                    <div className='row'>
                                        <input type="text" placeholder="Your email address" className='col-sm-4' />
                                        <button type="submit" className=""><span style={{ padding: '10px' }}>Gửi</span></button>
                                    </div>


                                </form>
                                <p>Đăng Ký Gmail để nhận những thống báo mới nhất về chúng tôi...</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div><div className="footer-bottom">

            </div></Fragment>
    )
}

export default Footer