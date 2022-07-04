import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";

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
      <h1>Esta é a página de Pré-Cadastro</h1>
     <form id="signup-form" onSubmit={handleSubmit}>
     <label htmlFor="state-select-login">estado onde atua</label>
      <select name="state" id="state-select-login">
        <option value="SP">SP</option>
        <option value="BA">BA</option>
        <option value="MG">MG</option>
      </select>
      <Input
        labelText="email"
        type="email"
        name="email"
        inputId="email-input-signup"
      />
      <Input
        labelText="senha"
        type="password"
        name="password"
        inputId="password-input-signup"
      />
      <label htmlFor="council-select-login">
        Prefixo do Conselho Profissional
      </label>
      <select name="council" id="council-select-login">
        <option value="COREN">COREN</option>
        <option value="CREFITO">CREFITO</option>
        <option value="CRFa">CRFa</option>
      </select>
      <Input
        labelText="Número do registro Profissional"
        type="text"
        name="council-number"
        inputId="council-number-input-signup"
      />
     </form>
     <Input
        form="signup-form"
        type="submit"
        name="submit-signup"
        inputId="submit-signup"
        value="Enviar dados"
      />
    </>
  );
}
