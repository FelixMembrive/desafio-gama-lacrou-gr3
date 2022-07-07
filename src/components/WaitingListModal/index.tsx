import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import Select from "../Select";

export default function WaitingListModal() {
  return (
    <Modal
      buttonText="outra localidade"
      buttonStyle="drop-shadow-[0px_1px_6px_rgba(0,0,0,0.4)] border border-0.5 border-verde-lacrei text-verde-lacrei mb-11 font-bold w-[12.68rem] font-nunito "
    >
      <form className="flex flex-1 flex-col items-center">
        <p className="text-center mx-7 mt-4 font-semibold text-sm max-w-md">
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
          inputClassName="min-w-[291px] md:w-[440px] p-4"
          placeholder="Digite seu nome"
          required={true}
        />
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
        <Select
        className="mt-4"
        labelClassName="font-bold"
        labelText="Estado *"
        inputId="select-states-waiting"
        optionValues={["AC","AL","AP", "AM", "BA","CE","DF","ES", "GO", "MA", "MT", "MS","MG", "PA", "PB", "PR","PE","PI","RJ","RN", "RS","RO","RR","SC","SE","TO"]}
        optionTexts={["AC","AL","AP", "AM", "BA","CE","DF","ES", "GO", "MA", "MT", "MS","MG", "PA", "PB", "PR","PE","PI","RJ","RN", "RS","RO","RR","SC","SE","TO"]}
        selectClassName="min-w-[291px] md:w-[440px] p-4"
        />
        <Input
        className="mt-4"
          labelText="Profissão *"
          labelClassName="font-bold"
          type="text"
          inputId="input-name-waiting"
          inputClassName="min-w-[291px] md:w-[440px] p-4"
          placeholder="Digite sua profissão"
          required={true}
        />
        <Modal 
        buttonText="Enviar informações"
        buttonStyle="bg-verde-lacrei drop-shadow-[0px_1px_6px_rgba(0,0,0,0.4)] w-[223px] mt-12 mb-4 text-white font-[18px]"
        title="Agradecemos seu interesse!"
        titleStyle="self-center mb-4"
        >
          <p className="text-center self-center mb-6">Acreditamos que em breve poderemos crescer juntos para melhorar a assistência à nossa incrível comunidade LGBTQIAP+!</p>

          <Button to="/login" onPress={document.location.reload} text="Voltar para a Lacrei!" className="bg-verde-lacrei drop-shadow-[0px_1px_6px_rgba(0,0,0,0.4)] w-[223px] text-white font-[18px] self-center mb-8"/>
        </Modal>
      </form>
      <a href="/login" className="self-center mb-8 text-[#ff1192]">Cancelar</a>
    </Modal>
  );
}
