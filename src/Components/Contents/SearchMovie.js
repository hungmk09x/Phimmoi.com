// import React, { Component } from 'react';
import {useParams } from "react-router-dom";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";

function xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}
  

const SearchMovie = (props) =>{

    let {textSearch} = useParams();

    //console.log(textSearch)
    const searchFilmBo = (textSearch)=>{
        if(props.dataPhimBoStore)
        {  
          
            // return  <h3>Tìm kiếm: {textSearch}</h3>
            var dataNeed = [];
            props.dataPhimBoStore.forEach((item)=>{
                         
                if(xoa_dau(item.title.toLowerCase()).indexOf(xoa_dau(textSearch.toLowerCase())) !== -1)
                {
                    dataNeed.push(item);
                }
        
            })
            //console.log(dataNeed)
            if(dataNeed.length > 0)
            {
                return(
                    <div>
                        <div className="movie-category__header">
                            <div className="movie-category__name">Danh sách phim tìm kiếm được (theo phim bộ)</div>
                        </div>
                        <div className="list-movie">
                            <div className="row">
                                {
                                    dataNeed.map((value,key)=>{
                                        return(
                                                                                
                                            <MovieItem
                                                key={key}
                                                index={key}
                                                title = {value.title}
                                                image = {value.imageUrl}
                                                titleCategory ="Phim Bộ"
                                            
                                            />
                                                                                    
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            else{
                return (
                    <div className="movie-category__header">
                        <div className="movie-category__name">Không tìm thấy bộ phim! (theo phim bộ)</div>
                    </div>
                )
            }
        }
        else{
            return (
                <div className="movie-category__header">
                    <div className="movie-category__name">Dữ liệu đang được nap!</div>
                </div>
            )
        }
    }
    const searchFilmLe = (textSearch)=>{
        if(props.dataPhimLeStore)
        {  
          
            // return  <h3>Tìm kiếm: {textSearch}</h3>
            var dataNeed = [];
            props.dataPhimLeStore.forEach((item)=>{
                         
                if(xoa_dau(item.title.toLowerCase()).indexOf(xoa_dau(textSearch.toLowerCase())) !== -1)
                {
                    dataNeed.push(item);
                }
        
            })
            //console.log(dataNeed)
            if(dataNeed.length > 0)
            {
                return(
                    <div>
                        <div className="movie-category__header">
                            <div className="movie-category__name">Danh sách phim tìm kiếm được (theo phim lẻ)</div>
                        </div>
                        <div className="list-movie">
                            <div className="row">
                                {
                                    dataNeed.map((value,key)=>{
                                        return(
                                                                                
                                            <MovieItem
                                                key={key}
                                                index={key}
                                                title = {value.title}
                                                image = {value.imageUrl}
                                                titleCategory ="Phim Lẻ"
                                            
                                            />
                                                                                    
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            else{
                return (
                    <div className="movie-category__header">
                        <div className="movie-category__name">Không tìm thấy bộ phim! (theo phim lẻ)</div>
                    </div>
                )
            }
        }
        else{
            return (
                <div className="movie-category__header">
                    <div className="movie-category__name">Dữ liệu đang được nap!</div>
                </div>
            )
        }
    }

   
    const searchFilmChieuRap = (textSearch)=>{
        if(props.dataPhimChieuRapStore)
        {  
          
            // return  <h3>Tìm kiếm: {textSearch}</h3>
            var dataNeed = [];
            props.dataPhimChieuRapStore.forEach((item)=>{
                         
                if(xoa_dau(item.title.toLowerCase()).indexOf(xoa_dau(textSearch.toLowerCase())) !== -1)
                {
                    dataNeed.push(item);
                }
        
            })
            //console.log(dataNeed)
            if(dataNeed.length > 0)
            {
                return(
                    <div>
                        <div className="movie-category__header">
                            <div className="movie-category__name">Danh sách phim tìm kiếm được (theo phim chiếu rạp)</div>
                        </div>
                        <div className="list-movie">
                            <div className="row">
                                {
                                    dataNeed.map((value,key)=>{
                                        return(
                                                                                
                                            <MovieItem
                                                key={key}
                                                index={key}
                                                title = {value.title}
                                                image = {value.imageUrl}
                                                titleCategory ="Phim Chiếu Rạp"
                                            
                                            />
                                                                                    
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            else{
                return (
                    <div className="movie-category__header">
                        <div className="movie-category__name">Không tìm thấy bộ phim! (theo phim chiếu rạp)</div>
                    </div>
                )
            }
        }
        else{
            return (
                <div className="movie-category__header">
                    <div className="movie-category__name">Dữ liệu đang được nap!</div>
                </div>
            )
        }
    }
    const searchFilmHoatHinh = (textSearch)=>{
        if(props.dataPhimHoatHinhStore)
        {  
          
            // return  <h3>Tìm kiếm: {textSearch}</h3>
            var dataNeed = [];
            props.dataPhimHoatHinhStore.forEach((item)=>{
                         
                if(xoa_dau(item.title.toLowerCase()).indexOf(xoa_dau(textSearch.toLowerCase())) !== -1)
                {
                    dataNeed.push(item);
                }
        
            })
            //console.log(dataNeed)
            if(dataNeed.length > 0)
            {
                return(
                    <div>
                        <div className="movie-category__header">
                            <div className="movie-category__name">Danh sách phim tìm kiếm được (theo phim hoạt hình)</div>
                        </div>
                        <div className="list-movie">
                            <div className="row">
                                {
                                    dataNeed.map((value,key)=>{
                                        return(
                                                                                
                                            <MovieItem
                                                key={key}
                                                index={key}
                                                title = {value.title}
                                                image = {value.imageUrl}
                                                titleCategory ="Phim Hoat Hình"
                                            
                                            />
                                                                                    
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            else{
                return (
                    <div className="movie-category__header">
                        <div className="movie-category__name">Không tìm thấy bộ phim! (theo phim hoạt hình)</div>
                    </div>
                )
            }
        }
        else{
            return (
                <div className="movie-category__header">
                    <div className="movie-category__name">Dữ liệu đang được nap!</div>
                </div>
            )
        }
    }

    return ( 
        <div className="search-box list-moviecategory">
            <div className="container">
                {searchFilmBo(textSearch)} 
                {searchFilmLe(textSearch)}      
                {searchFilmChieuRap(textSearch)}  
                {searchFilmHoatHinh(textSearch)}        
            </div>
        </div>
    );
    
}
 
//export default SearchMovie;

const mapStateToProps = (state, ownProps) => {
    return {
      dataPhimBoStore: state.dataPhimBo,
      dataPhimLeStore: state.dataPhimLe,
      dataPhimChieuRapStore: state.dataPhimChieuRap,
      dataPhimHoatHinhStore: state.dataPhimHoatHinh,
      isWatchingStore : state.isWatching
    }
  }


export default connect(mapStateToProps)(SearchMovie)