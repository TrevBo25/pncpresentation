import React, { Component } from 'react';
import GMF from "../assets/getmefedhomepagegif.gif";
import TALKO from "../assets/Talkogif.gif";
import todo from "../assets/reacttododemo.gif"
import peerq from "../assets/studentwaitinggif.gif";

class Portfolio extends Component {
  render() {
    return (
      <div className={this.props.show ? "bigportfoliodown" : "bigportfolio"}>
        <h1 className="portfoliotitle" >Portfolio</h1>
        <p className="portfoliotext">See some of my work below. Most of the projects were made front to back soley by me unless stated otherwise.</p>
        <h1 className="portfoliosubtitle">Get Me Fed</h1>
        <a href="https://www.Get-Me-Fed.com" target="_blank" rel="noopener noreferrer"><p className="projectlinks">URL: https://www.Get-Me-Fed.com</p></a>
        <a href="https://github.com/TrevBo25/GetMeFed" target="_blank" rel="noopener noreferrer"><p className="projectlinks">Repo: https://github.com/TrevBo25/GetMeFed</p></a>
        <br/>
        <p className="portfoliotext">Get Me Fed is a fully functional web app demonstrating fundamental full-stack concepts. The project pulls data from multiple outside A.P.I.s (Google Maps, Yelp, Feed2Fork). Gives users recommendations based on their input. Provides directions and reviews if choosing to eat out or ingredients and step by step recipes directions if they choose to eat in. Awarded Best Solution for a Personal Project.</p>
        <br/>
        <p className="portfoliotext">Some of the techs that I used in this project are React | Redux | JavaScript | CSS | Sass | Node | Express | Massive | PostgreSQL | Twilio | Auth0 | Axios.</p>
        <div className="gifholder">
          <img className="gifitself" src={GMF} alt="loading..." />
        </div>

        <h1 className="portfoliosubtitle">TALKO</h1>
        <a href="https://github.com/TrevBo25/TwitterClone" target="_blank" rel="noopener noreferrer"><p className="projectlinks">Repo: https://github.com/TrevBo25/TwitterClone</p></a>
        <br/>
        <p className="portfoliotext">TALKO is a full-stack twitter clone in which I was the project lead. I delegated duties and spent most of my time on the back end but oversaw the whole prjoect. Focused the group to use conditional rendering and built the server and SQL database from the ground up.</p>
        <br/>
        <p className="portfoliotext">Some of the techs that I used in this project are React | Redux | JavaScript | CSS | Sass | Node | Express | Massive | PostgreSQL | Bcrypt | Axios | Jest.</p>
        <div className="gifholder">
          <img className="gifitself" src={TALKO} alt="loading..." />
        </div>

        <h1 className="portfoliosubtitle">PeerQ</h1>
        <a href="https://github.com/TrevBo25/peerq" target="_blank" rel="noopener noreferrer"><p className="projectlinks">Repo: https://github.com/TrevBo25/peerq</p></a>
        <br/>
        <p className="portfoliotext">PeerQ is a full-stack app that is intended to be used by students to help and assist other students in their class. It gives the option to either log in as a mentor or a student thus giving anyone the ability to either help or recieve help.</p>
        <br/>
        <p className="portfoliotext">Some of the techs that I used in this project are React | Redux | JavaScript | SCSS | Sass | NodeJS | ExpressJS | Massive | PostgreSQL | Axios | Socket.io.</p>
        <div className="gifholder">
          <img className="gifitself" src={peerq} alt="loading..." />
        </div>

        <h1 className="portfoliosubtitle">To-do list</h1>
        <a href="https://github.com/TrevBo25/react-assessment/tree/master/list" target="_blank" rel="noopener noreferrer"><p className="projectlinks">Repo: https://github.com/TrevBo25/react-assessment/tree/master/list</p></a>
        <br/>
        <p className="portfoliotext">This to-do list is just a simple demonstration of full-stack concepts.</p>
        <br/>
        <p className="portfoliotext">Some of the techs that I used in this project are React | Redux | JavaScript(ES6) | CSS | Node | Express | Axios.</p>
        <div className="gifholder">
          <img className="gifitself" src={todo} alt="loading..." />
        </div>

        <h1 className="portfoliosubtitle">Instructional Repos</h1>

        <h2 className="portfoliosubsubtitle">Basic</h2>
        <a href="https://github.com/TrevBo25/basic" target="_blank" rel="noopener noreferrer"><p className="projectlinks">Repo: https://github.com/TrevBo25/basic</p></a>
        <br/>
        <p className="portfoliotext">A quick walkthrough of how to set up a basic server and then create communication between the front and back ends</p>

        <h2 className="portfoliosubsubtitle">React Socket.io Webshop</h2>
        <a href="https://github.com/TrevBo25/react-sockets-webshop" target="_blank" rel="noopener noreferrer"><p className="projectlinks">Repo: https://github.com/TrevBo25/react-sockets-webshop</p></a>
        <br/>
        <p className="portfoliotext">An example that was built during a 30 minute presentation given on socket.io. Shows a few basic ways sockets can be used.</p>

      </div>
    );
  }
}

export default Portfolio;