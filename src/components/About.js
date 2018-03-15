import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Ski from '../assets/meskii.jpg';
import Golf from '../assets/megolf.png';
import Broncs from '../assets/mebroncs.jpg';

class About extends Component {

  

  render() {


    return (
      <div className={this.props.show ? "bigaboutdown" : "bigabout"}>
        <h1 className="abouttitle" >About Me</h1>
        <p className="abouttext" >I am Trevor. I'm a driven, enthusiastic professional with a passion for computers and their immense diversity. I always strive to further expand my knowledge and grow as an individual.</p>
        <br/>
        <p className="abouttext">I currently live in Phoenix, Arizona but after being raised in Illinois then attending the University of Iowa to study Computer Science I call many places home.</p>
        <br/>
        <p className="abouttext">I have had a love for technology and the web ever since I was very young and it has grown as I have grown into who I am today. Knowing what field I wanted to be in was easy but getting there was the hard part. After a stint at the U of Iowa I eventually found myself attending DevMountain (a full-time web development bootcamp).</p>
        <br/>
        <p className="abouttext">Tech and computers are not my only passion though. I enjoy participating in and watching just about any sport, football being my favorite. Finding time to read is difficult but when I can I enjoy reading non-fiction. Taking time to hangout with friends and make new ones are very important as well.</p>
        <br/>
        <div className="carouselholder">
          <Carousel autoplay={true} autoplayInterval = {3000} wrapAround = {true}>
            <img src={Ski}/>
            <img src={Golf}/>
            <img src={Broncs}/>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default About;