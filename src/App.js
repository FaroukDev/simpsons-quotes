import React, { Component } from "react";
import logo from "./logo.svg";
import Lamp from "./components/Lamp"
import "./App.css";

import Quotes from "./components/Quotes";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      working: props.false
    
    };
    this.state ={
      rotate: props.false
    };
    
  }
  handleClick = () => {
    this.setState({ working: !this.state.working});
    this.setState({rotate: !this.state.rotate});
  };

  
  
  
  render() {
    const work = this.state.working ? 'No' : 'Yes';
    const anim = this.state.rotate ? 'App-anim-logo' :'App-logo';
    return (
      <div className="App">
      
        <header className="App-header">
          <img  src={logo} className={anim} alt="logo" />
          
          
          <h1 className="App-title">Simpsons Quotes</h1>
          
        </header>
        <span>Does homer work :) ? </span>
        <button
        onClick={this.handleClick}
         className={work}>{work.toUpperCase()}
         
         </button>
         <figure className={work} />
        <Quotes/>
     
        <Lamp on />
        <Lamp />

        
      </div>
    );
  }
}

export default App;