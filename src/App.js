import React, { Component } from 'react'
import Header from './components/header'
import Box from './components/box'
import Hero from './components/hero'
import Body from './components/body'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Body />
      </div>

    );
  }
}

export default App;
