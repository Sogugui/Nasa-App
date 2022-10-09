import React, { Component } from "react";
import {Route,Routes} from 'react-router-dom'
import Home from "../../components/Main/Home"
import Landing from "../../components/Main/Landing/Landing";
import Neas from "../../components/Main/Neas/Neas";
import ListLanding from "./Landing/ListLanding/ListLanding";

class Main extends Component {
  render() {
    return  <main>
    <Routes>
      <Route element={<Home />} path={"/"} />
      <Route element={<Landing />} path={"/landing"} />
      <Route element={<ListLanding/>} path="landing/list" />
      <Route element={<Neas />} path={"/neas"} />

    </Routes>
  </main>;
  }
}

export default Main;
