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
        <Example key={1} title="Informações pessoais">
          <Input
            className="mt-4"
            labelText="Nome social completo *"
            labelClassName="font-bold"
            type="text"
            inputId="input-name-profile"
            inputClassName="min-w-[291px] mobile-md:min-w-[328px] p-4"
            placeholder="Digite seu nome"
            required={true}
          />
          <Input
            className="mt-4"
            labelText="Email *"
            labelClassName="font-bold"
            type="email"
            inputId="input-email-profile"
            inputClassName="min-w-[291px] mobile-md:min-w-[328px] p-4"
            placeholder="Digite seu nome"
            required={true}
          />
          <Select
            className="mt-4"
            labelClassName="font-bold"
            labelText="Pronome e artigo *"
            inputId="select-pronouns-profile"
            optionValues={["Ele/Dele", "Ela/Dela", "Elu/Delu", "Outro"]}
            optionTexts={["Ele/Dele", "Ela/Dela", "Elu/Delu", "Outro"]}
            selectClassName="min-w-[291px] mobile-md:min-w-[328px] p-4"
          />
          <Select
            className="mt-4"
            labelClassName="font-bold"
            labelText="Etnia *"
            inputId="select-pronouns-profile"
            optionValues={[
              "Indígena",
              "Branca",
              "Parda",
              "Amarela",
              "Preta",
              "Outra",
            ]}
            optionTexts={[
              "Indígena",
              "Branca",
              "Parda",
              "Amarela",
              "Preta",
              "Outra",
            ]}
            selectClassName="min-w-[291px] mobile-md:min-w-[328px] p-4"
          />
          <Select
            className="mt-4"
            labelClassName="font-bold"
            labelText="Identidade de gênero *"
            inputId="select-pronouns-profile"
            optionValues={[
              "Intersexo",
              "Homem Trans",
              "Não-Binárie",
              "Agênera",
              "Andrógeno",
              "Queer",
              "Mulher Trans",
              "Mulher Cis",
              "Homem Cis",
              "Outro",
            ]}
            optionTexts={[
                "Intersexo",
                "Homem Trans",
                "Não-Binárie",
                "Agênera",
                "Andrógeno",
                "Queer",
                "Mulher Trans",
                "Mulher Cis",
                "Homem Cis",
                "Outro",
            ]}
            selectClassName="min-w-[291px] mobile-md:min-w-[328px] p-4"
          />
        </Example>
      </div>
      <FooterMobile />
    </>
  );
}
