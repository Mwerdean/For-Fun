import React, { Component } from 'react'
import scentricHome from '../assets/scentric-store-crop.png'
import { CSSTransition } from 'react-transition-group'


const Translate = ({ children, ...props }) => (
    <CSSTransition {...props} timeout={6000} classNames='translate'>
        {children}
    </CSSTransition>
)

const TranslateR = ({ children, ...props }) => (
    <CSSTransition  {...props} timeout={6000} classNames="translateR">
        {children}
    </CSSTransition>
)

export default class Body extends Component {
    constructor(props) {
        super(props),
        this.state = {
            show: false
        }
        this.myRef = React.createRef()
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        if(event.path[1].scrollY >= 500) {
            this.setState({ show: true })
        } else if(event.path[1].scrollY <=100){
            this.setState({ show: false })
        }
    }



  render() {
    return (
      <div>
            <section className = "content">
                <article>
                    <h1>Matthew Werdean</h1>
                    <hr />
                    <p>
                        <div className={`NoTranslate ${this.state.show ? 'ShowTranslate' : ''}`}>
                            <Translate in={this.state.show} >
                                    <div>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </div>
                            </Translate>
                        </div>
                        <div className={`NoTranslate ${this.state.show ? 'ShowTranslate' : ''}`}>
                            <TranslateR in={this.state.show} >
                                    <div>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </div>
                            </TranslateR>
                        </div>
                        <div className={`NoTranslate ${this.state.show ? 'ShowTranslate' : ''}`}>
                            <Translate in={this.state.show} >
                                    <div>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </div>
                            </Translate>
                        </div>
                    </p>
                </article>
            </section>

            <div className = 'grid'>
                <figure className = "effect-sadie">
                    <img src = {scentricHome} alt = 'img01' />
                    <figcaption>
                        <h2>Scentric <span>.Store</span></h2>
                        <p>E-commerce website with sleek features</p>
                        <a href='#'>View more</a>
                    </figcaption>
                </figure>
                <figure className = "effect-sadie">
                    <img src = {scentricHome} alt = 'img01' />
                    <figcaption>
                        <h2>Scentric <span>.Store</span></h2>
                        <p>E-commerce website with sleek features</p>
                        <a href='#'>View more</a>
                    </figcaption>
                </figure>
            </div>
            <div className = 'grid'>
                <figure className = "effect-sadie">
                    <img src = {scentricHome} alt = 'img01' />
                    <figcaption>
                        <h2>Scentric <span>.Store</span></h2>
                        <p>E-commerce website with sleek features</p>
                        <a href='#'>View more</a>
                    </figcaption>
                </figure>
                <figure className = "effect-sadie">
                    <img src = {scentricHome} alt = 'img01' />
                    <figcaption>
                        <h2>Scentric <span>.Store</span></h2>
                        <p>E-commerce website with sleek features</p>
                        <a href='#'>View more</a>
                    </figcaption>
                </figure>
            </div>
        <div style={{height: 2000}}></div>
      </div>
    )
  }
}
