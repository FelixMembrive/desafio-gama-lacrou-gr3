import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
export default function Home() {

  return (
    <>
    <Header></Header>
      <h1>Esta é a página Home com os links roteados</h1>
      <Button to="/" text="home" />
      <Button to="/login" text="login" />
      <Button to="/signup" text="signup" />
      <Button to="/register" text="register" />
      <Button to="/profile" text="profile" />
      
      <Footer/>
    </>
  );
}