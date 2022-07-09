import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
export default function Home() {

  return (
    <>
    <div className="flex flex-col justify-center items-center bg-upperImage bg-no-repeat bg-100-auto bg-top font-nunito">
    <Header></Header>
      <Button to="/login" text="Home" />
      <Button to="/signup" text="Pré-cadastro" />
      <Button to="/profile" text="Perfil / Pós cadastro" />
      <Button to="/emailPageActive" text="Email - Page Active" />
      <Button to="/emailPageInactive" text="Email - Page Inctive" />
      <Footer/>
      </div>
    </>
  );
}