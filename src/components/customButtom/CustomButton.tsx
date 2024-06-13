import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import COLORS from "../../constant/COLORS";
import FONT from "../../constant/FONT";
import { usePageData } from "../../context/PageDataContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: COLORS.primary,
  borderColor: COLORS.primary,
  fontFamily: FONT.interRegular,
  margin: 8,
  "&:hover": {
    backgroundColor: COLORS.primary,
    color: theme.palette.getContrastText(COLORS.primary),
    borderColor: COLORS.primary,
  },
}));

const CustomButton = () => {
  const { data } = usePageData();

  const exportToPDF = () => {
    const doc = new jsPDF({ orientation: 'portrait' });
    let y = 10;

    doc.setFontSize(18);
    doc.text("", 10, y);
    y += 10;

    if (data) {
      const processData = Array.isArray(data) ? data : [data];
      const filteredData = processData.map(item => {
        const newItem = { ...item };
        delete newItem.id;
        return newItem;
      });

      const keys = Object.keys(filteredData[0] || {}).map(key => 
        key.replace(/([A-Z])/g, ' $1').trim() // Add spaces before capital letters
      );

      const headers: string[][] = [keys];
      const rows: (string | number | boolean)[][] = filteredData.map(item => 
        Object.values(item)
      );

      autoTable(doc, {
        head: headers,
        body: rows,
        startY: y,
        theme: "striped",
        styles: { 
          fontSize: 10 // Reduce font size to fit more content
        },
        columnStyles: {
          0: { cellWidth: 'auto' }, // Allow first column to wrap text
        },
        headStyles: {
          cellPadding: 2,
          minCellHeight: 10,
          overflow: 'linebreak', // Allow titles to break into multiple lines
        },
        tableWidth: 'auto', // Adjust table width to fit content
        margin: { left: 10, right: 10 }, // Add margins to prevent cutting off
      });

      // Determine the filename
      let fileName;
      if (Array.isArray(data)) {
        fileName = "projetos.pdf";
      } else {
        const firstKey = Object.keys(data)[0];
        fileName = `${data[firstKey]}.pdf`;
      }

      doc.save(fileName);
    } else {
      doc.text("No data available", 10, y);
      doc.save("dados_pagina.pdf");
    }
  };

  return (
    <ColorButton variant="outlined" onClick={exportToPDF}>
      Exportar Dados
    </ColorButton>
  );
};

export default CustomButton;
