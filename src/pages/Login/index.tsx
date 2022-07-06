import Button from "../../components/Button";
import Header from "../../components/Header";
import Medica from "../../components/Images/Medica";

//leva ao pré-cadastro (sign-up)

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center bg-upperImage bg-no-repeat bg-cover bg-top">
      <Header/>
      <Medica />
      <h1>Lacrei Saúde para profissinais voluntários</h1>
      <p className="text-center">
        Melhorar a qualidade e expectativa de vida e a experiência de pessoas LGBTQIAP+ é o principal objetivo do Lacrei. Por isso, buscamos profissionais preparados para atender com segurança e qualidade na nossa
        plataforma. Venha fazer parte!
      </p>
      <Button
        className="text-white bg-verde-lacrei"
        to="/signup"
        text="Quero ajudar!"
      />
      <div className="flex">
        <span>já tem cadastro?</span>
        <span>acessar minha conta</span>
      </div>
    </div>
  );
}
