import React from "react";
import COLORS from "../../constant/COLORS";

interface InputLoginProps {
  placeholder: string;
  value?: string;
  handler: Function;
  type?: string; 
}

const inputStyle = `
  .custom-input {
    border-width: 1.5px;
    border-color: ${COLORS.primary};
    border-style: solid; /* Adiciona um estilo de borda sólido */
    margin-top: 15px;
    margin-bottom: 15px;
    height: 35px;
    border-radius: 50px;
    padding: 0 15px; 
  }

  .custom-input:focus {
    outline: none; /* Remove o contorno padrão ao focar */
    box-shadow: none; /* Remove a sombra ao focar */
  }
`;

const InputLogin: React.FC<InputLoginProps> = ({ placeholder, value, handler, type = "text" }) => {
  return (
    <>
      <style>{inputStyle}</style>
      <input
        className="custom-input" 
        type={type} 
        placeholder={placeholder}
        value={value}
        onChange={(e) => handler(e.target.value)}
      />
    </>
  );
};

export default InputLogin;
