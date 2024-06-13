import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import LinearProgress from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Column {
  id: "nome_projeto" | "total_quadriculas_atribuidas" | "feitas" | "andamento" | "km_mapeados" | "progress";
  label: string;
  minWidth?: number;
  align?: "center";
}

const columns: readonly Column[] = [
  { id: "nome_projeto", label: "Nome Projeto", minWidth: 170 },
  { id: "total_quadriculas_atribuidas", label: "Atribuidas", minWidth: 100 },
  { id: "feitas", label: "Feitas", minWidth: 170 },
  { id: "andamento", label: "Andamento", minWidth: 170 },
  { id: "km_mapeados", label: "Km Mapeados", minWidth: 170 },
  { id: "progress", label: "Progress", minWidth: 170, align: "center" },
];

interface Data {
  nome_projeto: string;
  total_quadriculas_atribuidas: number;
  feitas: number;
  andamento: number;
  km_mapeados: number;
  progress: React.ReactNode;
}

function createData(
  nome_projeto: string,
  total_quadriculas_atribuidas: number,
  feitas: number,
  andamento: number,
  km_mapeados: number
): Data {
  const progressValue = (feitas / total_quadriculas_atribuidas) * 100;
  return {
    nome_projeto,
    total_quadriculas_atribuidas,
    feitas,
    andamento,
    km_mapeados,
    progress: <LinearProgress variant="determinate" value={progressValue} />,
  };
}

const rows = [
  createData(
    "Projeto teste2",
    265,
    171,
    94,
    43.18967375803099
  ),
];

interface DataTableUsuarioProps {
  revisoresIds: string[];
}

export default function DataTableUsuarioRevisor({ revisoresIds }: DataTableUsuarioProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 220 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || "left"}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align || "left"}>
                          {column.id === "nome_projeto" ? (
                            <Link
                              to="/dados-usuario"
                              style={{ textDecoration: "none", color: "inherit" }}
                            >
                              {value ?? ""}
                            </Link>
                          ) : (
                            column.id === "progress" ? (
                              value
                            ) : (
                              (value as number | undefined)?.toLocaleString() ?? ""
                            )
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
