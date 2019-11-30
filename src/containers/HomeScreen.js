import React, { Component } from "react";

import axios from "../axios";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class HomeScreen extends Component {
  state = {
    images: [],
    searchString: ""
  };

  componentDidMount() {
    axios
      .get("/api/images")
      .then(data => {
        console.log(data.data);
        this.setState({
          images: data.data
        });
      })
      .catch(err => console.error(err));
  }

  _onSearchChanged = text => this.setState({ searchString: text });

  render() {
    // const displayedImages = [] || this.state.images.filter(
    //   img =>
    //     img.title.includes(this.state.searchString) ||
    //     img.description.includes(this.state.searchString)
    // );

    return (
      <div className="bg">
        <NavBar
          onSearchChanged={this._onSearchChanged}
          username={this.props.username}
          onLogin={this.props.onLogin}
        />
        <div className="homeimg">
          <img className="background-home" src="https://images.wallpaperscraft.com/image/camera_hand_desert_136040_1920x1080.jpg" alt="background-home" />
          <div className="top-left">
            <h1>Image <br/> & <br/>Photographer</h1>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default HomeScreen;
