import { connect } from "react-redux";
import {useParams } from "react-router-dom";
import MovieItem from "./MovieItem";
import React, { useState } from 'react';
import Pagination from "./Pagination";



const MovieCategory = (props) =>{

    const[currentPage, setCurrentPage] = useState(1);
    const[moviesPerPage] = useState(20);

    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = post.slice(indexOfFirstPost,indexOfLastPost);
      
        // Get link current
        
        let { slug } = useParams();

        var dataMovies=[];
        

        switch (slug){ 
            case 'phimle':
                if(props.dataPhimLeStore)
                {
                    props.dataPhimLeStore.map((value,key)=>{
                        return dataMovies.push(value);
                    })
                    
                }
                break;
            case 'phimbo':
                if(props.dataPhimBoStore)
                {
                    props.dataPhimBoStore.map((value,key)=>{
                        return dataMovies.push(value);
                    })
                }
                
                break;
            case 'phimchieurap':
                if(props.dataPhimChieuRapStore)
                {
                    props.dataPhimChieuRapStore.map((value,key)=>{
                        return dataMovies.push(value);
                    })
                }
                break;
            case 'phimhoathinh':
                if(props.dataPhimHoatHinhStore)
                {
                    props.dataPhimHoatHinhStore.map((value,key)=>{
                        return dataMovies.push(value);
                    })
                }
                break;
            default:
                break;

        }
   
        const checkNamMovie = (slug)=>{
            var namMovie="";
            if(slug ==="phimle")
            {
                namMovie = "Phim Lẻ";
            }
            else if(slug ==="phimbo")
            {
                namMovie = "Phim Bộ";
            }
            else if(slug ==="phimchieurap")
            {
                namMovie = "Phim Chiếu Rạp";
            }
            else if(slug ==="phimhoathinh")
            {
                namMovie = "Phim Hoạt Hình";
            }
            else{
                namMovie = "Không tồn tại";
            }
            return namMovie;
        }

        // const paginate = (number) =>{
        //     console.log(number)
        // }
        
        const paginate = (pageNumber) =>setCurrentPage(pageNumber);
        
        
        if(dataMovies)
        {
            //console.log(dataMovies)
            const indexOfLastMovie = currentPage * moviesPerPage;
            const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
            const currentMovies = dataMovies.slice(indexOfFirstMovie,indexOfLastMovie);

            return ( 
                             
                <div className="list-moviecategory">
                    <div className="container">
                        <div className="movie-category__header">
                            <div className="movie-category__name">Danh sách: {checkNamMovie(slug)}</div>
                        </div>
                        <div className="list-movie">
                            <div className="row">
                                {
                                    currentMovies.map((value,key)=>{
                                        return(
                                                                                
                                                <MovieItem
                                                    key={key}
                                                    index={key}
                                                    title = {value.title}
                                                    image = {value.imageUrl}
                                                    titleCategory = {slug}
                                                
                                                />
                                                                                    
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <Pagination
                        moviesPerPage = {moviesPerPage}
                        totalMovies = {dataMovies}
                        paginate = {(number)=>paginate(number)}
                    />  
                </div>
            );
        }
        else
        {
            return "";
        }

}
 
//export default MovieCategory;


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
export default connect(mapStateToProps,mapDispatchToProps)(MovieCategory)
  