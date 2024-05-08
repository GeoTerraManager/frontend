import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import COLORS from '../../../constant/COLORS';
import FONT from '../../../constant/FONT';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: COLORS.primary,
    borderColor: COLORS.primary,
    fontFamily: FONT.interRegular,
    margin: 8,
    '&:hover': {
      backgroundColor: COLORS.primary,
      color: theme.palette.getContrastText(COLORS.primary),
      borderColor: COLORS.primary, // Remove a borda ao passar o mouse
    },
  }));

const CustomButton = () => {
    return (
        <ColorButton variant="outlined">Usuario</ColorButton>
    )
}

export default CustomButton;
