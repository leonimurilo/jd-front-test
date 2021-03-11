import React from "react";
import { FormControl } from "baseui/form-control";
import { Input, MaskedInput, SIZE } from "baseui/input";

const TextField = ({ field, form, ...props }) => {
  const { errors, touched } = form;
  const { name } = field;
  const { label } = props;
  let input;
  const hasError = touched[name] && errors[name];

  const commonProps = {
    error: hasError,
    clearOnEscape: true,
    size: SIZE.compact,
  };

  if (props.mask) {
    input = <MaskedInput {...field} {...props} {...commonProps} />;
  } else {
    input = <Input {...field} {...props} {...commonProps} />;
  }

  return (
    <div className="field">
      <FormControl
        className="form-control"
        label={label || name}
        error={errors[name] && touched[name] && errors[name]}
      >
        {input}
      </FormControl>
    </div>
  );
};

export default TextField;
