import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 com-sm-12 col-12 align-self-center">
                            <div className="contact-form">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Họ và tên</label>
                                            <input type="text" className="form-control" name="name" id="name" required placeholder="Tên của bạn" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" name="email" id="email" required placeholder="Email của bạn" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="content">Nội dung</label>
                                        <textarea className="form-control" name="content" id="content" required rows={5} defaultValue={""} />
                                    </div>
                                    <button className="btn btn-contact">Gửi thông tin</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 com-sm-12 col-12">
                            <div className="contact-info">
                                <div className="contact-info__heading text-center">Thông tin liên hệ</div>
                                <ul className="contact-info__list">
                                    <li className="contact-info__item">
                                        <Link to="/" className="contact-info__item-link">
                                            <i className="fas fa-map-marker-alt" />
                                        </Link>
                                        <span className="contact-info__icon-text">Address Me</span>
                                    </li>
                                    <li className="contact-info__item">
                                        <Link to="/" className="contact-info__item-link">
                                            <i className="fas fa-envelope" />
                                        </Link>
                                        <span className="contact-info__icon-text">admin@admin.com</span>
                                    </li>
                                    <li className="contact-info__item">
                                        <Link to="/" className="contact-info__item-link">
                                            <i className="fas fa-phone" />
                                        </Link>
                                        <span className="contact-info__icon-text">(+84) 123 45 678</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contact;