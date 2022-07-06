import { Link } from "react-router-dom";

interface IButtonProps {
    to: string;
    text: string;
    className?: string;
    onPress?: VoidFunction;
}

export default function Login(props: IButtonProps) {
    return (
        <div className={"h-12 rounded-lg flex items-center justify-center px-8 shadow-2xl " + props.className}>
        <Link to={props.to} onClick={props.onPress}>
            <span>{props.text}</span>
        </Link>
        </div>
    )
}