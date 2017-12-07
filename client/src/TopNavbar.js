import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  let navComponents = "";
  if (props.showNavItems !== false){
    navComponents = <div>
        <Nav pullRight>
          <Link to="/secret"><Navbar.Text>Secret</Navbar.Text></Link>
        </Nav>
       <Nav pullRight>
        <Link to="/cars"><Navbar.Text>Cars</Navbar.Text></Link>
        </Nav>
        <Nav pullRight>
          <Link to="/planes"><Navbar.Text>Planes</Navbar.Text></Link>
        </Nav>
        <Nav pullRight>
          <Link to="/trains"><Navbar.Text>Trains</Navbar.Text></Link>
        </Nav></div>;
  }else{
    navComponents = ""
  }
  //console.log("shownavitems - " + props.showNavItems);
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem onClick={props.onSignOut}>Sign Out</NavItem>
        </Nav>
        {navComponents}
      </Navbar.Collapse>
    </Navbar>
  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
