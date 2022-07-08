interface ISelectProps {
    className?: string;
    labelText?: string;
    labelClassName?: string;
    selectClassName?: string;
    labelId?: string;
    inputId: string;
    name?: string;
    placeholder?: string;
    optionValues: string[] | number[];
    optionTexts: string[];
    required?: boolean;
    onChange?:any;
    disabled?:boolean;
  }
  
  export default function Select(props: ISelectProps) {
    return (
      <div className={"" + props.className}>
        <label
          htmlFor={props.inputId}
          id={props.labelId}
          className={"block " + props.labelClassName}
        >
          {props.labelText}
        </label>
            <select
            className={"border rounded-lg border-[#515151] h-12 px-4 py-3 mt-2 " + props.selectClassName}
            name={props.name}
            id={props.inputId}
            placeholder={props.placeholder}
            required={props.required}
            onChange={props.onChange}
            disabled={props.disabled}
            >
              {props.placeholder ? 
              <option value="" disabled selected>{props.placeholder}</option> :
              null
              }

            {props.optionValues.map((valueItem, index)=>{
                return (
                    <option value={valueItem}>{props.optionTexts[index]}</option>
                )
            })}
            </select>
      </div>
    );
  }
  