/** @format */

import React, { Component } from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";
import { AuthProvider } from "./user/AuthContext";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#B5E3BB",
          padding: "40px",
          flex: "auto",
          justifyContent: "center",
          alignItems: "center",
          overflow: "auto",
        }}>
        <div
          style={{
            minHeight: "100%",
            borderRadius: "20px",
            backgroundColor: "aliceblue",
            padding: "40px",
            overflow: "auto",
          }}>
          <AuthProvider>
            <NavMenu />
          </AuthProvider>
          <Container style={{ height: "100%" }}>
            {this.props.children}
          </Container>
        </div>
      </div>
    );
  }
}
