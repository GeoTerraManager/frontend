import React, { ReactNode, CSSProperties } from 'react';
import COLORS from "../../constant/COLORS";
import FONT from "../../constant/FONT";

interface TitleProps {
  children: ReactNode;
  styles?: CSSProperties;
}

const Title: React.FC<TitleProps> = ({ children, styles }) => {
  const combinedStyles: CSSProperties = {
    fontFamily: FONT.poppinsBold,
    paddingLeft: 25,
    marginBottom: 10,
    color: COLORS.primary,
    ...(styles || {}), 
  };

  return (
    <h1 style={combinedStyles}>
      {children}
    </h1>
  );
};

export default Title;
