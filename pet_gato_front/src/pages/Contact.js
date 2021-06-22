import React, {Component} from "react";
import Header from '../components/header'
import Footer from '../components/footer'
import Content from '../components/contact'

class Contact extends Component{
  render(){
    return(
      <>
        <Header num='3'/>
        <Content/>
        <Footer/>
      </>
    );
  }
};

export default Contact;
