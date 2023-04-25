import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./App.css";
import { Layout } from "./components/Layout";
import { AuthProvider, useAuth } from './components/user/AuthContext';
import { Login } from "./components/user/Login";


function AppContent() {
  const { isLoggedIn } = useAuth();
  return (
    <Routes>
      {AppRoutes.map((route, index) => {
        const { element, path, ...rest } = route;
        if ((path === '/u/dashboard'
          || path === '/u/settings'
          || path === '/u/create')
          && !isLoggedIn) {
          return <Route key={path} {...rest} path={path} element={<Login />} />;
        }
        return <Route key={path} {...rest} path={path} element={element} />;
      })}
    </Routes>
  );
};


export default class App extends Component {
  static displayName = App.name;
  render() {
    return (
      <AuthProvider>
        <Layout>
          <AppContent />
        </Layout>
      </AuthProvider>
    );
  }
}
