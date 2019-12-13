import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default class PersonalScreen extends Component {
    render() {
        return (
            <div>
                <div className="">
                <NavBar
                    onSearchChanged={this._onSearchChanged}
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                </div>

                <header class="masthead-test bgPersonal" >
                    <div class="overlay"></div>
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading">
                            <h1>Clean Blog</h1>
                            <span class="subheading">A Blog Theme by Start Bootstrap</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
