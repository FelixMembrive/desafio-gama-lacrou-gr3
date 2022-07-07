import profilePhoto from "../../assets/images/profile-photo.png"

interface IprofilePhotoProps {
    height?: number
    width?: number
}

export default function ProfilePhoto(props: IprofilePhotoProps) {
    return (
        <img className={""} src={profilePhoto} alt="Foto de Perfil" />
    )
}