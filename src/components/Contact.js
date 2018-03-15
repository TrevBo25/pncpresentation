import React, { Component } from 'react';
import Resume from '../assets/TrevorResumev1.pdf';

class Contact extends Component {
  render() {
    return (
      <div className={this.props.show ? "bigcontactdown" : "bigcontact"}>
        <h1 className="contacttitle" >Contact Me</h1>
        <p className="contactwords">I am a full-stack web developer, designer, and software engineer currently located in Phoenix, Arizona. Being born and raised in the Midwest (Illinois) and only recently moving to Phoenix in July of 2017, I am currently pursuing opportunities in any location. Please feel free to contact me with any questions you may have, employment opportunities, suggestions, or learning opportunities!</p>
        <div className="father">
          <div className="linksholder">
            <p className="contacttextl">Email:</p>
            <p className="contacttextl">Github:</p>
            <p className="contacttextl">LinkedIn:</p>
            <p className="contacttextl">Twitter:</p>
          </div>
          <div className="linksholder">
          <a href="mailto:TrevorBrown25@gmail.com"><p className="contacttextr">TrevorBrown25@gmail.com</p></a>
          <a href="https://github.com/TrevBo25" target="_blank" rel="noopener noreferrer"><p className="contacttextr">/TrevBo25</p></a>
          <a href="https://www.linkedin.com/in/trevor-brown/" target="_blank" rel="noopener noreferrer"><p className="contacttextr">/in/trevor-brown/</p></a>
          <a href="https://twitter.com/Father_T" target="_blank" rel="noopener noreferrer"><p className="contacttextr">/Father_T</p></a>
          </div>
        </div>
        <a target="_blank" alt="Trevor Resume" title="Trevor Resume" href={Resume}><div className="resume">
          My Resume.
        </div></a>
        <br/>
      </div>
    );
  }
}

export default Contact;