import React, { Component } from 'react'
// import NavBar from '../components/NavBar'

export default class LoginScreen extends Component {
    state = {
        username: '',
        password: '',
    }

    handleInputChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.onLogin(this.state.username, this.state.password);
    }

    render() {
        console.log(this.state);
        return (
            <div>
                {/* <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input onChange={this.handleInputChange} type="text" name="username" id="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.handleInputChange} type="password" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div> */}
                    {/* <span id="message-error"></span> */}
                {/* </form> */}
                {/* <NavBar
                    onSearchChanged={this._onSearchChanged}
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                /> */}
                <div className="img-overlay">
                    <img className="background-check cover" src="https://images.wallpaperscraft.com/image/palm_bird_swing_150161_1440x900.jpg" alt="background-check" />
                </div>
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-5">
                                <div className="card">
                                <div className="card-body text-dark">
                                    {/* <h4>Import File Image to Check</h4> */}
                                    <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input onChange={this.handleInputChange}  type="text" autoFocus="autofocus" className="form-control" name="username" id="username" placeholder="Enter your username"/>
                                        {/* <input type="file" className="form-control-file fileimg" id="exampleFormControlFile1"></input> */}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input onChange={this.handleInputChange} type="password" className="form-control" name="password" id="password" placeholder="Enter your password"/>
                                    </div>
                                    <div className="form-group btnlogin">
                                        <button type="submit" className="btn btn-success btn-block btn-lg mb-2">Login</button>
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
        )
    }
}
