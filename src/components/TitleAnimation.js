import React, { Component } from 'react'

export default class TitleAnimation extends Component {
  render() {
    return (
        <div>
            <body className='reveal-body'>
                <h1 className="reveal-text1">MATTHEW WERDEAN</h1>
                <div className="bottom-line"></div>
                <div className="reveal-text2">Web Developer &#9675; Designer</div>
            </body>
                <div class="arrow arrow-first"></div>
                <div class="arrow arrow-second"></div>
        </div>
    )
  }
}
