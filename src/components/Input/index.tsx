interface IInputProps {
  className?: string;
  labelText?: string;
  labelClassName?: string;
  inputClassName?: string;
  labelId?: string;
  inputId: string;
  name?: string;
  type: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  form?: string;
}

export default function Input(props: IInputProps) {
  return (
    <div className={"" + props.className}>
      <label
        htmlFor={props.inputId}
        id={props.labelId}
        className={" " + props.labelClassName}
      >
        {props.labelText}
      </label>
      {props.required ? (
        <input
          className={"border rounded-lg border-[#515151] h-12 px-4 py-3 mt-2 " + props.inputClassName}
          type={props.type}
          name={props.name}
          id={props.inputId}
          placeholder={props.placeholder}
          value={props.value}
          form={props.form}
          required
        />
      ) : (
        <input
        className={"border rounded-lg border-[#515151] h-12 p-4 mt-2 " + props.inputClassName}
          type={props.type}
          name={props.name}
          id={props.inputId}
          placeholder={props.placeholder}
          value={props.value}
          form={props.form}
        />
      )}
    </div>
  );
}
