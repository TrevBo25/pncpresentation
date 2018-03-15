import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="big">
                <div className="up">
                        <div className="links">
                            <a href="mailto:TrevorBrown25@gmail.com"><i className="link fa fa-envelope-square fa-2x" aria-hidden="true"></i></a>
                            <a href="https://github.com/TrevBo25" target="_blank" rel="noopener noreferrer"><i className="link fa fa-github-square fa-2x" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/trevor-brown/" target="_blank" rel="noopener noreferrer"><i className="link fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                            <a href="https://twitter.com/Father_T" target="_blank" rel="noopener noreferrer"><i class="link fa fa-twitter-square fa-2x" aria-hidden="true"></i></a>
                        </div>
                        <div className="burgerside">
                            <div onClick={this.props.toggleDropdown} className="burger">
                                <i className="burgericon fa fa-bars fa-2x" aria-hidden="true"></i>
                            </div>
                        </div>
                </div>
                <div className={this.props.show ? "down" : "notdown" }>
                        <h1 onClick={() => this.props.changeView(true, "skills")} className="listitem">Skills and Techs</h1>
                        <h1 onClick={() => this.props.changeView(true, "portfolio")} className="listitem">Portfolio</h1>
                        <h1 onClick={() => this.props.changeView(true, "about")} className="listitem">About Me</h1>
                        <h1 onClick={() => this.props.changeView(true, "contact")} className="listitem">Contact</h1>
                </div>
            </div>
        );
    }
}

export default Nav;