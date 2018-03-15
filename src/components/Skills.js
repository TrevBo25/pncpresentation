import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className={this.props.show ? "bigskillsdown" : "bigskills"}>
        <h1 className="skillstitle" >My Skills & Tech</h1>
        <h1 className="skillssubtitle">Skills</h1>
        <p className="skillstext" >I am a full-stack web developer.</p>
        <br />
        <p className="skillstext" >I have built many full-stack applications from scratch as an individual and also as part of a team as the project lead. Organizing our efforts and delegating duties through tools like Trello.</p>
        <br />
        <p className="skillstext" >I have also been a mentor to students learning web development as a part of the team at DevMountain in Phoenix, Arizona. Through my time there I have seen an abundance of different bugs and coding styles so I feel very confident in my ability to handle anything that comes my way.</p>
        <h1 className="skillssubtitlet">Tech</h1>
        <ul className="techlist">
          <li className="techlistitem">React</li>
          <li className="techlistitem">Redux</li>
          <li className="techlistitem">HTML5</li>
          <li className="techlistitem">CSS3</li>
          <li className="techlistitem">JavaScript</li>
          <li className="techlistitem">NodeJS</li>
          <li className="techlistitem">ExpressJS</li>
          <li className="techlistitem">PostgreSQL</li>
          <li className="techlistitem">Sass</li>
          <li className="techlistitem">Git</li>
        </ul>
      </div>
    );
  }
}

export default Skills;
