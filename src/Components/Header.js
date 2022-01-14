import React, { Component } from 'react';
import { connect } from "react-redux";
import {Link, NavLink} from "react-router-dom";
import SearchBox from "./SearchBox";


class Header extends Component {
    
    // componentDidUpdate() {
    //     console.log(this.props.dataPhimboStore)
    // }
    goToUrl = () =>{
        // window.location.href = "https://www.facebook.com/";
        window.open(
            'https://www.facebook.com/',
            '_blank' // <- This is what makes it open in a new window.
          );
    }
    render() { 
        //console.log(this.props.dataPhimboStore||"heheeh1")
        return ( 
            <div>
                <header className="header">
                    <div className="header-main">
                        <div className="container">
                            <div className="main-menu-pc">
                                <div className="row align-items-center">
                                    <div className="col-lg-2">
                                        <div className="header-main__logo">
                                            <Link to="/" className="header-main__logo-link">
                                                <img src="/frontend/assets/images/logo.png" className="img-fluid" alt="Image_logo" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <ul className="header-main__menu">
                                            <li className="header-main__menu-item">
                                                <Link to="/" className="header-main__menu-link link--active">Trang chủ</Link>
                                            </li>
                                            <li className="header-main__menu-item">
                                                <NavLink to="/data-films/phimbo.html" className="header-main__menu-link">Phim bộ</NavLink>
                                            </li>
                                            <li className="header-main__menu-item">
                                                <NavLink to="/data-films/phimle.html" className="header-main__menu-link">Phim lẻ</NavLink>
                                            </li>
                                            <li className="header-main__menu-item">
                                                <NavLink to="/data-films/phimchieurap.html" className="header-main__menu-link">Phim chiếu rạp</NavLink>
                                            </li>
                                            <li className="header-main__menu-item">
                                                <NavLink to="/data-films/phimhoathinh.html" className="header-main__menu-link">Phim hoạt hình</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-2 text-right">
                                        <div className="header-main__login">
                                            {/* <Link to ="/login" className="header-main__login-link link--active">
                                                <span className="fas fa-user" />Đăng Nhập
                                            </Link>  */}
                                            <div className="like__page" onClick={()=>this.goToUrl()}>
                                                <span className="like__page-icon far fa-thumbs-up"></span>
                                                <span className="like__page-text">Like Page</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-menu-moblie">
                                
                                <div className="logo-mobile">
                                    <Link to="/">
                                        <img src="/frontend/assets/images/logo.png" className="img-fluid" alt="Logo_mobile" />   
                                    </Link>                                 
                                </div>

                                <label htmlFor="nav-mobile-input" className="navbar-toogle">
                                    <i className="fas fa-bars" />
                                </label>
                                {/* <div>
                                    <Link to="/login" className="link--active">
                                        <span className="fas fa-user mr-1" />Đăng nhập
                                    </Link>
                                </div> */}
                                <input type="checkbox" hidden className="nav-input" id="nav-mobile-input" />
                                <label htmlFor="nav-mobile-input" className="nav__overlay" />
                                <div className="nav__mobile">
                                    <label htmlFor="nav-mobile-input" className="nav__moblie-close">
                                        <i className="fas fa-times" />
                                    </label>
                                    <ul className="header__mobile-list">
                                        <li className="header__mobile-item">
                                            <Link to="/" className="header__mobile-item-link link--active">Trang chủ</Link>
                                        </li>
                                        <li className="header__mobile-item">
                                            <NavLink to="/data-films/phimbo.html" className="header__mobile-item-link">Phim bộ</NavLink>
                                        </li>
                                        <li className="header__mobile-item header__mobile-item--active">
                                            <NavLink to="/data-films/phimle.html" className="header__mobile-item-link">Phim lẻ</NavLink>
                                        </li>
                                        <li className="header__mobile-item">
                                            <Link to="/data-films/phimchieurap.html" className="header__mobile-item-link">Phim chiếu rạp</Link>
                                        </li>
                                        <li className="header__mobile-item">
                                            <NavLink to="/data-films/phimhoathinh.html" className="header__mobile-item-link">Phim hoạt hình</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SearchBox/>
                </header>              
            </div>
        );
    }
}
 
//export default Header;

const mapStateToProps = (state, ownProps) => {
    return {
      dataPhimboStore: state.dataPhimBo,
      dataPhimLeStore: state.dataPhimLe,
      dataPhimChieuRapStore: state.dataPhimChieuRap,
      dataPhimHoatHinhStore: state.dataPhimHoatHinh
    }
  }
  // export default App;
export default connect(mapStateToProps)(Header)