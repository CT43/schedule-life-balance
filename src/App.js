import React, { Component } from 'react'
import './App.css'
import IdeasContainer from './components/IdeasContainer'
import Schedule from './components/Schedule'
import PieChart from './components/PieChart'
import NewSchedule from './components/NewSchedule'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Idea Board</h1>
        </div>
        <NewSchedule />
        <div><p><Schedule /> <PieChart /></p></div>
      </div>
    );
  }
}

export default App
