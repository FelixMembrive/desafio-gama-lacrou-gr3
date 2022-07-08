import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import ChevronDownOutline from "react-ionicons/lib/ChevronDownOutline";
import ChevronUpOutline from "react-ionicons/lib/ChevronUpOutline";

interface IAccordionProps {
    children?: React.ReactNode;
    key: number;
    className?:string;
    headerStyle?:string;
    BodyStyle?:string;
    title: string;
}
 
export default function CustomAccordion(props:IAccordionProps) {
  const [open, setOpen] = useState(0);
  const [isOpen, setIsOpen] = useState(open === props.key)
 
  const handleOpen = (value:any) => {
    setOpen(open === value ? 0 : value);
    setIsOpen(open === value ? false : true)
  };
 
  return (
    <>
      <Accordion open={open === props.key} icon={isOpen? <ChevronUpOutline color={'#ffff'}/>: <ChevronDownOutline color={'#ffff'}/>} className={"mt-9 " + props.className}>
        <AccordionHeader className={"h-12 rounded-lg flex items-center justify-center px-8 drop-shadow-[0px_1px_6px_rgba(0,0,0,0.4)] bg-verde-lacrei text-white " + props.headerStyle} onClick={() => handleOpen(props.key)}>{props.title}</AccordionHeader>
        <AccordionBody>
          {props.children}
        </AccordionBody>
      </Accordion>
      
    </>
  );
}
