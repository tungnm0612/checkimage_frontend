import React, { Component } from 'react';
import axios from 'axios';
import config from '../config';

export default class AddUserScreen extends Component {
    onSubmit = (event) =>{
        event.preventDefault();
        axios.post(config.rootPath + "/api/users/adduser", {
            fullname: document.getElementById("inputFullname").value,
            email: document.getElementById("inputEmail").value,
            username: document.getElementById("inputUsername").value,
            password: document.getElementById("inputPassword").value
        }).then(res =>{
            alert(res.data.message);
            window.location.href = "/admin/adduser"
        }).catch(err =>{
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12">
                            {/* <h2 className="text-center mb-5">Bootstrap 4 Register Form</h2> */}
                            <div className="row">
                                <div className="col-md-6 mx-auto">
                                    <div className="card border-secondary">
                                        <div className="card-header">
                                            <h3 className="mb-0 my-2">Tạo Tài Khoản</h3>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit = {this.onSubmit} className="form" >
                                                <div className="form-group">
                                                    <label htmlFor="inputFullname">Họ và Tên</label>
                                                    <input type="text" className="form-control" id="inputFullname" placeholder="Nguyễn Văn A" required=""/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail">Email</label>
                                                    <input type="email" className="form-control" id="inputEmail" placeholder="email@gmail.com" required=""/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputUsername">Tài khoản</label>
                                                    <input type="text" className="form-control" id="inputUsername" placeholder="username" required=""/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputPassword">Mật khẩu</label>
                                                    <input type="password" className="form-control" id="inputPassword" placeholder="password" required=""/>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-success btn-lg float-right">Tạo tài khoản</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
