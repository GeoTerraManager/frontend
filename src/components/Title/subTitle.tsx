import React, { ReactNode, CSSProperties } from 'react';
import COLORS from "../../constant/COLORS";
import FONT from "../../constant/FONT";

interface SubTitleProps {
  children: ReactNode;
  styles?: CSSProperties;
}

const SubTitle: React.FC<SubTitleProps> = ({ children, styles }) => {
  const combinedStyles: CSSProperties = {
    fontFamily: FONT.poppinsBold,
    marginBottom: 10,
    color: COLORS.primary,
    ...(styles || {}), 
  };

  return (
    <h3 style={combinedStyles}>
      {children}
    </h3>
  );
};

export default SubTitle;
