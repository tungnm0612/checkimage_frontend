import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import config from '../config';
import Footer  from '../components/Footer';
import web3 from '../web3';
import image from '../image';
// import enableMetamask from '../enableMetamask';
import Web3 from 'web3';

export default class UploadImageScreen extends Component {
    state = {

    }

    async componentDidMount(){
        // await this.getImage();
    }

    getImage = async () => {
        const Images = await image.methods.getImage().call();
        this.setState({infoImage: Images})
        // console.log(this.state.infoImage)

        const infoImageObject = this.state.infoImage.map(a => {
            return Object.assign({}, a)
        });
        
        console.log(infoImageObject);
        this.setState({
            infoImageObject: infoImageObject
        })
        // for (let index = 0; index < infoImageObject.length; index++) {
        //     const element = infoImageObject[index];
        //     if(element._hashImage === "hashimage1"){
        //         console.log(element)
        //         return
        //     }
        // }
    }
     
    onChange= async (evt) => {
        evt.preventDefault();
        this.setState({
            file: evt.target.files[0],
            idUser: this.props.id
        })
    }


    onClick = async (evt) => {
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
        axios.post(config.rootPath + '/api/images/hashuploadimage',formData, configes).then( async (res) => {
            console.log(res.data.data);
            // this.setState({
            //     hashImage: res.data.data.hashImage
            // })
            await this.getImage();
            for (let index = 0; index < this.state.infoImageObject.length; index++) {
                const element = this.state.infoImageObject[index];
                if(element._hashImage === res.data.data){
                    alert("Ảnh của bạn đã có trên BlockChain");
                    return
                } else{
                    if (index === this.state.infoImageObject.length - 1 && element._hashImage !== res.data.data) {
                        this.setState({
                            hashImage: res.data.data
                        })
                        //addImage to blockchain
                        const acounts = await web3.eth.getAccounts();
                        if (acounts.length === 0) {
                            new Web3(window.ethereum.enable());
                        } else {
                            if (acounts.length > 0) {
                                await image.methods.addImage(this.state.idUser, this.state.hashImage).send({from: acounts[0]}).on('transactionHash', (transactionHash) =>{
                                    console.log(transactionHash);
                                    axios.post(config.rootPath + '/api/images/addinfoimage', {
                                        idUser: this.state.idUser,
                                        hashImage: this.state.hashImage,
                                        transactionHash: transactionHash
                                    }).then(res =>{
                                        console.log(res.data.message)
                                    }).catch(err =>{
                                        console.log(err)
                                    })
                                });
                                await this.getImage();
                            }
                        }
                    }
                }
            }
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
                                                    <button  onClick = {this.onClick}  type="submit" className="btn btn-success btn-block btn-lg mb-2">Tải lên</button>
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
