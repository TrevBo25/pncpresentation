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
        view: "home",
        show: false
    }
    this.changeView = this.changeView.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
}

changeView(str){
  this.setState({
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
        <Me changeView={this.changeView} />
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
