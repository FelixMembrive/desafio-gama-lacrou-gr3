import EmailIcon from "../Icons/EmailIcon";


export default function FooterMobile(){
  return(
    <div className="bg-footerImage flex flex-col pt-[45px] pl-[15px] pb-[25px] bg-no-repeat bg-cover font-nunito sm:pl-6 sm:pt-14 md:hidden">
     <strong className="text-xl sm:text-2xl">Lacrei</strong>
     <div className="sm:text-base">
      <p>A plataforma de inclusão social e jurídica LGBTQIA+</p>
      <p className="flex items-center gap-1"> <EmailIcon /> contato@portallacrei.com.br</p>
      <p>Copyright © 2019. Todos os direitos reservados. Lacrei.</p>
      <p>CNPJ: 35.328.975/0001-28</p>
      <a className="text-pink-400" href="#">Termos e Condições de Uso</a>
     </div>
    </div>
  )
}