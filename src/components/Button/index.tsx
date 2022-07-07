import { Link } from "react-router-dom";

interface IButtonProps {
    to: string;
    text: string;
    className?: string;
    onPress?: any;
}

export default function Login(props: IButtonProps) {
    return (
        <div className={"h-12 rounded-lg flex items-center justify-center px-8 drop-shadow-[0px_1px_6px_rgba(0,0,0,0.4)] " + props.className}>
        <Link to={props.to} onClick={props.onPress}>
            <span>{props.text}</span>
        </Link>
        </div>
    )
}