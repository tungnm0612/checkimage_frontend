import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from 'axios';
import config from '../config'
import TableUser from "../components/TableUser";
import { Table } from 'antd';

export default class PersonalScreen extends Component {
    state = {
        listImage: []
    }

    // componentDidMount(){
    //     const idUser = this.props.id
    //     axios.post(config.rootPath + '/api/images/personal', {idUser})
    //         .then( res =>{
    //             console.log(res.data)
    //         }
    //     )
    // }

    render() {
        const tableAdmin = this.props.username === "admin" ? (
            <TableUser/>
        ):(
            <div></div>
        )
        // console.log(this.props.id)
        const idUser = this.props.id
        axios.post(config.rootPath + '/api/images/personal', {idUser})
            .then( res =>{
                // console.log(res.data.listImage)
                const listImage = res.data.listImage.map((row, index) =>({
                    key: index + 1,
                    _id: row._id,
                    idUser: row.idUser,
                    hashImage: row.hashImage,
                    transactionHash: row.transactionHash,
                    createdAt: row.createdAt,
                    updatedAt: row.updatedAt
                }))
                this.setState({
                    listImage: listImage
                })
                // this.setState({
                //     listImage: res.data.listImage
                // })
                // const list = res.data.listImage.map((image, index)=>{
                //     return (
                //         <tr key = {image._id}>
                //                     <th scope="row">{index + 1}</th>    
                //                     <td>{image.transactionHash}</td>
                //                     <td>{image.hashImage}</td>
                //                     <td>{im.email}</td>
                //                     {/* <td><Link className="btn btn-secondary btn-sm" to="/admin/changepassword">Đổi mật khẩu</Link></td> */}
                //         </tr>
                //     )
                // })
            }
        ).catch(err => {
            console.log(err)
        })

        const columns = [
            {
                title: "STT",
                dataIndex: "key",
                key: "key"
            },
            {
                title: "Mã giao dịch",
                dataIndex: "transactionHash",
                key: "transactionHash"
            },
            {
                title: "Thời gian tạo",
                dataIndex: "createdAt",
                key: "createdAt"
            },
        ]
        return (
            <div>
                <div className="">
                <NavBar
                    onSearchChanged={this._onSearchChanged}
                    username={this.props.username}
                    id = {this.props.id}
                    onLogin={this.props.onLogin}
                />
                </div>

                <header className="masthead-test bgPersonal" >
                    <div className="overlay"></div>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading intro-lead-in">
                            <h1>Trang cá nhân</h1>
                            <span className="subheading">A Blog Theme by Start Bootstrap</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                <div className="listUser">
                    {tableAdmin}
                </div>
                <div className="listimagePersonal">
                    <div className="container">
                        <h1 className="">Danh sách các giao dịch của bạn</h1>
                        <Table columns={columns} dataSource={this.state.listImage} />
                        {/* <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Mã giao dịch</th>
                                    <th scope="col">Thời gian tạo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listImage.map((image, index) =>{
                                    return(
                                        <tr key = {image._id}>
                                            <th scope="row">{index + 1}</th>    
                                            <td>{image.transactionHash}</td>
                                            <td>{image.createdAt}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table> */}
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
