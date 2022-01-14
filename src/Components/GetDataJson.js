import { connect } from "react-redux";

import React, { Component } from 'react';

//import dataLatest from "../DataExamples/DataLatest.json";
import dataPhimBoExample from "../DataExamples/phimbo.json";
import dataPhimLeExample from "../DataExamples/phimle.json";
import dataPhimChieuRapExample from "../DataExamples/phimchieurap.json";
import dataPhimHoatHinhExample from "../DataExamples/phimhoathinh.json";

class GetDataJson extends Component {
   
    constructor(props){
        super(props);
        this.state = ({
            dataPhimbo: null,
            dataPhimChieuRap:null,
            dataPhimHoatHinh:null,
            dataPhimle:null,
        })
    }
    async componentDidMount() {
        const url ='';
        const response = await fetch(url);

        console.clear(response);

        this.setState({
            dataPhimBo:dataPhimBoExample,
            dataPhimChieuRap:dataPhimChieuRapExample,
            dataPhimHoatHinh:dataPhimHoatHinhExample,
            dataPhimLe:dataPhimLeExample,
        })
        

        this.props.getDataPhimBoStore(this.state.dataPhimBo) 
        this.props.getDataPhimLeStore(this.state.dataPhimLe) 
        this.props.getDataPhimChieuRapStore(this.state.dataPhimChieuRap) 
        this.props.getDataPhimHoatHinhStore(this.state.dataPhimHoatHinh) 


    }

    render() { 
        
        return ( 
            <div className="get-api">
                
            </div>
        );
    }
}
 
// export default GetDataJson;


const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDataPhimBoStore: (dataPhimBoAction) => {
            dispatch({
                type:"getDataPhimBo",
                dataPhimBoAction
            })
        },
        getDataPhimLeStore: (dataPhimLeAction) => {
            dispatch({
                type:"getDataPhimLe",
                dataPhimLeAction
            })
        },
        getDataPhimChieuRapStore: (dataPhimChieuRapAction) => {
            dispatch({
                type:"getDataPhimChieuRap",
                dataPhimChieuRapAction
            })
        },
        getDataPhimHoatHinhStore: (dataPhimHoatHinhAction) => {
            dispatch({
                type:"getDataPhimHoatHinh",
                dataPhimHoatHinhAction
            })
        },                    
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GetDataJson)
