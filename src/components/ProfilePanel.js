import React, { Component } from "react";
import {Link} from "react-router-dom"
// import axios from '../axios'

class ProfilePanel extends Component {
  logout = () => {
    // axios.delete("http://localhost:6969/api/auth/logout")
    // .then(() =>{
    //   window.location.href = "/";
    // }).catch((err) =>{
    //   console.log(err);
    // });
    window.localStorage.removeItem('access_token');
    window.location.href = "/";
  }
  render() {
    const display = this.props.username ? (
      <div>
        <span className="navbar-text">Xin chào, {this.props.username} &ensp;</span>
        <button 
          className="btn btn-secondary btn-sm"
          onClick={this.logout}
        >
          Đăng xuất
        </button>
      </div>
    ) : (
      <Link to="/login">
        <button
          className="btn btn-secondary btn-sm"
          // onClick={this.props.onLogin}
        >
            Đăng nhập
        </button>
      </Link>
    );
    return <div className="col-3 profile_panel text-right">{display}</div>;
  }
}

export default ProfilePanel;
