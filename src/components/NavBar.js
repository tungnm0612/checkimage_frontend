import React, { Component } from "react";

// import SearchField from "./SearchField";
// import logo from "../img/Logo.png";
import ProfilePanel from "./ProfilePanel";
// import { Link } from "react-router-dom";
// import Home from './Home';
// import CheckImage from './CheckImage';
// import UploadImage from './UploadImage';
import logo from "../img/logo1.png"

class NavBar extends Component {
  render() {
    return (
      <div className="bg-navbar fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Trang chủ<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/checkimage">Kiểm tra ảnh</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/uploadimage">Tải ảnh lên</a>
              </li>
            </ul>
            {/* <div className="form-inline my-2 my-lg-0"> */}
                <ProfilePanel
                  username={this.props.username}
                  id = {this.props.id}
                  onLogin={this.props.onLogin}
                />
            {/* </div> */}
          </div>
        </nav>
      </div>
      </div>

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
