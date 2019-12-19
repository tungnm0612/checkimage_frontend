import React, { Component } from "react";
// import {Link} from "react-router-dom"
// import axios from '../axios'

class ProfilePanel extends Component {
  state= {

  }
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
  // onSubmit = () =>{
    
  // }

  render() {
    const display = this.props.username ? (
      <div className="form-inline my-2 my-lg-0">
        <a className="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Xin chào, {this.props.username}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item personal-item" href="/personal">Trang cá nhân</a>
          {/* <a className="dropdown-item" data-toggle="modal" data-target="#changePasswordNavModal">Đổi mật khẩu</a> */}
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" onClick={this.logout}>Đăng xuất</a>
        </div>
        {/* <span className="navbar-text">Xin chào, {this.props.username} &ensp;</span>
        <button 
          className="btn btn-secondary btn-sm"
          onClick={this.logout}
        >
          Đăng xuất
        </button> */}
      </div>
    ) : (
      <div className="form-inline my-2 my-lg-0">
        <a className="nav-link dropdown" role="button" href="/login">Đăng nhập</a>
        {/* <a className="nav-link dropdown" role="button" data-toggle="modal" data-target="#exampleModal">Đăng nhập</a>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
    return (
      <div>
        {display}
        {/* <div className="col-3 profile_panel text-right">{display}</div> */}
        
      </div>
    )
  }
}

export default ProfilePanel;
