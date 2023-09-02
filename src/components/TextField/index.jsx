import { Field, FieldError } from "./styles";
import P from "prop-types";

export const TextField = ({
  name,
  className,
  value,
  onChange,
  error,
  placeholder,
  onBlur,
  message
}) => {
  return (
    <div>
    <Field
      placeholder={placeholder}
      error={error}
      name={name}
      className={className}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    <FieldError>{message}</FieldError>
    </div>
  );
};

TextField.propTypes = {
  name: P.string.isRequired,
  className: P.string,
  value: P.string.isRequired,
  placeholder: P.string.isRequired,
  message: P.string,
  onChange: P.func.isRequired,
  onBlur: P.func,
  error: P.bool,
};
