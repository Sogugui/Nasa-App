import React, { Component } from "react";
import {Route,Routes} from 'react-router-dom'
import Home from "../../components/Main/Home"
import Landing from "../../components/Main/Landing/Landing";
import Create from "../Main/Landing/Create/Create";
import Neas from "../../components/Main/Neas/Neas";
import NewNea from "./Neas/NewNea/NewNea";
import ListLanding from "./Landing/ListLanding/ListLanding";

class Main extends Component {
  render() {
    return  <main>
    <Routes>
      <Route element={<Home />} path={"/"} />
      <Route element={<Landing />} path={"/landing"} />
      <Route element={<ListLanding/>} path="landing/list" />
      <Route element={<Create />} path="landing/create" />
      <Route element={<Neas />} path={"/neas"} />
      <Route element={<NewNea/>} path='/neas/new'/>

    </Routes>
  </main>;
  }
}

export default Main;
