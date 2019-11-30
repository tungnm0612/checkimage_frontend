import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import config from '../config';
import Footer from '../components/Footer';

export default class CheckImageScreen extends Component {
    state = {

    }

    onChange=(evt) => {
        evt.preventDefault();
        this.setState({
            file: evt.target.files[0],
        })
    }

    onClick = (evt) => {
        evt.preventDefault()
        if (!this.state.file) {
            alert('Bạn chưa chọn file.')
            return;
        }
        const formData = new FormData();
        formData.append("checkimage", this.state.file);
        const configes = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post(config.rootPath + '/api/images/checkimage', formData, configes).then(res =>{
            if (res.data.status === false){
                this.setState({
                    message: res.data.message,
                    email: "",
                    fullname: ""
                })
            } else{
                this.setState({
                    message: res.data.message,
                    email: res.data.infoPhotographer.email,
                    fullname: res.data.infoPhotographer.fullname
                })
            }
        })
    }
    render() {
        const info = this.state.email ? (
            <div className="card-body text-dark">
                <h4 className="alert-heading" id="emailAlert">{this.state.message}</h4>
                <hr/>
                <p className="mb-0" id="fullnamePhotographer">Tác giả: {this.state.fullname}</p>
                <p id="emailPhotographer">Email: {this.state.email}</p>
            </div>
        ):(
            <div className="card-body text-dark">
                <h4 className="alert-heading" id="emailAlert">{this.state.message}</h4>
            </div>
        )
        
        return (
            <div>
                <NavBar
                    onSearchChanged={this._onSearchChanged}
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                <div className="img-overlay">
                    <img className="background-check cover" src="https://images.wallpaperscraft.com/image/macbook_apple_laptop_camera_cup_99153_2560x1440.jpg" alt="background-check" />
                </div>
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-5">
                                <div className="card">
                                    <div className="card-body text-dark">
                                        <h4>Chọn ảnh bạn muốn kiểm tra</h4>
                                        <form encType="multipart/form-data">
                                        <div className="form-group fileimg">
                                            {/* <label for="email">Email</label> */}
                                            {/* <input type="file" autofocus="autofocus" className="form-control" id="email" placeholder="Enter your email"/> */}
                                            <input onChange = {this.onChange} type="file" className="form-control-file " name="uploadimage" id="uploadimage"></input>
                                        </div>
                                        <div className="btncheck">
                                        <button onClick = {this.onClick} type="button" className="btn btn-success btn-block btn-lg mb-2">Kiểm tra</button>
                                        </div>
                                        </form>
                                    </div>
                                    {info}
                                </div>
                            </div>
                            {/* <div className="col-md-6 align-self-center">
                                <h1 className="display-4 mb-3 bgfont">Houses <br/> &  <br/> apartments </h1>
                                <h3 className="mb-4">For sale and for rent.</h3>
                            </div> */}
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Footer/>
            </div>

        )
    }
}
