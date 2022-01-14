import React, { Component } from 'react';
import { connect } from "react-redux";
import ItemSliderArea from './ItemSliderArea';

import Slider from "react-slick";


class SliderArea extends Component {
    constructor(props){
        super(props);
        //console.log(this.props.dataPhimLeStore)
        this.state = ({
            dataSlider:null,
        })
    }
    // componentDidUpdate() {

    //     //console.log(this.props.dataPhimBoStore)
        

    //     const dataMovies = {
    //         ...this.props.dataPhimBoStore,
    //         ...this.props.dataPhimChieuRap,
    //         ...this.props.dataPhimHoatHinhStore,
    //         ...this.props.dataPhimLeStore
    //     };

    //     //console.log( dataMovies)
    //     //console.log(typeof dataMovies)
    //     //console.log(Object.entries(dataMovies));

    //     //object to array
    //     var dataMoviesArray = Object.keys(dataMovies).map((key) => [Number(key), dataMovies[key]]);

       
        
    //     //console.log(result[Math.floor(Math.random() * 100)]);
    //     // var dataSlider = [];
    //     // for(var i = 0;i < 10;i++)
    //     // {
    //     //     dataSlider.push(result[Math.floor(Math.random() * 100)]);
    //     // }


    //     // Lấy mảng con gồm n phần tử đầu tiên sau khi xáo trộn
    //     // Shuffle array
    //     const shuffled = dataMoviesArray.sort(() => 0.5 - Math.random());

    //     // Get sub-array of first n elements after shuffled
    //     let dataSliderArray = shuffled.slice(0, 10);

    //     //console.log(dataSliderArray)

    //     // this.setState({
    //     //     dataSlider:true,
    //     // })

    // }
    getDataSlider = (dataPhimLeStore,dataPhimChieuRap,dataPhimHoatHinhStore,dataPhimBoStore) =>{
    //     const dataMovies = {
    //         ...dataPhimLeStore,
    //         ...dataPhimChieuRap,
    //         ...dataPhimBoStore,
    //         ...dataPhimHoatHinhStore,
    //     };

    //     //object to array
    //     var dataMoviesArray = Object.keys(dataMovies).map((key) => [Number(key), dataMovies[key]]);

    //     // Lấy mảng con gồm n phần tử đầu tiên sau khi xáo trộn
    //     // Shuffle array
    //     const shuffled = dataMoviesArray.sort(() => 0.5 - Math.random());

    //     // Get sub-array of first n elements after shuffled
    //     var  dataSliderArray = shuffled.slice(0, 10);
        
    //    // console.log(dataSliderArray)
    //     return dataSliderArray.map((value,key) =>{
    //         return <MovieItem
    //              key={key}
    //              index={key}
    //              title = {value[1].title}
    //              image = {value[1].imageUrl}
    //         />
    //     })
        
        var count = 0;
        if(dataPhimBoStore)
        {
            return dataPhimBoStore.map((value,key) =>{
                
                if(count < 10)
                {
                    count ++;
                    return <ItemSliderArea
                        key={key}
                        index={key}
                        title = {value.title}
                        image = {value.imageUrl}
                        titleCategory = "Phim Bộ"
                    />
                }
                return "";
            })
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
    
            ]
            
        };

        return ( 
            
            <div className="slider-area slider-bg" style={{backgroundImage: 'url(../frontend/assets/images/slidebg.jpg)'}}>
                <div className="container mt-5">
                    <Slider {...settings}>
                    {
                        this.getDataSlider(
                            this.props.dataPhimLeStore,
                            this.props.dataPhimChieuRap,
                            this.props.dataPhimHoatHinhStore,
                            this.props.dataPhimBoStore,
                        )
                    }

                    </Slider>
                </div>
            </div>
        );
    }
}
 
// export default SliderArea;

const mapStateToProps = (state, ownProps) => {
    return {
      dataPhimBoStore: state.dataPhimBo,
      dataPhimLeStore: state.dataPhimLe,
      dataPhimChieuRapStore: state.dataPhimChieuRap,
      dataPhimHoatHinhStore: state.dataPhimHoatHinh
    }
  }
  // export default App;
export default connect(mapStateToProps)(SliderArea)