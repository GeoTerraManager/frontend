import { Grid } from "@mui/material";
import DataTable from "../components/datatable/dataTable";

import { useEffect, useState } from "react";
import FONT from "../constant/FONT";
import COLORS from "../constant/COLORS";


const DadosPrincipais = () => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");

        const response = await fetch('http://localhost:3001/gerente/valida', {
          method: 'GET',
          headers: {
            'Authorization': `${token}`,
          },
        });

        if (response.ok) {
          setAuthorized(true);
        }

        setLoading(false)
      } catch (error) {
        console.error('Failed to validate token:', error);
      }
    };

    validateToken();
  }, []);

  return (

    loading ?
      <p>Loading...</p>
      :
      authorized ?
         <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={11} sm={11} md={11}>
        <h3
          style={{
            fontFamily: FONT.poppinsBold,
            paddingLeft: 25,
            marginBottom: 10,
            color: COLORS.primary,
          }}
        >
          Hoje:
        </h3>
        <DataTable />
      </Grid>
      <Grid item xs={11} sm={11} md={11}>
        <h3
          style={{
            fontFamily: FONT.poppinsBold,
            paddingLeft: 25,
            marginBottom: 10,
            color: COLORS.primary,
          }}
        >
          Semana Passada:
        </h3>
        <DataTable />
      </Grid>
    </Grid>
        :
        <Grid container alignItems="center" justifyContent="center" textAlign="center" flexDirection="column" height="100vh">
          <h1>403 Usuario nao autorizado</h1>
          <a href="/">
            <p>Voltar para o login</p>
          </a>
        </Grid>

  );
};

export default DadosPrincipais;