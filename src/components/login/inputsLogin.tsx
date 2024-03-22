import React from "react";
import { Input } from "@mui/material";

interface InputLoginProps {
  placeholder: string;
  value?: string;
}

const InputLogin: React.FC<InputLoginProps> = ({ placeholder, value }) => {
  return <Input placeholder={placeholder} value={value}></Input>;
};

export default InputLogin;
