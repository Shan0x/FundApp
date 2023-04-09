/** @format */

import React, { Component } from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#B5E3BB",
          padding: 40
        }}>
        <div
          style={{
            height: "100%",
            borderRadius: "20px",
            backgroundColor: "aliceblue"
          }}>
          <NavMenu />
          <Container >
            {this.props.children}
          </Container>
        </div>
      </div>
    );
  }
}
