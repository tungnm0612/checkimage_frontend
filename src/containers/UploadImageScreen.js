import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import config from '../config';
import Footer  from '../components/Footer';

export default class UploadImageScreen extends Component {
    state = {
        
    }
     
    onChange=(evt) => {
        evt.preventDefault();
        this.setState({
            file: evt.target.files[0],
            idUser: this.props.id
        })
    }

    onClick = (evt) => {
        evt.preventDefault()
        
        if (!this.state.file) {
            alert('Bạn chưa chọn file!')
            return;
        }
        if(!this.state.idUser){
            alert('Bạn chưa đăng nhập!')
            return;
        }
        // const idUser = this.state.idUser
        const formData = new FormData();
        formData.append("uploadimage", this.state.file);
        formData.append("uploadimage", this.state.idUser);
        const configes = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post(config.rootPath + '/api/images/uploadimage',formData, configes).then(res => {
            console.log('RES', res.data.fileNameInServer)
            console.log(this.state.idUser)
            let filePath = res.data.fileNameInServer
            if (filePath) {
                filePath = filePath.split('\\')[1]
            }
            alert(res.data.message);
            window.location.href = '/uploadimage';
        })
    }

    render() {
        return (
            <div>
                <NavBar
                    onSearchChanged={this._onSearchChanged}
                    username={this.props.username}
                    id = {this.props.id}
                    onLogin={this.props.onLogin}
                />
                <div>
                    <div className="img-overlay">
                        <img className="background-upload cover" src="https://images.wallpaperscraft.com/image/camera_background_lens_77036_1680x1050.jpg" alt="background-upload" />
                    </div>
                    <div className="wrapper wrapper-upload">
                        <div className="container">
                            <div className="row">
                                <div className="col-5">
                                    <div className="card">
                                        <div className="card-body text-dark">
                                            <h4>Chọn ảnh bạn muốn tải lên</h4>
                                            <form encType="multipart/form-data">
                                                <div className="form-group">
                                                    {/* <label for="email">Email</label> */}
                                                    {/* <input type="file" autofocus="autofocus" className="form-control" id="email" placeholder="Enter your email"/> */}
                                                    <input onChange = {this.onChange} type="file" className="form-control-file fileimg" name="uploadimage" id="uploadimage"></input>
                                                </div>
                                                <div className="btncheck">
                                                    <button  onClick = {this.onClick} type="submit" className="btn btn-success btn-block btn-lg mb-2">Tải lên</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-md-6 align-self-center">
                                    <h1 className="display-4 mb-3 bgfont">Houses <br/> &  <br/> apartments </h1>
                                    <h3 className="mb-4">For sale and for rent.</h3>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Footer/>
            </div>
        )
    }
}
