import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Tabs, Container, AppBar, Toolbar } from "@mui/material";

export const Header = () => {
  const [tabClicked, setTabClickedValue] = useState();

  return (
    <Container maxWidth="md">
      <AppBar>
        <Toolbar>
          <Tabs
            textColor="inherit"
            value={tabClicked}
            onChange={(event: any, tabClicked) => {
              setTabClickedValue(tabClicked);
            }}
            indicatorColor="secondary"
          >
            <NavLink
              to="/carousel"
              style={{ textDecoration: "none", color: "white", margin: "10px" }}
            >
              {"Carousel"}
            </NavLink>
            <NavLink
              to="/userform"
              style={{ textDecoration: "none", color: "white", margin: "10px" }}
            >
              {"UserForm"}
            </NavLink>
            <NavLink
              to="/imagecarousel"
              style={{ textDecoration: "none", color: "white", margin: "10px" }}
            >
              {"Image Carousel"}
            </NavLink>

            <NavLink
              to="/about"
              style={{ textDecoration: "none", color: "white", margin: "10px" }}
            >
              {"About Us"}
            </NavLink>
            <NavLink
              to="/hocA"
              style={{ textDecoration: "none", color: "white", margin: "10px" }}
            >
              {"HocA"}
            </NavLink>
            <NavLink
              to="/hocB"
              style={{ textDecoration: "none", color: "white", margin: "10px" }}
            >
              {"HocB"}
            </NavLink>
            <NavLink
              to="/increment"
              style={{ textDecoration: "none", color: "white", margin: "10px" }}
            >
              {"Increment"}
            </NavLink>

            <NavLink
              to="/redux"
              style={{ textDecoration: "none", color: "white", margin: "10px" }}
            >
              {"REDUX"}
            </NavLink>
          </Tabs>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
