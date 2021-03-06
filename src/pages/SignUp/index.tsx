import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import FooterMobile from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import Select from "../../components/Select";
import { preCadastroProfissional } from "../../services/MainApi/profissionais";

//mostra alerta/modal/página que diz que em 24h você receberá um link levando ao cadastro

export default function SignUp() {
  const navigate = useNavigate();
  const [openModal, setOpenModal]= useState<boolean>(false);
  const [nome, setNome]= useState<string>("");
  const [email, setEmail]= useState<string>("");
  const [numero_conselho, setNumero_conselho]= useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [senha2, setSenha2]= useState<string>("");
  const [regiao_atuacao, setRegiao_atuacao]= useState<string>("SP");
  const [profissao_id, setProfissao_id]= useState<number>(0);
  const [prefixo, setPrefixo]= useState<number>(0);
  const regisao_atuacao = "SP"

  const handleSubmit = async (e: any) => {
    e.preventDefault();
   
    if(senha == senha2){
      setSenha(senha);
    } else{
      return alert("O campo de confirmação da senha está diferente da senha escolhida!")
    }

    if(profissao_id == prefixo){

    } else{
      return alert("O prefixo selecionado não corresponde à profissão escolhida")
    }

    const payload = {
      nome,
      email,
      numero_conselho,
      senha,
      regiao_atuacao,
      profissao_id
    }

    try {
      const response = await preCadastroProfissional(payload);

      if(response.status !== 201){
        return alert("Algo deu errado")
      }     
      setOpenModal(true); 
    }catch (error){
      alert("Algo deu errado")
    }
    
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-upperImage bg-no-repeat bg-100-auto bg-top font-nunito">
        <Header />
        <h1 className="font-bold text-2xl text-center m-4 mt-16">
          Pré-cadastro
        </h1>
        <p className="sm:w-[400px] text-center mx-4 mb-8 text-sm">
          Nessa etapa, precisamos que você preencha todas essas informações para
          validarmos o seu cadastro e vínculo profissional.
        </p>
        <form onSubmit={handleSubmit} id="form-signup">
          <Input
            className="mt-4"
            labelText="Nome social completo *"
            labelClassName="font-bold"
            type="text"
            inputId="input-name-signup"
            inputClassName="min-w-[291px] mobile-md:min-w-[328px] p-4"
            placeholder="Digite seu nome"
            required={true}
            onChange={(e:any)=>setNome(e.target.value)}
          />
          <Select
            className="mt-4"
            labelClassName="font-bold"
            labelText="Profissão *"
            inputId="select-profession-signup"
            optionValues={[1,2,3,4,5,6,7]}
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
            selectClassName="min-w-[291px] mobile-md:min-w-[328px] p-4"
            onChange={(e:any)=>setProfissao_id(e.target.value)}
          />
          <Select
            className="mt-4"
            labelClassName="font-bold"
            labelText="Prefixo do Conselho Profissional *"
            inputId="select-council-signup"
            optionValues={[1,2,3,4,5,6,7]}
            optionTexts={[
              "COREN | Enfermagem",
              "CREFITO | Fisioterapia",
              "CRFa | Fonoaudiologia",
              "CRM | Medicina",
              "CRN | Nutrição",
              "CRO | Odontologia",
              "CRP | Psicologia",
            ]}
            selectClassName="min-w-[291px] mobile-md:min-w-[328px] p-4"
            placeholder="Selecione uma profissão"
            onChange={(e:any)=>setPrefixo(e.target.value)}
          />
          <Input
            className="mt-4"
            labelText="Número do Registro *"
            labelClassName="font-bold"
            type="text"
            inputId="input-council-number-signup"
            inputClassName="min-w-[291px] mobile-md:min-w-[328px] p-4"
            placeholder="Digite o número"
            required={true}
            onChange={(e:any)=>setNumero_conselho(e.target.value)}
          />
          <hr className="bg-[#CFCFCF] min-w-[328px] mx-2 h-0.5 mt-6" />
          <Input
            className="mt-4"
            labelText="Email *"
            labelClassName="font-bold"
            type="email"
            inputId="input-email-signup"
            inputClassName="min-w-[291px] mobile-md:min-w-[328px] p-4"
            placeholder="Digite seu email"
            required={true}
            onChange={(e:any)=>setEmail(e.target.value)}
          />
          <Input
            className="mt-4"
            labelText="Senha *"
            labelClassName="font-bold"
            type="password"
            inputId="input-password-signup"
            inputClassName="min-w-[291px] mobile-md:min-w-[328px] p-4"
            placeholder="Digite sua senha"
            required={true}
            onChange={(e:any)=>setSenha(e.target.value)}
          />
          <Input
            className="mt-4"
            labelText="Confirmar senha *"
            labelClassName="font-bold"
            type="password"
            inputId="input-password-confirm-signup"
            inputClassName="min-w-[291px] mobile-md:min-w-[328px] p-4"
            placeholder="Digite sua senha novamente"
            required={true}
            onChange={(e:any)=>setSenha2(e.target.value)}
          />
          <div className="mt-6 mb-12 flex max-w-[291px]">
            <input
              type="checkbox"
              name="terms-conditions"
              id="checkbox-signup"
              className="bg-white outline-none checked:bg-verde-lacrei checked:text-verde-lacrei rounded-sm border-[1px] border-verde-lacrei w-6 h-6"
            />
            <label htmlFor="checkbox-signup" className="ml-3">
              Li e aceito os <Link to="../" className="underline">termos e condições</Link> apresentados.
            </label>
          </div>
        </form>
        <Modal
          type="submit"
          form="form-signup"
          buttonStyle="bg-verde-lacrei text-white mb-4 w-52"
          buttonText="Enviar pré-cadastro"
          title="Pré-cadastro recebido com sucesso!"
          titleStyle=" mt-4"
          openModal={openModal}
        >
          <div className="mx-[3.87rem] flex flex-col items-center">
            <p className="mt-6 mb-6 min-w-[300px]">
              Dentro de 24h, você receberá um email com os próximos passos do
              cadastro! Lembre de conferir inclusive sua caixa de spam ;)
            </p>
            <Button
              to="/login"
              text="Página principal"
              className="bg-verde-lacrei text-white mt-6 mb-8 font-bold self-center w-52"
            />
          </div>
        </Modal>
        <Link to="/login" className="self-center mb-11 text-[#ff1192]">
          Cancelar
        </Link>
      </div>
      <FooterMobile />
    </>
  );
}
