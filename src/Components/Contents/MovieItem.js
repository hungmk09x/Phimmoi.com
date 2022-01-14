import React, { Component } from 'react';
import {Link} from "react-router-dom";

class MovieItem extends Component {
    componentDidMount() {
        //const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);
        
        const wishlists  = $$('.movie-item__info-favourite');
        const timeVideo = $$('.movie-item__info-time');

        wishlists.forEach((wishlist,index) =>{
            wishlist.onclick = function(){
                wishlist.innerHTML = `<i class="fas fa-heart"></i>`;
            };
        });

        timeVideo.forEach((time,index) =>{
            time.onclick = function(){
                time.innerHTML = `<i class="fas fa-clock"></i>`;
            };
        });
    }
    to_slug = (str) =>{
      
        //console.log(str)
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
    }
    to_slug2 = (str) =>{
      
        //console.log(str)
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
    }
    render() { 
        //console.log(this.props.titleCategory)
        
        return ( 
            <div className="col-lg-2_4 col-md-3 col-sm-6 col-6">
                <div className="movie-item">
                    <div className="movie-item__inner">
                        <Link to={'/movie-details/' + this.to_slug2(this.props.titleCategory) +"/" + this.to_slug(this.props.title) +'.html'} className="movie-item__image">
                            <img src={this.props.image} className="img-fluid" alt="Image_film" />
                        </Link> 
                        <div className="movie-item__info">  

                            <Link to={'/movie-details/' + this.to_slug2(this.props.titleCategory) +"/" + this.to_slug(this.props.title) +'.html'} className="movie-item__info-play">
                                <img src="../frontend/assets/images/play-button.png" className="img-fluid" alt="Image_play_button" />
                            </Link>    

                            <Link to={'/movie-details/' + this.to_slug2(this.props.titleCategory) +"/" + this.to_slug(this.props.title) +'.html'} className="movie-item__info-link">
                                <h4 className="movie-item__info-name">{this.props.title}</h4>
                            </Link> 
                            <div className="movie-item__info-bottom">
                                <div className="movie-item__info-time"><i className="far fa-clock" /></div>
                                <div className="movie-item__info-favourite"><i className="far fa-heart" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default MovieItem;