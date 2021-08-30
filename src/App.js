/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import InputPhotoURL from './components/InputPhotoURL/InputPhotoURL';
import Particles from 'react-particles-js';
// import { render } from '@testing-library/react';

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
    }
  }

  onInputChange = (event) => {
    // this.setState(input, () => event.target.value)
    // console.log(this.state.input)
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click')
  }

  render() {
    return (
      <section className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <InputPhotoURL 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRecognition />
        <section className="credits">
          <a target="_blank" href="https://icons8.com/icon/2802/brain">Brain</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </section> */}
      </section>
    );
  }
}

export default App;
