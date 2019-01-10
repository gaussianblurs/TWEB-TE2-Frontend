import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink, Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap'
import '../assets/scss/Header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar() {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }))
  }

  render() {
    return (
      <Navbar className="custom-nav1" dark expand="md">
        <NavbarBrand to="/" tag={Link}>
          <span>TE2 TWEB</span>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to="/coming-soon">Coming soon</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Header
