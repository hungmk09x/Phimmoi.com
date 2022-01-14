
var redux = require('redux');


const movieInitialState = {
    dataPhimBo:null,
    dataPhimChieuRap:null,
    dataPhimHoatHinh:null,
    dataPhimle:null,
    isWatching:false,
    textSearch:"",
    isFormSignUp:true
};

const allReducers = (state = movieInitialState, action) => {
    switch (action.type) {
        case "getDataPhimBo":
            return {...state,dataPhimBo:action.dataPhimBoAction}
        case "getDataPhimChieuRap":
                return {...state,dataPhimChieuRap:action.dataPhimChieuRapAction}
        case "getDataPhimHoatHinh":
                return {...state,dataPhimHoatHinh:action.dataPhimHoatHinhAction}
        case "getDataPhimLe":
                return {...state,dataPhimLe:action.dataPhimLeAction}
        case "CHANGE_WATCHING_STATUS":
                return {...state,isWatching:!state.isWatching}
        case "OFF_WATCHING_STATUS":
                return {...state,isWatching:false}
        case "GET_TEXT_SEARCH":
                return {...state,textSearch:action.getTextSearch}
        case "CHANGE_FORM_SIGN_UP":
                return {...state,isFormSignUp:!state.isFormSignUp}
        default:
            return state
    }
}

var store1 = redux.createStore(allReducers);

// store1.subscribe(()=>{
//     console.log(JSON.stringify(store1.getState()))
// })

export default store1;