import React, {Component} from "react";
import Header from '../components/header'
import Footer from '../components/footer'
import Content from '../components/sobre'

class Sobre extends Component{
  render(){
    return(
      <>
        <Header num='2'/>
        <Content/>
        <Footer/>
      </>
    );
  }
};

export default Sobre;
