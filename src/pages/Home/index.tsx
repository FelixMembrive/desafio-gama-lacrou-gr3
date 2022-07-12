import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Home() {


  return (
    <>
      <div className="flex flex-col justify-center items-center bg-upperImage bg-no-repeat bg-100-auto bg-top font-nunito">
        <Header></Header>
        <Button className="ease-in-out delay-75 bg-blue-100 hover:-translate-y-5 hover:scale-110 hover:bg-indigo-500 duration-100 ..."
          to="/login" text="Home" />
        <Button showIcon={true} iconSpeed={1} className="bg-blue-100" to="/signup" text="Pré-cadastro" />
        <Button to="/profile" text="Perfil / Pós cadastro" />
        <Button to="/emailPageActive" text="Email - Page Active" />
        <Button to="/emailPageInactive" text="Email - Page Inctive" />
        <Button showIcon={true} to="" text="Processing..." className="animate-spin-slow1 flex flex-row bg-indigo-500 ..." />
        <Footer />
      </div>
    </>
  );

}