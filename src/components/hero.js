import React, { Component } from 'react'
import gif from '../assets/namegif2.gif'
import ReactDOM from 'react-dom'

export default class Hero extends Component {
    constructor(props) {
        super(props),
        this.state = {
            transform: (0, 0),
            transform2: (0, 0),
            menuShow: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = event.path[1].scrollY,
        itemTranslate = ( scrollTop/2 + 'px');
        if(event.path[1].scrollY >= 1000) {
            this.setState({ menuShow: true })
        }
        console.log(scrollTop)
    this.setState({
      transform: itemTranslate,
      transform2: (scrollTop/10 + 'px')
    });
    }

  render() {
    return (
      <div>

        <header className = "hero-box">
            <div className = "name" style = {{transform: `translate(0, ${this.state.transform})`}}></div>
            <div className = "fore-bird" style = {{transform: `translate(${this.state.transform}, -${this.state.transform})`}}></div>
            <div className = "back-bird" style = {{transform: `translate(${this.state.transform2}, -${this.state.transform2})`}}></div>
            <div className = "layer1"></div>
            <div className = "layer2"></div>
            <div className = "layer3"></div>
            <div className = "layer4"></div>
        </header>
      </div>
    )
  }
}
