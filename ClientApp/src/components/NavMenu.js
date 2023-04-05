/** @format */

import React, { Component, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { UserInfo } from "./user/DonationInfo/UserInfo"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: "lightgrey",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "600px !important",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

export const NavMenu =() =>  {
  const [collapsed,setCollapsed] = useState(true)
  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }
  const user = UserInfo()

console.log(user,"user")
    return (
      <header>
        <Navbar
          className='navbar-expand-sm navbar-toggleable-sm ng-white box-shadow mb-3'
          container
          light>
          <NavbarBrand tag={Link} to='/'>
            <img
              src='/fund.png'
              alt='FundFriendsLOGO'
              style={{ width: "80px", height: "80px" }}
            />
          </NavbarBrand>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Fundrasing name, @name, #tags...'
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <NavbarToggler onClick={toggleCollapse} className='mr-2' />
          <Collapse
            className='d-sm-inline-flex flex-sm-row-reverse'
            isOpen={collapsed}
            navbar>
            <ul className='navbar-nav flex-grow'>
              <NavItem >
                <NavLink tag={Link} className='text-dark' to='/'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className='text-dark' to='/sign-up'>
                  Create 
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className='text-dark' to='/login'>
                Login
                </NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }

