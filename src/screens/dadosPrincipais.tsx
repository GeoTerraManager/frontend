import { Grid } from "@mui/material";
import DataTable from "../components/datatable/dataTable";
import { useEffect, useState } from "react";

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
          <Grid item xs={9} sm={9} md={9}>
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