import Header from "../../components/Header";
import Button from "../../components/Button";
import FooterMobile from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-upperImageEmail bg-no-repeat bg-100-auto bg-top font-nunito">
        <Header />
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="mt-56 text-2xl font-bold">
            Olá, profissional, tudo bem?,
          </h1>
          <img src="src\assets\images\emailPageInactive.png" alt="" />
          <p className="w-80">
            Algo deu errado no pré-cadastro e não conseguimos validar o seu
            número de incrição no Conselho Profissional. Mas não se preocupe,
            você pode entrar em contato com o órgão responsável para regularizar
            a situação e poder fazer parte do nosso time o quanto antes!
          </p>

          <p className="w-80 mt-3">
            Já regularizou e gostaria de tentar cadastrar novamente? Clique no
            botão abaixo para tentar mais uma vez!
          </p>

          <Button
            to="/signup"
            text="Cadastrar"
            className="bg-verde-lacrei text-white mt-6 mb-2 font-bold self-center w-[12.68rem]"
          />
          <span className="text-verde-lacrei mb-12 w-80">
            Ficamos muito felizes pelo seu empenho em fazer parte da nossa
            equipe!
          </span>
          <p className="w-80">
            A Equipe Lacrei acredita que, ao transformar a realidade de um
            indivíduo ou de um grupo, transformamos o mundo. Pensando nisso,
            oferecemos a melhor experiência no atendimento de algumas
            necessidades básicas das pessoas LGBTQIAP+, como atendimento em
            saúde, apoio jurídico e suporte na busca de emprego. Acreditamos que
            esse é um importante alicerce na construção de mudanças e
            equiparação de direitos.
          </p>
          <div className="w-80 flex flex-col mt-4">
            <p>
              Se houver qualquer dúvida em relação ao seu cadastro, por favor
              entre em contato conosco utilizando os botões no cabeçalho ou
              rodapé deste e-mail!
            </p>
            <p className="mt-6">Muito obrigade!</p>
            <p className="mt-6">Atenciosamente,</p>
            <p className="mt-6 mb-8">Equipe Lacrei</p>
          </div>
        </div>
      </div>
      <FooterMobile />
    </div>
  );
}
