import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div style={{ height: "100vh", border: "48px solid #B5E3BB", borderRadius: "20px" }}>
        <div style={{ height: "100%" }}>
          <NavMenu />
          <Container>
            {this.props.children}
          </Container>
        </div>
      </div>
    );
  }
}
