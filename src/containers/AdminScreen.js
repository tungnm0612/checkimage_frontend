import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import config from '../config';

export default class AdminScreen extends Component {
    state ={
        users: []
    }

    componentDidMount(){
        axios.get(config.rootPath + "/api/users/getalluser").then(res =>{
            console.log(res.data.data)
            this.setState({users: res.data.data})
        }).catch(err => {
            console.log(err);
        })
    }

    // onchangePassword = (event) =>{
    //     event.preventDefault()

    // }

    render() {
        return (
            <div className="container">
                <h1 className="">Thông tin tài khoản</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tài Khoản</th>
                            <th scope="col">Họ và Tên</th>
                            <th scope="col">Email</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user, index) =>{
                            return(
                                <tr key = {user._id}>
                                    <th scope="row">{index + 1}</th>    
                                    <td>{user.username}</td>
                                    <td>{user.fullname}</td>
                                    <td>{user.email}</td>
                                    {/* <td><Link className="btn btn-secondary btn-sm" to="/admin/changepassword">Đổi mật khẩu</Link></td> */}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div>
                    {/* <button type="button" class="btn btn-secondary btn-lg">Tạo tài khoản</button> */}
                    <Link className="btn btn-secondary btn-lg" to="/admin/adduser">Tạo tài khoản</Link>
                </div>
            </div>
        )
    }
}
