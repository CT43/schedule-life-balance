import React, { Component } from 'react'
import './App.css'
import IdeasContainer from './components/IdeasContainer'
import Schedule from './components/schedule'
import PieChart from './components/PieChart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Idea Board</h1>
        </div>
        <Schedule />
        <PieChart />
      </div>
    );
  }
}

export default App
