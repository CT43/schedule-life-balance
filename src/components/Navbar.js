import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, FormGroup, FormControl, Button } from 'react-bootstrap'
import NewSchedule from './NewSchedule'
import ScheduleSearch from './ScheduleSearch'
class MyNavbar extends Component {

	render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Schedule-Life-Balance</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <NewSchedule />
            </FormGroup>{' '}
          </Navbar.Form>
          <Navbar.Form pullLeft>
            <FormGroup>
              <ScheduleSearch />
            </FormGroup>{' '}
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    )
	}
};

export default MyNavbar
