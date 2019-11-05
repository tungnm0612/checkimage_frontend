import React, { Component } from 'react'

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
            <div className="col-4 offset-4 ">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input onChange={this.handleInputChange} type="text" name="username" id="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.handleInputChange} type="password" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                    {/* <span id="message-error"></span> */}
                </form>
            </div>
        )
    }
}
