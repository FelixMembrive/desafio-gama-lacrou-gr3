import Input from "../Input";
import Modal from "../Modal";

export default function WaitingListModal() {
  return (
    <Modal
      buttonText="outra localidade"
      buttonStyle="border border-0.5 border-verde-lacrei text-verde-lacrei mb-11 font-bold"
    >
      <div className="flex flex-col items-center">
        <p className="text-center mx-7 my-4 font-semibold text-sm">
          Nesse momento, a Lacrei Saúde atua apenas no Estado de São Paulo.
          Preencha aqui suas informações para a lista de espera e, assim que a
          plataforma for implementada no seu Estado, te avisaremos dos próximos
          passos :)
        </p>
        <Input
          labelText="Nome social completo *"
          type="text"
          inputId="input-name-waiting"
        />
      </div>
    </Modal>
  );
}
