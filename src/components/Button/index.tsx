import { Link } from "react-router-dom";

interface IButtonProps {
    to: string;
    text: string;
    className?: string;
    onPress?: VoidFunction;
}

export default function Login(props: IButtonProps) {
    return (
        <div className={"button" + props.className}>
        <Link to={props.to} onClick={props.onPress}>{props.text}</Link>
        </div>
    )
}