import './App.css'

import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state={
      note:""
    }
  }

  notes=(e)=>{
    this.setState({note:e.target.value})
  }

  render() {
    return (
      <div className="container">
        <div className="input">
            <h3>Input</h3>
            <textarea className="input-text" onChange={(e)=>this.notes(e)}/>
          </div>
          <div className="output">
            <h3>Pro Note</h3>
          <div className="output-text">{this.state.note}</div>
        </div>                
      </div>
    )
  }
}


export default App
