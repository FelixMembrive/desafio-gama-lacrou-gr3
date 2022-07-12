import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import Select from "../Select";
import { listaDeEsperaProfissional } from "../../services/MainApi/profissionais";

export default function WaitingListModal() {
  const [openModal, setOpenModal] = useState(false)
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [regiao_atuacao, setRegiao_atuacao] = useState<string>("AC");
  const [profissao_id, setProfissao_id] = useState<number>(0);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setOpenModal(true);

    const payload = {
      nome,
      email,
      regiao_atuacao,
      profissao_id
    }

    try {
      const response = await listaDeEsperaProfissional(payload);

      if (response.status !== 201) {
        return alert("Algo deu errado")
      }
      setOpenModal(true);
    } catch (error) {
      alert("Algo deu errado")
    }

  };

  return (
    <Modal
      buttonText="outra localidade"
      buttonStyle="drop-shadow-[0px_1px_6px_rgba(0,0,0,0.4)] border border-0.5 border-verde-lacrei text-verde-lacrei mb-11 font-bold w-[12.68rem] font-nunito "
      showCancel={true}
    >
      <form className="flex flex-1 flex-col items-center" onSubmit={handleSubmit} id="waitinglist-form">
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
          onChange={(e: any) => setNome(e.target.value)}
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
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Select
          className="mt-4"
          labelClassName="font-bold"
          labelText="Estado *"
          inputId="select-states-waiting"
          optionValues={["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SE", "TO"]}
          optionTexts={["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SE", "TO"]}
          selectClassName="min-w-[291px] md:w-[440px] p-4"
          onChange={(e: any) => setRegiao_atuacao(e.target.value)}
        />
        <Select
          className="mt-4"
          labelClassName="font-bold"
          labelText="Profissão *"
          inputId="select-profession-signup"
          optionValues={[1, 2, 3, 4, 5, 6, 7]}
          optionTexts={[
            "Enfermagem",
            "Fisioterapia",
            "Fonoaudiologia",
            "Medicina",
            "Nutrição",
            "Odontologia",
            "Psicologia",
          ]}
          placeholder="Escolha uma profissão"
          selectClassName="min-w-[291px] md:w-[440px] p-4"
          onChange={(e: any) => setProfissao_id(e.target.value)}
        />
        <Modal
          type="submit"
          form="waitinglist-form"
          buttonStyle="bg-verde-lacrei drop-shadow-[0px_1px_6px_rgba(0,0,0,0.4)] w-[223px] mt-12 mb-4 text-white font-[18px]"
          buttonText="Enviar informações"
          title="Agradecemos seu interesse!"
          titleStyle="self-center mb-4"
          openModal={openModal}

        >
          <p className="text-center self-center mb-6">Acreditamos que em breve poderemos crescer juntos para melhorar a assistência à nossa incrível comunidade LGBTQIAP+!</p>
          <Button to="/login" text="Voltar para a Lacrei!" className="bg-verde-lacrei drop-shadow-[0px_1px_6px_rgba(0,0,0,0.4)] w-[223px] text-white font-[18px] self-center mb-8" />
        </Modal>
      </form>
    </Modal>
  );
}
