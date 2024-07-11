import React from "react";
import { Link } from "react-router-dom";
import { Box, Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import logo from '../../aaaaa-logo.jpg';

function NavBar() {

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Student portal
        </p>
        <Breadcrumb fontWeight='medium' fontSize='md' marginRight={10}>
            <BreadcrumbItem>
            <Link to="/">Students</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
            <Link to="/courses">Courses</Link>
            </BreadcrumbItem>
        </Breadcrumb>
     
      </header>
    </>
  );
}

export default NavBar;
