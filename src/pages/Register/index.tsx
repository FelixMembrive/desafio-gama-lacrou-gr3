import React from "react";
import { Link } from "react-router-dom";
import Example from "../../components/Accordion";
import FooterMobile from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";

//leva à página de login, para que a pessoa possa entrar no perfil

export default function Register() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-upperImage bg-no-repeat bg-100-auto bg-top font-nunito">
        <Header />
      </div>
      <FooterMobile />
    </>
  );
}
