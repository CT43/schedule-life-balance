import React, { Component } from 'react'
import './App.css'
import ScheduleContainer from './containers/ScheduleContainer'
import PieChartContainer from './containers/PieChartContainer'
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
          <Route exact path="/" component={ScheduleContainer} />
          <Route exact path="/schedule/:id" component={ScheduleContainer} />
          <PieChartContainer />
        </div>
      </Router>
    );
  }
}

export default App
