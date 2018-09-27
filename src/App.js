import React, { Component } from 'react'
import Header from './components/header'
import Box from './components/box'
import Hero from './components/hero'
import Body from './components/body'
import MoveBr from './components/movebr'
import TitleAnimation from './components/TitleAnimation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <TitleAnimation />
        <Body />
        <Box />
      </div>

    );
  }
}

export default App;
