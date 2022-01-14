import React, { useRef ,useEffect} from 'react';
import {useParams } from "react-router-dom";
import { connect } from "react-redux";
import MovieDetailsReView from "../Contents/MovieDetailsReview";

function to_slug(str){
      
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
function changeUrl(value,urlKey) {

    //console.log(urlKey)
    var iframeSrc = document.getElementById('iframe-embed');
    iframeSrc.src = value;


    var episodeList = document.querySelector('.episode__list');

    var lengEpisodeList = episodeList.children.length;

    for(var i=0 ; i< lengEpisodeList ; i++)
    {
        episodeList.children[i].classList.remove('btnfilm--active');
        episodeList.children[urlKey].classList.add('btnfilm--active');
    }

    
}

function MovieDetails(props){

        useEffect(() => {
            props.offWatchingStatusStore();           
        },[]);
       

        //Hook là một tính năng mới từ React 16.8.Nó cho phép sử dụng state và các tính năng khác của React mà không cần viết dạng class
       
            // useEffect(() => {
            //     props.offWatchingStatusStore();
            // }, [props]);
        // props.changeWatchingStatusStore();//true or false
        function showFilm() {
           
            if(props.isWatchingStore)   
            {
               
                return(
                    <div className="is-watching">
                       
                        {/* render tap phim */}
                        {renderDataIsWatching(dataMovieDetails.episode,dataMovieDetails.title)}

                        <button onClick={changeWatchingStatus} className="btn mt-3 btn-danger">
                            <span><i className="fas fa-undo-alt"></i></span> Quay Lại
                        </button>
                    </div>
                    
                )
            }
            else
            {
                
                return(
                    
                    <div className="not-watching">                         
                        <div className="movies-details">
                            <div className="container mt-5">  
                                <div className="row">            
                                    <div className="movies-details__image col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div className="movie-item__inner">
                                        <div className="movie-item__image">
                                            <img src={dataMovieDetails.imageUrl} className="img-fluid" alt="Image_film" />
                                        </div>
                                        <div className="movie-item__info">                                  
                                            <a href="/" className="movie-item__info-link">
                                            <h4 className="movie-item__info-name">{dataMovieDetails.title}</h4>
                                            </a>
                                            <div className="movie-item__info-bottom">
                                            <div className="movie-item__info-time"><i className="far fa-clock" /></div>
                                            <div className="icon-favourite"><i className="far fa-heart" /></div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="movies-details__info offset-lg-1 col-lg-7 col-md-7 col-sm-12 col-12">
                                        <div className="movies-details__heading">
                                        <div className="movies-details__heading-name">{dataMovieDetails.title}</div>
                                        <div className="d-flex align-items-center mt-3">
                                            <div className="movies-details__heading-rating">
                                                <img src="/frontend/assets/images/3-sao.png" className="img-fluid" alt="star_rating" />
                                            </div>
                                            <div className="movies-details__heading-tag">
                                                <i className="fas fa-tag" /><span>{dataMovieDetails.category}</span>
                                            </div>
                                            <div className="movies-details__heading-date">
                                                <i className="far fa-clock" /><span></span>
                                            </div>
                                        </div>
                                        <div className="button-group mt-4 mb-4">
                                            <button  onClick={onButtonWatchTrailer} className="btn mw-100 btn-primary btn-lg mr-2">Trailer</button>
                                            <button onClick={changeWatchingStatus} className="btn mw-100 btn-danger btn-lg">Xem phim</button>
                                        </div>
                                    </div>
                                    <ul className="movies-details__list d-flex flex-column">
                                        <li className="movies-details__item">
                                            <span>Thời lượng: </span><span>đang cập nhật...</span>
                                        </li>
                                        <li className="movies-details__item">
                                            <span>Số tập: </span><span>{dataMovieDetails.episode.length} / tập</span>
                                        </li>
                                        <li className="movies-details__item">
                                            <span>Năm sản xuất: </span><span>đang cập nhật...</span>
                                        </li>
                                        <li className="movies-details__item">
                                            <span>Ngày công chiếu: </span><span>đang cập nhật...</span>
                                        </li>
                                        <li className="movies-details__item">
                                            <span>Thể loại: </span><span>{dataMovieDetails.category}</span>
                                        </li>
                                        <li className="movies-details__item">
                                            <span>Đạo diễn: </span><span>đang cập nhật...</span>
                                        </li>
                                        <li className="movies-details__item">
                                            <span>Diễn viên: </span><span>đang cập nhật...</span>
                                        </li>
                                        <li className="mt-3">
                                            {/* <Link to="/" className="btn mw-100 btn-danger btn-lg mr-2"><span><i className="fas fa-arrow-left"></i></span> Quay Lại</Link> */}
                                            <button  onClick={onButtonRelationshipTrailer} className="btn mw-100 btn-success btn-lg mr-2">Phim liên quan</button>
                                        </li>
                                    </ul>
                                </div>
                                </div> 
                            </div>
                        </div>
                    </div>                    
                )
            }
        }
        //Go to an element react js
        const trailerMovie = useRef(null);
        const relationshipMovie = useRef(null);

        const onButtonWatchTrailer = () => {
            window.scrollTo({
                 behavior: 'smooth', 
                 top: trailerMovie.current.offsetTop 
            })
        };

        const onButtonRelationshipTrailer = ()=>{
            window.scrollTo({
                behavior: 'smooth', 
                top: relationshipMovie.current.offsetTop 
           })
        }

        const changeWatchingStatus = () =>{
            props.changeWatchingStatusStore();//true or false
        }
        
       
        // Get link current
        
        let { slug } = useParams();
        let {titleCategory} = useParams();

        // console.log(titleCategory)
        var dataMovieDetails=null;
        

        switch (titleCategory){ 
            case 'phimle':
                if(props.dataPhimLeStore)
                {
                        dataMovieDetails = props.dataPhimLeStore.find(function(data){
                        var dataSlug = to_slug(data.title);
                        return dataSlug === String(slug);
                    });
                    //console.log(dataMovieDetails)
                }
                break;
            case 'phimbo':
                if(props.dataPhimBoStore)
                {
                        dataMovieDetails = props.dataPhimBoStore.find(function(data){
                        var dataSlug = to_slug(data.title);
                        return dataSlug === String(slug);
                    });
                    //console.log(dataMovieDetails.episode)
                }
                
                break;
            case 'phimchieurap':
                if(props.dataPhimChieuRapStore)
                {
                        dataMovieDetails = props.dataPhimChieuRapStore.find(function(data){
                        var dataSlug = to_slug(data.title);
                        return dataSlug === String(slug);
                    });
                    //console.log(dataMovieDetails)
                }
                break;
            case 'phimhoathinh':
                if(props.dataPhimHoatHinhStore)
                {
                        dataMovieDetails = props.dataPhimHoatHinhStore.find(function(data){
                        var dataSlug = to_slug(data.title);
                        return dataSlug === String(slug);
                    });
                    //console.log(dataMovieDetails)
                }
                break;
            default:
                break;

        }

        const renderDataIsWatching = (episodes,title)=>{
            if(episodes.length >0)
            {
             
                return (
                    
                    <div>
                            <iframe className="iframe-embed" id="iframe-embed" src={episodes[0].url} width={"100%"} height={480} scrolling="no" title="Video embed" frameBorder={0} allow="autoplay" allowFullScreen={true} />
                            <h5 className="text-center mt-2 mb-2">{title}</h5> 
                            <ul className="episode__list mt-5">
                                { 
                                    episodes.map((value,key) =>{
                                        var urlEmbeb = value.url;
                                        var urlKey = key;
                                        // console.log(urlEmbeb)
                                        if(key === 0)
                                        {
                                            return <button  onClick={()=>changeUrl(urlEmbeb,urlKey)} className="btn btn-primary btnfilm--active"  value = {value.url} key={key}>{key+1}</button>
                                        }
                                        return <button  onClick={()=>changeUrl(urlEmbeb,urlKey)} className="btn btn-primary"  value = {value.url} key={key}>{key+1}</button>
                                    })
                                }
                                
                            </ul>
                    </div>
                )
            }
            else{
                return(
                    <div>
                        Đang cập nhật, vui lòng xem bộ phim khác
                    </div>
                )
            }
        }
        
        //Render data when find slug
        if(dataMovieDetails){
           
            return ( 
                <div>
                    <div className="slider-area slider-bg" style={{backgroundImage: `url(${dataMovieDetails.imageUrl})`}}>
                        <div className="slider-area__overlay" />
                        <div className="container">

                            {showFilm()}

                        </div>
                    </div>
                    
                    <MovieDetailsReView 
                        reftrailerMovie = {trailerMovie}
                        refrelationshipMovie ={relationshipMovie}
                        titleCategory = {titleCategory}
                    />
                </div>
            );
        }
        else{
            return "";
        }
  
}
 
// export default MovieDetails;
const mapStateToProps = (state, ownProps) => {
    return {
      dataPhimBoStore: state.dataPhimBo,
      dataPhimLeStore: state.dataPhimLe,
      dataPhimChieuRapStore: state.dataPhimChieuRap,
      dataPhimHoatHinhStore: state.dataPhimHoatHinh,
      isWatchingStore : state.isWatching
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeWatchingStatusStore: () => {
            dispatch({
                type:"CHANGE_WATCHING_STATUS"
            })
        },
        offWatchingStatusStore: () => {
            dispatch({
                type:"OFF_WATCHING_STATUS"
            })
        }
    }
}
  export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails)
  