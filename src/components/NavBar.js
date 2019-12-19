import React, { Component } from "react";

// import SearchField from "./SearchField";
// import logo from "../img/Logo.png";
import ProfilePanel from "./ProfilePanel";
// import { Link } from "react-router-dom";
// import Home from './Home';
// import CheckImage from './CheckImage';
// import UploadImage from './UploadImage';
// import logo from "../img/logo1.png"

class NavBar extends Component {
  constructor(props) {
    super();
        this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }
    
  listenScrollEvent() {
    console.log('Scroll event detected!');
    // document.getElementById('mainNav').setAttribute("class", "navbar-shrink")
  }

  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    return (
      <div onScroll={this.listenScrollEvent}>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="/"><b>PhotoGraphy</b></a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav  ml-auto">
                <li className="nav-item text-uppercase">
                  <a className="nav-link js-scroll-trigger" href="/"><b>Trang chủ</b></a>
                </li>
                <li className="nav-item text-uppercase">
                  <a className="nav-link js-scroll-trigger" href="/checkimage"><b>Kiểm tra ảnh</b></a>
                </li>
                <li className="nav-item text-uppercase">
                  <a className="nav-link js-scroll-trigger" href="/uploadimage"><b>Tải ảnh lên</b></a>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link js-scroll-trigger" href="#team">Team</a> */}
                </li>
                <li className="col nav-item">
                  <ProfilePanel
                    // className ="col"
                    username={this.props.username}
                    id = {this.props.id}
                    onLogin={this.props.onLogin}
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      // <div className="bg-navbar fixed-top">
      // <div className="container">
      //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //     <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
      //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //       <span className="navbar-toggler-icon"></span>
      //     </button>

      //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //       <ul className="navbar-nav mr-auto">
      //         <li className="nav-item active">
      //           <a className="nav-link" href="/">Trang chủ<span className="sr-only">(current)</span></a>
      //         </li>
      //         <li className="nav-item active">
      //           <a className="nav-link" href="/checkimage">Kiểm tra ảnh</a>
      //         </li>
      //         <li className="nav-item active">
      //           <a className="nav-link" href="/uploadimage">Tải ảnh lên</a>
      //         </li>
      //       </ul>
      //       <div className="">
      //           <ProfilePanel
      //             username={this.props.username}
      //             id = {this.props.id}
      //             onLogin={this.props.onLogin}
      //           />
      //       </div>
      //     </div>
      //   </nav>
      // </div>
      // </div>

      // <div className="navbar navbar-expand">
      //   <div className="container">
      //     <SearchField onSearchChanged={this.props.onSearchChanged} />
      //     <Home/>
      //     <CheckImage/>
      //     <UploadImage/>
          // <ProfilePanel
          //   username={this.props.username}
          //   id = {this.props.id}
          //   onLogin={this.props.onLogin}
          // />
      //   </div>
      // </div>
    );
  }
}

export default NavBar;
