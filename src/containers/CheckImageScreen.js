import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import config from '../config';
import Footer from '../components/Footer';
// import image from '../image';

export default class CheckImageScreen extends Component {
    state = {

    }

    onChange= async (evt) => {
         evt.preventDefault();
        await this.setState({
            file: evt.target.files[0],
        })
    }

    onClick = async (evt) => {
        await evt.preventDefault()
        if (!this.state.file) {
            alert('Bạn chưa chọn file.')
            return;
        }
        const formData = await new FormData();
        await formData.append("checkimage", this.state.file);
        const configes = await {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        await axios.post(config.rootPath + '/api/images/checkimage', formData, configes).then( async (res) =>{
            console.log(res.data)
            this.setState({
                message: res.data.message,
                email: res.data.infoPhotographer.email,
                fullname: res.data.infoPhotographer.fullname,
                transactionHash: res.data.infoPhotographer.transactionHash
            })
        })
    }
    
    render() {
        
        const info = this.state.email ? (
            // <div className="col">
            <div className="card-body-info text-dark">
                <div className="card">
                        <h4 className="alert-heading" id="emailAlert">{this.state.message}</h4>
                        <hr/>
                        <div className="card-info">
                            <p className="mb-0" id="fullnamePhotographer"> Tác giả: {this.state.fullname}</p>
                            <p id="emailPhotographer">Email: {this.state.email}</p>
                            <p id="txHash">Mã giao dịch trên Blockchain: {this.state.transactionHash}</p>
                            {/* <p>&ensp; {this.state.transactionHash}</p> */}
                            <p>Bạn có thể truy cập vào website <a target="_blank" rel="noopener noreferrer" href="https://ropsten.etherscan.io/">ropsten.etherscan.io</a> để kiểm tra giao dịch</p>
                        </div>
               </div>
            </div>
            // </div>
        ):(
            <div className="card-body text-dark">
                {/* <div className="card"> */}
                    <h4 className="alert-heading" id="emailAlert">{this.state.message}</h4>
                {/* </div> */}
            </div>
        )
        
        return (
            <div>
                <div>
                    <NavBar
                        onSearchChanged={this._onSearchChanged}
                        username={this.props.username}
                        onLogin={this.props.onLogin}
                    />
                </div>
                <header class="masthead-test bgCheckImage" >
                    <div class="overlay"></div>
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading">
                            <h1>Kiểm tra ảnh</h1>
                            {/* <span class="subheading">A Blog Theme by Start Bootstrap</span> */}
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                    <div className="wrapper" id="checkimage">
                        <div className="container flexcontainer">
                            {/* <div className="row"> */}
                                <div className="col">
                                    <div className="card card-check">
                                        <div className="card-body text-dark title-upload">
                                            <h4 className="" >Chọn ảnh bạn muốn kiểm tra</h4>
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
                                    </div>
                                </div>
                                <div className="col">
                                    {info}
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                {/* </div> */}
                <div>
                    <Footer/>
                </div>
            </div>

        )
    }
}
