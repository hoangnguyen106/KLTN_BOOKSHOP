/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'

function Footer() {
    return (
        <Fragment><div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
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
                                    <li><i className='fas fa-map-marker-alt'></i><a href="#">Hà Nội City</a></li>
                                    <li><i className='far fa-envelope'></i><a href="#">dimdimliulo@gmail.com</a></li>
                                    <li><i className='fas fa-phone-volume'></i><a href="#">+84 234 567 89</a></li>
                                    <li><i class="fab fa-facebook-f"></i><a href="#">dimdimliulo</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="single-widget">
                                <h2>Sách Về Kỹ Năng</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Facebook marketing</a></li>
                                    <li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Đắc Nhân Tâm</a></li>
                                    <li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Nhà Giả Kim</a></li>
                                    <li><i className='fas fa-long-arrow-alt-right'></i><a href="#">1000 Câu Hỏi Vì Sao</a></li>
                                    <li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Cuộc Sống An Nhàn</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="single-widget">
                                <h2>Sách Giáo Khoa</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Tiếng Anh Lớp 12</a></li>
                                    <li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Toán Lớp 12</a></li>
                                    <li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Tiếng Việt Lớp 12</a></li>
                                    <li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Toán Học Lớp 12</a></li>
                                    <li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Vật Lý Lớp 12</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="single-widget">
                                <h2>Sách Giải Trí</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Doraemon</a></li>
                                    <li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Conan</a></li>
                                    <li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Cuộc Phiêu Lưu Của Dế Mèn</a></li>
                                    <li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Cuộc Tấn Công Của Titan</a></li>
                                    <li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Thỏ Và Rùa</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-widget">
                                <h2>About Shopper</h2>
                                <form action="#" className="form-footer container">
                                    <div className='row'>
                                        <input type="text" placeholder="Your email address" className='col-sm-4' />
                                        <button type="submit" className=""><i className="fa fa-arrow-circle-o-right col-sm-2"></i>Submit</button>
                                    </div>


                                </form>
                                <p>Đăng Ký Gmail để nhận<br />những thống báo mới nhất về chúng tôi...</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div><div className="footer-bottom">

            </div></Fragment>
    )
}

export default Footer