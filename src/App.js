import React, { Component } from 'react'
import Header from './components/header'
import Box from './components/box'
import Hero from './components/hero'
import Body from './components/body'
import MoveBr from './components/movebr'
import TitleAnimation from './components/TitleAnimation'
import Sky from './assets/sky.png'
import Guy from './assets/bird.png'

const options = {
  max: 10,
  perspective: 1000,
  scale: 1.05
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleAnimation />
        <div className='padding'></div>
        <div className='allContent'>
          <MoveBr 
            options={{}}
            style={{
              background: `url(${Sky}) no-repeat fixed center`,
              backgroundSize: 'fit',
              height: 400,
              width: 740,
            }}
          >
          <MoveBr
            options={options}  
          >
            <img src={Guy} alt=""/>
            </MoveBr>
          </MoveBr>
          <Box />
        </div>
      </div>

    );
  }
}

export default App;
