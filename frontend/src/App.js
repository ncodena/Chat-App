import React from 'react';
import {Router, Route, Link} from "react-router-dom";
import HomePage from "../views/HomePage";
import Navbar from "./Navbar";
import ChatRoomPage from "../views/ChatRoomPage"
import {createBrowserHistory as createHistory} from "history";
import { useState, useEffect } from "react";
import './App.css';

const history = createHistory();

function App({ location }) {

  useEffect(() => {});

  return (
    <div className="App">
      <Router history={history}>
        <Navbar/>
        <Route path="/" exact component={HomePage}/>
        <Route path="/chatroom" exact component={ChatRoomPage} />
      </Router>
    </div>
  );
}

export default App;
