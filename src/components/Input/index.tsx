interface IInputProps {
  className?: string;
  labelText?: string;
  labelClassName?: string;
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
    <div className={"input" + props.className}>
      <label
        htmlFor={props.inputId}
        id={props.labelId}
        className={props.labelClassName}
      >
        {props.labelText}
      </label>
      {props.required ? (
        <input
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
