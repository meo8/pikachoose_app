import React, { useState } from "react"
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
} from "reactstrap";

const Header = (props) => {
  const {
    logged_in,
    sign_in_path,
    sign_out_path,
    sign_up_path,
    edit_acct_path } = props

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">PikaMovie⚡️</NavbarBrand>
      <NavbarToggler onClick={ toggle } />
      <Collapse isOpen={ isOpen } navbar>

        <Nav navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
           <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>

          {!logged_in &&
          <>
            <NavItem>
              <NavLink href={ sign_in_path }>Sign In</NavLink>
            </NavItem>

             <NavItem>
              <NavLink href={ sign_up_path }>Sign Up</NavLink>
            </NavItem>
          </>
          }

          {logged_in &&
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>Account</DropdownToggle>
            <DropdownMenu right>
              <a href={ edit_acct_path }><DropdownItem>Edit Account</DropdownItem></a>
              <a href="/user_history"><DropdownItem>My History</DropdownItem></a>
              <a href="/user_favorites"><DropdownItem>My Favorites</DropdownItem></a>
              <DropdownItem divider />
              <DropdownItem href={ sign_out_path }>Sign Out</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          }

        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header
