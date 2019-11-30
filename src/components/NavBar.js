import React, { Component } from "react";

import SearchField from "./SearchField";
// import logo from "../img/Logo.png";
import ProfilePanel from "./ProfilePanel";
// import { Link } from "react-router-dom";
import Home from './Home';
import CheckImage from './CheckImage';
import UploadImage from './UploadImage';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand">
        <div className="container">
          <SearchField onSearchChanged={this.props.onSearchChanged} />
          <Home/>
          <CheckImage/>
          <UploadImage/>
          <ProfilePanel
            username={this.props.username}
            id = {this.props.id}
            onLogin={this.props.onLogin}
          />
        </div>
      </div>
    );
  }
}

export default NavBar;
