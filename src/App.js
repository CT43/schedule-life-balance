import React, { Component } from 'react'
import './App.css'
import IdeasContainer from './components/IdeasContainer'
import Schedule from './components/Schedule'
import PieChart from './components/PieChart'
import NewSchedule from './components/NewSchedule'
import ActivityForm from './components/ActivityForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Idea Board</h1>
        </div>
        <ActivityForm />
        <NewSchedule />
        <Schedule />
        <PieChart />
      </div>
    );
  }
}

export default App
