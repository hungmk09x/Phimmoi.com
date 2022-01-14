import React, { Component } from 'react';
import { connect } from "react-redux";
import GetDataJson from "./GetDataJson";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import RouterMain from './Router/RouterMain';
import {BrowserRouter as Router,} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

class App extends Component {
  // consoleClear = () => {
  //   console.clear();
  // }
  render() { 
    //this.consoleClear();
    return ( 
    
      <Router>
        <ScrollToTop/>
        <div className="app-movies hung-movie bg-main">
          <GetDataJson/>

          <Header/>

            <RouterMain/>

          {/* <Contact/> */}
          <Footer/>
        </div>
      </Router>
     );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dataPhimBoStore: state.dataPhimBo,
    dataPhimLeStore: state.dataPhimLe,
    dataPhimChieuRapStore: state.dataPhimChieuRap,
    dataPhimHoatHinhStore: state.dataPhimHoatHinh,
    isWatchingStore: state.isWatching
  }
}
// export default App;

export default connect(mapStateToProps)(App)
