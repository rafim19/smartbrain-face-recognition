import './App.css';
import React, { Component } from 'react';
import Clarifai from 'clarifai';
import SignIn from './components/SignIn/SignIn';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import InputPhotoURL from './components/InputPhotoURL/InputPhotoURL';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Credits from './components/Credits/Credits';
import Register from './components/Register/Register';

const app = new Clarifai.App({
  apiKey: '78ebd812a2c141ffb6a9673cf948d485'
 });

const particleOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 700
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signIn',
      signInStatus: false
    };
  }

  calculateFaceLocation = (data) => {
    const faceBox = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.querySelector('#input-image')
    const width = Number(image.width); // Wrap it in number because image.width returns a string
    const height = Number(image.height);
    return {
      // return the actual position
      // the result of these will be in px because width and height are in pixel
      leftCol: faceBox.left_col * width,
      topRow: faceBox.top_row * height,
      rightCol: width - (faceBox.right_col * width),
      bottomRow: height - (faceBox.bottom_row * height)
    }
  }

  changeBoxState = (box) => {
    this.setState(() => {
        return {box: box}
      })
  }

  onInputChange = (event) => {
    this.setState(() => {
      return {input: event.target.value}
    });
  }

  onButtonSubmit = () => {
    this.setState(() => {
      return {imageUrl: this.state.input}
    });
    app.models.predict(
      'a403429f2ddf4b49b307e318f00e528b',
      this.state.input)
    .then(response => this.changeBoxState(this.calculateFaceLocation(response)))
    .catch(err => console.log('ada error', err))
  }

  onRouteStateChange = (routeValue) => {
    if (routeValue === 'signIn' || routeValue === 'register') {
      this.setState(() => {
        return {signInStatus: false}
      })
    } else if (routeValue === 'home') {
      this.setState(() => {
        return {signInStatus: true}
      })
    } else {
      console.error('error di onRouteStateChange di App.js')
    }
    this.setState(() => {
      return {route: routeValue}
    })
  }

  render() {
    const { imageUrl, box, route, signInStatus } = this.state;
    return (
      <section className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation signInStatus={signInStatus} routeChange={this.onRouteStateChange}/>
        { (route === 'home')  
            ? <section>
                <Logo />
                <Rank />
                <InputPhotoURL 
                  inputChange={this.onInputChange}
                  buttonSubmit={this.onButtonSubmit}
                />
                <FaceRecognition box={box} imageUrl={imageUrl}/>
                <Credits />
              </section> 
            : (route === 'signIn')
              ? <SignIn buttonSignIn={this.onRouteStateChange} buttonRegister={this.onRouteStateChange}/>
              : <Register buttonRegister={this.onRouteStateChange}/>
        }
      </section>
    );
  }
}

export default App;