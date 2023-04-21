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
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

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

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */
  console.log(color);
  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 35,
      height: 35
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const userAvatar = ({ user }) => {
  if (!user) {
    return (
      <Avatar src="/broken-image.jpg" />
    );
  }
  const userFullName = `${user.userFirstName} ${user.userLastName}`;
  return (
    <Avatar
      {...stringAvatar(userFullName)}
    />
  );
}
const pages = [
  { name: "Fundraiser List", link: "/browse/fundraisers" },
  { name: "Dashboard", link: "/u/dashboard" },
  { name: "Settings", link: "/u/settings" },
  { name: "Donate Page", link: "/donate" }
];

export const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }
  const user = UserInfo();
  const userFullName = user ? `${user.userFirstName} ${user.userLastName}` : '';

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
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
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenNavMenu} sx={{ p: 1 }}>
                {user ? (
                  <Avatar
                    {...stringAvatar(userFullName)}
                  />
                ) : (
                  <Avatar src="/broken-image.jpg" />
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.link} style={{ textDecoration: 'none' }}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Navbar>
      </header>
    );
  }

