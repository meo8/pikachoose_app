import React, { useState } from "react"
// import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Header = (props) => {
    const { logged_in, sign_in_path, sign_out_path } = props
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Pikachoose</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={ isOpen } navbar>

          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
             <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            
            {!logged_in &&
            <NavItem>
              <NavLink href="/">Sign In</NavLink>
            </NavItem>
            }
            {!logged_in &&
             <NavItem>
              <NavLink href="/">Sign Up</NavLink>
            </NavItem>
            }

            {logged_in &&
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>Settings</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Edit Account</DropdownItem>
                <DropdownItem>History</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Sign Out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            }

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header
