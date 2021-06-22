import React, {Component} from "react";
import Header from '../components/header'
import Footer from '../components/footer'
import Content from '../components/profile'

class Perfil extends Component{
  render(){
    return(
      <>
        <Header num='4'/>
        <Content/>
        <Footer/>
      </>
    );
  }
};

export default Perfil;
