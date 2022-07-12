import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { SpinnerGap } from "phosphor-react";

interface IButtonProps {
    to: string;
    text: string;
    className?: string;
    onPress?: any;
    showIcon?: boolean
    iconSpeed?: number
}

export default function Button(props: IButtonProps) {
    return (
        <>
        <div className={"h-12 rounded-lg flex items-center justify-center px-8 drop-shadow-[0px_1px_6px_rgba(0,0,0,0.4)] " + props.className}>
        {props.showIcon && <SpinnerGap size={32} className={`mr-2 h-5 w-5 animate-spin-slow${props.iconSpeed}`} />}
        <Link to={props.to} onClick={props.onPress}>
            <span>{props.text}</span>
        </Link>
        </div>
        </>
    )
}

