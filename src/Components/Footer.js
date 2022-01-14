import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Footer extends Component {
    
    componentDidMount() {
        let scrollTop = document.getElementById('scroll-top');

        window.addEventListener('scroll',function(){
            let value = window.scrollY;
            if(value < 400){
                scrollTop.style.display ='none';
            }
            if(value > 400){
                scrollTop.style.display ='block';
            }
        });
        scrollTop.onclick = function(){
            window.scrollTo(0, 0);
        }
    }

    getCurrentYear = () =>{
        return new Date().getFullYear();
    }
    render() { 
        return ( 
            <div>
                <footer>
                    <div className="container">
                        <div className="footer-top">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-2 align-self-center">
                                    <div className="footer-top__logo">
                                        <Link to="/">
                                            <img src="/frontend/assets/images/lg.png" className="img-fluid" alt="Image_logo" />
                                        </Link>
                                    </div>
                                    <div className="footer-top__logo-heading mt-3">Website xem phim miễn phí và trải nghiệm tuyệt vời</div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-2">
                                    <div className="footer-top__heading">Danh Mục</div>
                                    <ul className="footer-top__category">
                                        <li className="footer-top__category-item">
                                            <Link to="/data-films/phimbo.html" className="footer-top__category-link">Phim bộ</Link>
                                        </li>
                                        <li className="footer-top__category-item">
                                            <Link to="/data-films/phimle.html" className="footer-top__category-link">Phim lẻ</Link>
                                        </li>
                                        <li className="footer-top__category-item">
                                            <Link to="/data-films/phimchieurap.html" className="footer-top__category-link">Phim chiếu rạp</Link>
                                        </li>
                                        <li className="footer-top__category-item">
                                            <Link to="/data-films/phimhoathinh.html" className="footer-top__category-link">Phim hoạt hình</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-2">
                                    <div className="footer-top__heading">Trang</div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-2">
                                    <div className="footer-top__heading">Liên hệ</div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="footer-bottom__copyright text-center">
                                <Link to="/" className="footer-bottom__copyright-link">
                                    CopyRight <span id="year">{this.getCurrentYear()}</span> Developer by HungDev . All Rights Reserved.
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="to-top" id="scroll-top"><i className="fas fa-arrow-up"></i></div>
            </div>
            
        );
    }
}
 

export default Footer;