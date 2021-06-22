import React from "react";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import Post from "./pages/Post"

import Posts from "./pages/backoffice/Posts.js"
import Tags from "./pages/backoffice/Tags.js"
import Reports from "./pages/backoffice/Reports.js"
import Messages from "./pages/backoffice/Messages.js"
import Users from "./pages/backoffice/Users.js"
import Header from './components/header.js';
import CreatePost from "./pages/CreatePost";
import HomeLogged from "./pages/BackOffice";

import Contact from "./pages/Contact";
import Sobre from "./pages/Sobre";
import Perfil from "./pages/Perfil";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Esqueci from "./pages/Esqueci";
import BackOffice from "./pages/BackOffice";
import LogOut from "./pages/backoffice/Logout";



const Routes = () => (
  <>
    <Router>
      <Home path="/" />

      <Posts path="/posts" />
      <Tags path="/tags" />
      <Users path="/users" />
      <Messages path="/messages" />
      <Reports path="/reports" />
      <CreatePost path="/createpost" />

      <Contact path="/fale-conosco" />
      <Sobre path="/sobre" />
      <Perfil path="/users/:id" />
      <Cadastro path="/cadastro" />
      <Login path="/login" />
      <Esqueci path="/esqueci" />
      <BackOffice path="/backoffice" />
      <LogOut path='/logout' />
    </Router>

  </>
);

export default Routes;