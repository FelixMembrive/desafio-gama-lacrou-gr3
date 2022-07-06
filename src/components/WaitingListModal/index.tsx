import { Link } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";

export default function WaitingListModal() {
  return (
    <Modal
      buttonText="outra localidade"
      buttonStyle="border border-0.5 border-verde-lacrei text-verde-lacrei mb-11 font-bold w-[12.68rem]"
    >
      <form className="flex flex-1 flex-col items-center">
        <p className="text-center mx-7 mt-4 font-semibold text-sm">
          Nesse momento, a Lacrei Saúde atua apenas no Estado de São Paulo.
          Preencha aqui suas informações para a lista de espera e, assim que a
          plataforma for implementada no seu Estado, te avisaremos dos próximos
          passos :)
        </p>
        <Input
        className="mt-4"
          labelText="Nome social completo *"
          labelClassName="font-bold"
          type="text"
          inputId="input-name-waiting"
          inputClassName="min-w-[291px] p-4"
          placeholder="Digite seu nome"
          required={true}
        />
        <Input
        className="mt-4"
          labelText="Email *"
          labelClassName="font-bold"
          type="email"
          inputId="input-name-waiting"
          inputClassName="min-w-[291px] p-4"
          placeholder="Digite seu email"
          required={true}
        />
        <Input
        className="mt-4"
          labelText="Profissão *"
          labelClassName="font-bold"
          type="text"
          inputId="input-name-waiting"
          inputClassName="min-w-[291px] p-4"
          placeholder="Digite sua profissão"
          required={true}
        />
        <Button to="/signup" text="Enviar informações" className="bg-verde-lacrei text-white mb-4 font-bold self-center w-[14rem] mt-12"/>
      </form>
      <a href="/login" className="self-center mb-8">Cancelar</a>
    </Modal>
  );
}
