import * as React from "react";
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

interface Column {
  id:
    | "nome"
    | "atribuidas"
    | "feitas"
    | "refazer"
    | "refeitas"
    | "revisadas"
    | "inicio_projeto";
  label: string;
  minWidth?: number;
  align?: "center";
}

const columns: readonly Column[] = [
  { id: "nome", label: "Nome", minWidth: 170 },
  { id: "atribuidas", label: "Atribuidas", minWidth: 100 },
  {
    id: "refazer",
    label: "Refazer",
    minWidth: 170,
  },
  {
    id: "refeitas",
    label: "Refeitas",
    minWidth: 170,
  },
  {
    id: "revisadas",
    label: "Revisadas",
    minWidth: 170,
  },
  {
    id: "inicio_projeto",
    label: "Inicio Projeto",
    minWidth: 170,
  },
];

interface Data {
  nome: string;
  atribuidas: string;
  feitas: string;
  refazer: string;
  refeitas: number;
  revisadas: React.ReactNode;
  inicio_projeto: string;
}

function createData(
  nome: string,
  atribuidas: string,
  feitas: string,
  refazer: string,
  refeitas: number,
  revisadas: React.ReactNode,
  inicio_projeto: string
): Data {
  return {
    nome,
    atribuidas,
    feitas,
    refazer,
    refeitas,
    revisadas,
    inicio_projeto,
  };
}

const rows = [
  createData(
    "John Doe",
    "10",
    "8",
    "2",
    5,
    <LinearProgress variant="determinate" value={50} />,
    "2024-01-01"
  ),
  createData(
    "Jane Smith",
    "8",
    "7",
    "1",
    3,
    <LinearProgress variant="determinate" value={30} />,
    "2024-01-05"
  ),
];

export default function DataTableUsuario() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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
                        <TableCell
                          key={column.id}
                          align={column.align || "left"}
                        >
                          {column.id === "nome" ? (
                            <Link
                              to="/dados-usuario"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              {value}
                            </Link>
                          ) : (
                            value
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
