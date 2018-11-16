import React, { Component } from 'react'
import './App.css'
import Schedule from './components/Schedule'
import PieChart from './components/PieChart'
import NewSchedule from './components/NewSchedule'
import ActivityForm from './components/ActivityForm'
import MyNavbar from './components/Navbar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <MyNavbar />
        </div>
        <ActivityForm />
        <Route exact path="/" component={Schedule} />
        <Route exact path="/schedule/:id" component={Schedule} />
        <PieChart />
      </div>
      </Router>
    );
  }
}

export default App
