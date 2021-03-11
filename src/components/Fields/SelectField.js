import React from "react";
import { FormControl } from "baseui/form-control";
import { Select, SIZE } from "baseui/select";

const TextField = ({ field, form, ...props }) => {
  const { errors, touched } = form;
  const { name } = field;
  const { label } = props;
  const hasError = touched[name] && errors[name];

  const commonProps = {
    error: hasError,
    clearOnEscape: true,
    size: SIZE.compact,
  };

  return (
    <div className="field">
      <FormControl
        label={label || name}
        error={errors[name] && touched[name] && errors[name]}
      >
        <Select
          {...field}
          {...props}
          {...commonProps}
          value={field.value}
          onChange={(params) => form.setFieldValue(name, params.value)}
        />
      </FormControl>
    </div>
  );
};

export default TextField;
