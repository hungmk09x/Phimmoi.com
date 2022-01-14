import React, { Component } from 'react';

class Pagination extends Component {


    getDataPageNumbers = () => {
        // console.log(this.props.moviesPerPage);
        // console.log(this.props.totalMovies.length);
        
        const pageNumbers = [];

        var lengPageNumber = Math.ceil(this.props.totalMovies.length / this.props.moviesPerPage);

        for(let i = 1; i <= lengPageNumber ;i++)
        {
            pageNumbers.push(i);
        }
        return pageNumbers;
    }
    
    paginate = (number) =>{
        this.props.paginate(number);// truyen len MovieCategory
    }
    render() { 
        var pageNumbers = this.getDataPageNumbers();
        if(pageNumbers.length > 0)
        {
            return ( 
                <div className="container">
                    <ul className="paginations mt-3 text-center">
                        {
                            pageNumbers.map((number,key)=>{                         
                                return <li key = {key} className="pagination__item">
                                    <button onClick={()=>this.paginate(number)} className="pagination__item-link">{number}</button>
                                </li>
                            })
                        }
                    </ul>
                </div>
             );
        }
        else
        return"";
    }
}
 
export default Pagination;