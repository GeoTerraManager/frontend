import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link, useNavigate } from "react-router-dom";

interface Column {
  id: "resultado";
  label: string;
  minWidth?: number;
  align?: "center";
}

const columns: readonly Column[] = [
  { id: "resultado", label: "Resultado", minWidth: 170 },
];

export interface Data {
  resultado: string;
  type: number; // 0 for users, 1 for projects
  id: string; // Unique identifier
}

interface DataTablePesquisaProps {
  rows: Data[];
}

const DataTablePesquisa: React.FC<DataTablePesquisaProps> = ({ rows }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (id: string, type: number) => {
    if (type === 0) {
      navigate(`/dados-usuario/${id}`);
    } else if (type === 1) {
      navigate(`/dados-projeto/${id}`);
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 220 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align || "left"} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index} onClick={() => handleRowClick(row.id, row.type)}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align || "left"}>
                        {column.id === "resultado" && (
                          <Link to={row.type === 0 ? `/dados-usuario/${row.id}` : `/dados-projeto/${row.id}`}>
                            {value}
                          </Link>
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
};

export default DataTablePesquisa;
