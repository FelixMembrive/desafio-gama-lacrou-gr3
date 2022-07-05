import Button from "../../components/Button";
import Footer from "../../components/Footer";
export default function Home() {

  return (
    <>
      <h1>Esta é a página Home com os links roteados</h1>
      <Button to="/" text="home" />
      <Button to="/login" text="login" />
      <Button to="/profile" text="profile" />
      <Button to="/signup" text="signup" />
      <Button to="/register" text="register" />
      <Footer/>
    </>
  );
}