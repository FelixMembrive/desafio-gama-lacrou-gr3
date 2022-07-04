import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

//fornece as opções de fazer login (leva ao perfil) ou pré-cadastro(leva ao signUp)

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/profile");
  };
  return (
    <>
      <h1>Esta é a página de Login</h1>

      <form id="login-form" onSubmit={handleSubmit}>
        <Input
          labelText="email"
          inputId="email-input-login"
          name="email"
          type="email"
          required={true}
        />
        <Input
          labelText="senha"
          inputId="password-input-login"
          name="password"
          type="password"
          required={true}
        />
      </form>
      <Input
          className="submit"
          inputId="submit-login"
          name="submit"
          type="submit"
          form="login-form"
        />
      <Button to="/signup" text="Quero me tornar um profissional parceiro!" />
    </>
  );
}
