import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieItem from "../Contents/MovieItem";

class HomeMovieCategory extends Component {
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
    renderData = (dataMovieCategory,titleCategory)=>{

           // console.log(dataMovieCategory);

            var count = 0;
            if(dataMovieCategory)
            {
                return dataMovieCategory.map((value,key) =>{
                    //console.log(this.props.titleCategory)
                    
                    if(count < 10)
                    {
                        count ++;
                        
                        return(
                           
                            
                                <MovieItem
                                    key={key}
                                    index={key}
                                    title = {value.title}
                                    image = {value.imageUrl}
                                    titleCategory = {titleCategory}
                                   
                                />
                           
                            // <div className="col-lg-2_4 col-md-3 col-sm-6 col-6" key ={key}>
                            //     <div className="movie-item">
                            //         <div className="movie-item__inner">
                            //             <a href="#" className="movie-item__image">
                            //             <img src={value.imageUrl} className="img-fluid" alt="Image film" />
                            //             </a>
                            //             <div className="movie-item__info">                                  
                            //                 <a href="#" className="movie-item__info-play">
                            //                     <img src="../frontend/assets/images/play-button.png" className="img-fluid" alt="Image play button" />
                            //                 </a>
                            //                 <a href="#" className="movie-item__info-link">
                            //                     <h4 className="movie-item__info-name">{value.title}</h4>
                            //                 </a>
                            //                 <div className="movie-item__info-bottom">
                            //                     <div className="movie-item__info-time"><i className="far fa-clock" />2Hr 3Min</div>
                            //                     <div className="icon-favourite"><i className="far fa-heart" /></div>
                            //                 </div>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
                        )
                    }
                    return"";
                })

            }

           
    }
    render() { 
        
        return (
            
            <div className="movie-category">
                <div className="movie-category__header">
                    <div className="movie-category__name">{this.props.titleCategory}</div>
                    <div className="show-more">
                        <Link to={'/data-films/'+this.to_slug2(this.props.titleCategory)+'.html'}>Xem tất cả<span>
                            <i className="fas fa-angle-double-right" /></span>
                        </Link>
                    </div>
                </div>
                <div className="list-movie">
                    <div className="row">
                        {this.renderData(this.props.dataMovieCategory,this.props.titleCategory)}
                    </div>
                </div>
          </div>
        );
    }
}
 
export default HomeMovieCategory;