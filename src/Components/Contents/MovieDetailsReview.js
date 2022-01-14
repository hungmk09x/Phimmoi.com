import React, { Component } from 'react';
import Slider from "react-slick";
import { connect } from "react-redux";
import ItemSliderArea from "../ItemSliderArea";

class MovieDetailsReview extends Component {

    getdataMovie = (titleCategory)=>{

        var dataMovies=[];

        if(titleCategory ==="phimle")
        {
            if(this.props.dataPhimLeStore)
            {
                this.props.dataPhimLeStore.map((value,key)=>{
                    return dataMovies.push(value);
                })
                
            }
        }
        else if(titleCategory ==="phimbo")
        {
            if(this.props.dataPhimBoStore)
            {
                this.props.dataPhimBoStore.map((value,key)=>{
                    return dataMovies.push(value);
                })
                
            }
        }
        else if(titleCategory ==="phimchieurap")
        {
            if(this.props.dataPhimChieuRapStore)
            {
                this.props.dataPhimChieuRapStore.map((value,key)=>{
                    return dataMovies.push(value);
                })
                
            }
        }
        else if(titleCategory ==="phimhoathinh")
        {
            if(this.props.dataPhimHoatHinhStore)
            {
                this.props.dataPhimHoatHinhStore.map((value,key)=>{
                    return dataMovies.push(value);
                })
                
            }
        }
        else{
            dataMovies=[];
        }
        return dataMovies;
    }
    dataMovieRelationshipSlider = (titleCategory) =>{

        var dataNeed = this.getdataMovie(titleCategory);
        // Lấy mảng con gồm n phần tử đầu tiên sau khi xáo trộn
        // Shuffle array
        const shuffled = dataNeed.sort(() => 0.5 - Math.random());
           
        //  Get sub-array of first n elements after shuffled
        let dataSliderArray = shuffled.slice(0, 10);   

        //console.log(dataSliderArray); 
        if(dataSliderArray.length >0)
        {
            return dataSliderArray.map((value,key) =>{
                    
                    
                return <ItemSliderArea
                    key={key}
                    index={key}
                    title = {value.title}
                    image = {value.imageUrl}
                    titleCategory = {titleCategory}
                />
            })
        }
        else
        {
            return "";
        }
    }

    render() { 
        const settings = {
            className: "movies_new",
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows:false,
            dots:true,
            autoplay:true,
            speed:500,
            autoplaySpeed:3000,
            responsive: [
                {
                  breakpoint: 1023,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 739,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
    
            ]
            
        };
        //console.log(this.props.titleCategory)

        return ( 
           
            <div>
                <div className="main-movie">
                    <div className="container" style={{maxWidth: '900px'}}>         
                        <div className="main-movie__content mt-5">
                            <p className="main-movie__content-desciption"></p>
                            <div className="main-movie__content-main">
                                <h3 className="main-movie__content-heading">Nội dung chính</h3>
                                <p className="main-movie__content-desciption">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                <p className="main-movie__content-desciption mt-3">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>                                
                            </div>
                            <div className="main-movie__content-trailer">
                                <h3 className="main-movie__content-heading">Xem trailer :</h3>
                                <div ref={this.props.reftrailerMovie}>
                                    <iframe className="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F-jV9aLm_xCo%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-jV9aLm_xCo&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F-jV9aLm_xCo%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" width={854} height={480} scrolling="no" title="YouTube embed" frameBorder={0} allow="autoplay" allowFullScreen={true}  style={{maxWidth:'100%'}}  />
                                </div>
                            </div>
                        </div>         
                    </div>
                </div>
                <div className="movie-relationship  mt-5 mb-5" ref={this.props.refrelationshipMovie}>
                    <div className="container">
                        <h3 className="movie-relationship__heading text-center">CÓ THỂ BẠN CŨNG MUỐN XEM</h3>
                        <div className="movie-relationship__list">
                            <Slider {...settings}>
                            {
                                this.dataMovieRelationshipSlider(this.props.titleCategory) 
                                // <div className="movie-item">
                                //     <div className="movie-item__inner">
                                //         <a href="/" className="movie-item__image">
                                //             <img src="https://www.fullphim.net/static/5fe2d564b3fa6403ffa11d1c/60bcdb9ccc230f6768333912_f9.jpg" className="img-fluid" alt="Image_film" />
                                //         </a>
                                //         <div className="movie-item__info">                                  
                                //             <a href="/" className="movie-item__info-play">
                                //                 <img src="/frontend/assets/images/play-button.png" className="img-fluid" alt="Image_play_button" />
                                //             </a>
                                //             <a href="/" className="movie-item__info-link">
                                //                 <h4 className="movie-item__info-name">Qúa nhanh quá nguy hiểm</h4>
                                //             </a>
                                //             <div className="movie-item__info-bottom">
                                //                 <div className="movie-item__info-time"><i className="far fa-clock" />2Hr 3Min</div>
                                //                 <div className="icon-favourite"><i className="far fa-heart" /></div>
                                //             </div>
                                //         </div>
                                //     </div>
                                // </div>  
                            }

                            </Slider>         
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
//export default MovieDetailsReview;
const mapStateToProps = (state, ownProps) => {
    return {
      dataPhimBoStore: state.dataPhimBo,
      dataPhimLeStore: state.dataPhimLe,
      dataPhimChieuRapStore: state.dataPhimChieuRap,
      dataPhimHoatHinhStore: state.dataPhimHoatHinh,
      isWatchingStore: state.isWatching
    }
  }
  
  export default connect(mapStateToProps)(MovieDetailsReview)