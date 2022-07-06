import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import WaitingListModal from "../../components/WaitingListModal";

//leva ao pré-cadastro (sign-up)

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center bg-upperImage bg-no-repeat bg-100-auto bg-top font-nunito">
      <img className="mt-20" src="/src/assets/images/medica.svg" alt="" />
      <h1 className="font-bold text-2xl text-center m-4">
        Lacrei Saúde para profissinais voluntários
      </h1>
      <p className="text-center mx-4 mb-8">
        Melhorar a qualidade e expectativa de vida e a experiência de pessoas LGBTQIAP+ é o principal objetivo do Lacrei. Por isso, buscamos profissionais preparados para atender com segurança e qualidade na nossa
        plataforma. Venha fazer parte!
      </p>
      <Modal 
      buttonStyle="bg-verde-lacrei text-white mb-4"
      buttonText="Quero ajudar!"
      title="Onde você atende?"
      >
        <div className="mx-[3.87rem] flex flex-col items-center">
        <Button to="/signup" text="São Paulo" className="bg-verde-lacrei text-white mt-6 mb-8 font-bold self-center w-[12.68rem]"/>
        <WaitingListModal/>
        </div>
      </Modal>
      <div className="flex font-semibold text-sm">
        <span className="mr-2">já tem cadastro?</span>
        <a href="https://app.portallacrei.com.br/auth/"> 
        <strong className="text-rosa-lacrei-400">acessar minha conta</strong> 
        </a>
      </div>
    </div>
  );
}
