import react, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-tsparticles';
import { ParticlesOptions } from './Particles';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={ParticlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*
                <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
