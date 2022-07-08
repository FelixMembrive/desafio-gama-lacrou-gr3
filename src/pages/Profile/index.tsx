import { Link } from "react-router-dom";
import CustomAccordion from "../../components/Accordion";
import Checkbox from "../../components/Checkbox";
import FooterMobile from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import ProfilePhoto from "../../components/ProfilePhoto";
import Select from "../../components/Select";

const profile = {
  name: "Fulana de Tal",
  description:
    "Descrição sobre você - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet ",
  photoSource: "../../assets/images/profile-photo.png",
  photoDescription:
    "Descrição da foto - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet",
  personalInfo: {
    info1: "info",
    info2: "info2",
  },
  professionalInfo: {
    info1: "info",
    info2: "info2",
  },
  clinic: {
    info1: "info",
    info2: "info2",
  },
  services: {
    info1: "info",
    info2: "info2",
  },
};

export default function Profile() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-upperImage bg-no-repeat bg-100-auto bg-top font-nunito">
        <Header />
        <h1 className="font-bold text-[36px] text-center mb-8">
          Olá, {profile.name}!
        </h1>
        <section className={"flex flex-row items-center"}>
          <ProfilePhoto></ProfilePhoto>
          <div className="container">
            <p className="w-200 mx-8">{profile.description}</p>
          </div>
        </section>
        <p className="m-8">{profile.photoDescription}</p>
        <button className="button">Editar Perfil</button>
        <hr className="bg-[#CFCFCF] min-w-[328px] mx-2 h-0.5 mt-6" />
        <form>
          <CustomAccordion key={1} title="Informações pessoais">
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
              labelText="Pronome e artigo"
              inputId="select-pronouns-profile"
              optionValues={["Ele/Dele", "Ela/Dela", "Elu/Delu", "Outro"]}
              optionTexts={["Ele/Dele", "Ela/Dela", "Elu/Delu", "Outro"]}
              selectClassName="min-w-[291px] mobile-md:min-w-[328px] p-4"
            />
            <Select
              className="mt-4"
              labelText="Etnia"
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
              labelText="Identidade de gênero"
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
            <Select
              className="mt-4"
              labelText="Sexualidade"
              inputId="select-sexuality-profile"
              optionValues={[
                "Assexual",
                "Lésbica",
                "Heterossexual",
                "Panssexual",
                "Bissexual",
                "Gay",
                "Outra"
              ]}
              optionTexts={[
                "Assexual",
                "Lésbica",
                "Heterossexual",
                "Panssexual",
                "Bissexual",
                "Gay",
                "Outra"
              ]}
              selectClassName="min-w-[291px] mobile-md:min-w-[328px] p-4"
            />
            <Select
              className="mt-4"
              labelText="PCD"
              inputId="select-disability-profile"
              optionValues={[
                "Deficiência motora",
                "Deficiência cognitivo-intelectual",
                "Deficiência auditiva",
                "Deficiência visual",
              ]}
              optionTexts={[
                "Deficiência motora",
                "Deficiência cognitivo-intelectual",
                "Deficiência auditiva",
                "Deficiência visual",
              ]}
              selectClassName="min-w-[291px] mobile-md:min-w-[328px] p-4"
            />
          </CustomAccordion>
          <CustomAccordion key={2} title="Informações profissionais">
            <Input
              className="mt-4"
              labelText="Profissão"
              value="Pessoa Psicóloga"
              labelClassName="font-bold"
              type="text"
              inputId="input-profession-profile"
              inputClassName="min-w-[291px] mobile-md:min-w-[328px] p-4 bg-[#CFCFCF]"
              placeholder="Digite seu nome"
              disabled={true}
            />
            <Input
              className="mt-4"
              labelText="Número de inscrição do conselho de classe"
              value="CRP 08/15188"
              labelClassName="font-bold"
              type="text"
              inputId="input-email-profile"
              inputClassName="min-w-[291px] mobile-md:min-w-[328px] p-4 bg-[#CFCFCF]"
              placeholder="Digite seu nome"
              disabled={true}
            />
            <a href="/login" className="self-center mb-11 text-[#ff1192]">
              Editar
            </a>
            <hr className="bg-[#CFCFCF] min-w-[328px] mx-2 h-0.5 mt-6" />
          </CustomAccordion>
        </form>
      </div>
      <FooterMobile />
    </>
  );
}
