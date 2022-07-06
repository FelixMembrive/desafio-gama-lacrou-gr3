import ArrowUp from "../Icons/ArrowUp";
import EmailIcon from "../Icons/EmailIcon";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";



export default function Footer(){
  return(
    <div>
      <nav>
        <ul>
          <li><a href="">Início</a></li>
          <li><a href="">Lacrei Saúde</a></li>
          <li><a href="">Privacidade</a></li>
        </ul>
        <ul>
          <li><a href=""> <FacebookIcon/> </a></li>
          <li><a href=""> <InstagramIcon/> </a></li>
          <li><a href=""> <LinkedinIcon/> </a></li>
          <li><a href=""> <EmailIcon/> </a></li>
        </ul>
      </nav>
      <div>
        <p>
          Copyright © 2021 Lacrei. 
          CNPJ: 35.328.975/0001-28
        </p>
        <button className=" rounded-lg border-2 border-verde-lacrei w-12 h-12  flex justify-center items-center"><ArrowUp/></button>
      </div>
    </div>
  )
}