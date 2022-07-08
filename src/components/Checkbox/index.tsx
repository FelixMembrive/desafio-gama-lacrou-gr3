interface ICheckboxProps{
  label: string
}


export default function Checkbox (props: ICheckboxProps){
  return(
      <div className="flex gap-4 justify-center text-sm py-3 font-nunito w-fit">
        <input type="checkbox" id="alo" className="accent-green-500 w-5 h-5 cursor-pointer border-verde-lacrei w-6 h-6" />
        <label htmlFor="alo" className="cursor-pointer">{props.label}</label>
      </div>
  )
}