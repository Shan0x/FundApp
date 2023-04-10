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
          backgroundColor: "#B5E3BB",
          padding: 40
        }}>
        <div
          style={{
            height: "auto",
            borderRadius: "20px",
            backgroundColor: "aliceblue",
            paddingBottom: '20px',
            
          }}>
          <NavMenu />
          <Container style={{ height: "100%" }}>
            {this.props.children}
          </Container>
        </div>
      </div>
    );
  }
}
