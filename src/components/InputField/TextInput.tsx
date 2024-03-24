import React from 'react';
import TextField from '@mui/material/TextField';

interface TextInputProps {
  label?: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  readonly?: boolean

//   icon?: React.ReactNode;
//   iconPlacement: "start" | "end"
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, variant, size, readonly}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      variant = {variant}
      fullWidth
      className='border rounded-lg'
      InputProps={{ readOnly: readonly }}
      size={size}
    />
  );
};

export default TextInput;
