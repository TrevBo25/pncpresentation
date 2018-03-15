import React, { Component } from 'react';
import Nav from './components/Nav';
import Me from './components/Me';
import Home from './components/Home';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  constructor(){
    super();
    this.state = {
        showMe : false,
        view: "home",
        show: false
    }
    this.changeView = this.changeView.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
}

changeView(bool, str){
  this.setState({
    showMe: bool,
    view: str,
    show: false
  })
}

toggleDropdown(){
  this.setState({
      show: !this.state.show
  })
}

  render() {
    return (
      <div className="papa">
        <div className={this.state.showMe ? "" : "no"}>
          <Me changeView={this.changeView} />
        </div>
        <Nav changeView={this.changeView} toggleDropdown={this.toggleDropdown} show={this.state.show} />
        {this.state.view === "home" 
          ? <Home changeView={this.changeView} show={this.state.show}/> 
          : (this.state.view === "skills" 
            ? <Skills show={this.state.show}/> 
            : (this.state.view === "portfolio" 
              ? <Portfolio show={this.state.show}/> 
              : (this.state.view === "about" 
                ? <About show={this.state.show}/> 
                : <Contact show={this.state.show}/>)
              )
            )
        }
      </div>
    );
  }
}

export default App;
