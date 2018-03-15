import React, { Component } from 'react';
import Ski2 from '../assets/MEEEEEEEEE.jpg';

class Me extends Component {
  render() {
    return (
      <div className="bigme">
        <div onClick={() => this.props.changeView(false, "home")} className="mepic"> 
          <img src={Ski2} alt="" className="imgme"/>        
        </div>
        <h1 onClick={() => this.props.changeView(false, "home")} className="name">Trevor Brown</h1>
        <div className="redbar"></div>
        <h1 onClick={() => this.props.changeView(false, "home")} className="title">Full-Stack Web Developer</h1>
      </div>
    );
  }
}

export default Me;
