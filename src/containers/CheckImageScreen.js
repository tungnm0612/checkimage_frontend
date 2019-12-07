import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import config from '../config';
import Footer from '../components/Footer';
import image from '../image';

export default class CheckImageScreen extends Component {
    state = {

    }
    async componentDidMount(){
        // await this.getImage();
    }

    getImage = async () => {
        const Images = await image.methods.getImage().call();
        this.setState({infoImage: Images})
        // console.log(this.state.infoImage)

        const infoImageObject = await this.state.infoImage.map(a => {
            return Object.assign({}, a)
        });
        
        console.log(infoImageObject);
        this.setState({
            infoImageObject: infoImageObject
        })
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
        await axios.post(config.rootPath + '/api/images/hashcheckimage', formData, configes).then( async (res) =>{
            console.log(res.data.data)
            this.setState({
                hashImage: res.data.data
            })
            await this.getImage();
            for (let index = 0; index < this.state.infoImageObject.length; index++) {
                const element = this.state.infoImageObject[index];
                if(element._hashImage === this.state.hashImage){
                    console.log(element)
                    this.setState({
                        objImage: element,
                        message: "Ảnh của bạn là ảnh nguyên gốc",
                    })
                    console.log("anh cua tac gia co id la: " + this.state.objImage._idUser)
                    axios.post(config.rootPath + '/api/images/finduserandfindimage', {
                        findIDPhotographer: this.state.objImage._idUser,
                        findHashImage: this.state.objImage._hashImage
                    }).then(res =>{
                        console.log(res.data.infoPhotographer)
                        this.setState({
                            email: res.data.infoPhotographer.email,
                            fullname: res.data.infoPhotographer.fullname,
                            transactionHash: res.data.infoPhotographer.transactionHash
                        })
                    }).catch(err => { 
                        console.log(err)
                    })
                } else {
                    if (index === this.state.infoImageObject.length - 1 && element._hashImage !== this.state.hashImage) {
                        this.setState({
                            message: "Ảnh của bạn không phải là ảnh nguyên gốc",
                            email: ""
                        })
                        console.log(this.state.message)
                    }
                }
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
                <p id="txHash">Mã giao dịch: {this.state.transactionHash}</p>
                <p>Bạn có thể truy cập vào website <a target="_blank" href="https://ropsten.etherscan.io/">ropsten.etherscan.io</a> để kiểm tra giao dịch</p>
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
