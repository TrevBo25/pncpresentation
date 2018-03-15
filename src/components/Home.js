import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className={this.props.show ? "homerdown" : "homer"}>
        <div className="homestuff">
            <h1 className="homename">I'm Trevor.</h1>
            <h2 className="homedes">I am a web developer that specializes in both client and server side development.</h2>
            <div onClick={() => this.props.changeView(true, "portfolio")} className="homebutton">PORTFOLIO</div>
            <div onClick={() => this.props.changeView(true, "skills")} className="homebutton">SKILLS AND TECHS</div>
        </div>
      </div>
    );
  }
}

export default Home;