import profilePhoto from "../../assets/images/profile-photo.png"

interface IprofilePhotoProps {
    height?: number
    width?: number
}

export default function ProfilePhoto(props: IprofilePhotoProps) {
    return (
        <div className="h-300 w-300">
            <img className="h-86 w-86 aspect-square m-4" height={"86px"} src={profilePhoto} alt="Foto de Perfil" />
        </div>
    )
}