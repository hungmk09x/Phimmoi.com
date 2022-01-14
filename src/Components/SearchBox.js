import React, { Component } from 'react';
import { connect } from "react-redux";


class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state =({
            textSearch : '',
        })
    }
    isChange = (event) =>{
        this.setState({
            textSearch : event.target.value
        })
    }
    // sendDataStore = () =>{
    //     //console.log(this.state.textSearch)
    //     this.props.getTextSearchStore(this.state.textSearch)
    // }
    // componentDidMount() {
    //     const $ = document.querySelector.bind(document);
    //     $("input[required], select[required]").attr("oninvalid", "this.setCustomValidity('Required!')");
    //     $("input[required], select[required]").attr("oninput", "setCustomValidity('')");
    // }
    render() { 
      
        return ( 
            <div className="search-box">
                <div className="container">
                    <form action={"/movie-search/" + this.state.textSearch}>
                        <div className="search-box__content">
                            <select>
                                <option value="united">Tất cả phim</option>
                                {/* <option value="united">Phim lẻ</option>
                                <option value="saab">Phim bộ</option>
                                <option value="saab">Phim chiếu rạp</option>
                                <option value="saab">Phim hoạt hình</option> */}
                            </select>
                            <div className="search-box__content-input">
                                <input type="text" onChange={(event)=>this.isChange(event)} required placeholder="Nhập bộ phim cần tìm kiếm"/>
                                <button type="submit" className="btn-search"><span><i className="fas fa-search" /></span></button>
                                {/* <button rype="reset" className="btn-search" onClick = {()=>this.sendDataStore()}><span><i className="fas fa-search" /></span></button> */}
                            </div>                       
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
//export default SearchBox;


const mapStateToProps = (state, ownProps) => {
    return {
      dataPhimBoStore: state.dataPhimBo,
      dataPhimLeStore: state.dataPhimLe,
      dataPhimChieuRapStore: state.dataPhimChieuRap,
      dataPhimHoatHinhStore: state.dataPhimHoatHinh,
      isWatchingStore: state.isWatching
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        getTextSearchStore: (getTextSearch) => {
            dispatch({
                type:"GET_TEXT_SEARCH",
                getTextSearch
            })
        }
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(SearchBox)