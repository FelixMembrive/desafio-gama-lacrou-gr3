import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import FooterMobile from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import Select from "../../components/Select";

//mostra alerta/modal/página que diz que em 24h você receberá um link levando ao cadastro

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //!mudar redirecionamento assim que soubermos pra onde redirecionar
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-upperImage bg-no-repeat bg-100-auto bg-top font-nunito">
        <Header />
        <h1 className="font-bold text-2xl text-center m-4">Pré-cadastro</h1>
        <p className="text-center mx-4 mb-8">
          Nessa etapa, precisamos que você preencha todas essas informações para
          validarmos o seu cadastro e vínculo profissional.
        </p>
        <Input
          className="mt-4"
          labelText="Nome social completo *"
          labelClassName="font-bold"
          type="text"
          inputId="input-name-waiting"
          inputClassName="min-w-[291px] md:w-[440px] p-4"
          placeholder="Digite seu nome"
          required={true}
        />
        <Select
          className="mt-4"
          labelClassName="font-bold"
          labelText="Profissão *"
          inputId="select-states-waiting"
          optionValues={["Psicologia", "Medicina", "Enfermagem", "Nutrição"]}
          optionTexts={["Psicologia", "Medicina", "Enfermagem", "Nutrição"]}
          selectClassName="min-w-[291px] md:w-[440px] p-4"
        />
        <Select
          className="mt-4"
          labelClassName="font-bold"
          labelText="Prefixo do Conselho Profissional *"
          inputId="select-states-waiting"
          optionValues={["CRP | Psicologia", "CRM | Medicina", "COREN | Enfermagem"]}
          optionTexts={["CRP", "CRM", "COREN"]}
          selectClassName="min-w-[291px] md:w-[440px] p-4"
        />
        <Input
          className="mt-4"
          labelText="Número do Registro *"
          labelClassName="font-bold"
          type="text"
          inputId="input-name-waiting"
          inputClassName="min-w-[291px] md:w-[440px] p-4"
          placeholder="Digite o número"
          required={true}
        />
        <hr className="bg-[#CFCFCF] min-w-[328px] mx-2 h-0.5 mt-6"/>
        <Input
          className="mt-4"
          labelText="Email *"
          labelClassName="font-bold"
          type="email"
          inputId="input-name-waiting"
          inputClassName="min-w-[291px] md:w-[440px] p-4"
          placeholder="Digite seu email"
          required={true}
        />
      </div>
      <FooterMobile />
    </>
  );
}
