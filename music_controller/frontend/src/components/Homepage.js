import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<p> This is the Home Page </p>} />
            <Route path="/join" element={<RoomJoinPage />} />
            <Route path="/create" element={<CreateRoomPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
