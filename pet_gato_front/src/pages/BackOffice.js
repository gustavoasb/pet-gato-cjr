import React from "react";
import { Button } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "@reach/router";
import { Wrapper, PetGatoColumn } from "../components/styles.js";
import Header from "../components/header"
import Btn from "../components/Btn"
const BackOffice = () => (
  <>
    <Header></Header>
    <Wrapper>
      <PetGatoColumn position={"center"} elementos={"box box box box box"}>
        <h1>
          Bem Vindo ao seu Backoffice <FaRegHeart />
        </h1>
        <Link to="/posts" style={{ textDecoration: "none" }}>
          <Btn
            height="40px"
            width="18%"
            fontSize={5}
            backgroundColor="#FFFFFF"
            color="black"
            hoverColor="#FFFFFF"
            hoverBackgroundColor="#BA66A3"
          >
            Posts
          </Btn>
        </Link>
        <Link to="/tags" style={{ textDecoration: "none" }}>
          <Btn
            height="40px"
            width="18%"
            fontSize={5}
            backgroundColor="#FFFFFF"
            color="black"
            hoverColor="#FFFFFF"
            hoverBackgroundColor="#BA66A3"
          >
            Tags
          </Btn>
        </Link>
        <Link to="/reports" style={{ textDecoration: "none" }}>
          <Btn
            height="40px"
            width="18%"
            fontSize={5}
            backgroundColor="#FFFFFF"
            color="black"
            hoverColor="#FFFFFF"
            hoverBackgroundColor="#BA66A3"
          >
            Reports
          </Btn>
        </Link>
        <Link to="/messages" style={{ textDecoration: "none" }}>
          <Btn
            height="40px"
            width="18%"
            fontSize={5}
            backgroundColor="#FFFFFF"
            color="black"
            hoverColor="#FFFFFF"
            hoverBackgroundColor="#BA66A3"
          >
            Messages
          </Btn>
        </Link>
        <Link to="/users" style={{ textDecoration: "none" }}>
          <Btn
            height="40px"
            width="18%"
            fontSize={5}
            backgroundColor="#FFFFFF"
            color="black"
            hoverColor="#FFFFFF"
            hoverBackgroundColor="#BA66A3"
          >
            Users
          </Btn>
        </Link>
      </PetGatoColumn>
    </Wrapper>
  </>
);

export default BackOffice;
