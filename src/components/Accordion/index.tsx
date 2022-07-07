import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import ChevronDownOutline from "react-ionicons/lib/ChevronDownOutline";

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
 
  const handleOpen = (value:any) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <>
      <Accordion open={open === props.key} onClick={() => handleOpen(props.key)} icon={<ChevronDownOutline color={'#ffff'} />} className={" " + props.className}>
        <AccordionHeader className={"h-12 rounded-lg flex items-center justify-center px-8 drop-shadow-[0px_1px_6px_rgba(0,0,0,0.4)] bg-verde-lacrei text-white " + props.headerStyle}>{props.title}</AccordionHeader>
        <AccordionBody>
          {props.children}
        </AccordionBody>
      </Accordion>
      
    </>
  );
}
