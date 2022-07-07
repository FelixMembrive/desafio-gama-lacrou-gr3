import { Link } from "react-router-dom";
import FooterMobile from "../../components/Footer";
import Header from "../../components/Header";
import ProfilePhoto from "../../components/ProfilePhoto";

const profile = {
    name: 'Fulana',
    description: 'Descrição sobre você - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet ',
    photoSource: '../../assets/images/profile-photo.png',
    photoDescription: 'Descrição da foto - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet',
    personalInfo: {
        info1: "info",
        info2: "info2",
    },
    professionalInfo: {
        info1: "info",
        info2: "info2",
    },
    clinic: {
        info1: "info",
        info2: "info2",
    },
    services: {
        info1: "info",
        info2: "info2",
    },
}

export default function Profile() {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-upperImage bg-no-repeat bg-100-auto bg-top font-nunito">
                <Header />
                <h1 className="font-bold text-[36px] text-center mb-8" >
                    Olá, {profile.name}!
                </h1>
                <section className={"flex flex-row"}>
                        <ProfilePhoto></ProfilePhoto>
                        <p className="ml-28" >{profile.description}</p>
                </section>
                <p>{profile.photoDescription}</p>
                <button>Editar Perfil</button>
            </div>
            <FooterMobile />
        </>
    )
}