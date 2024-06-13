import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import UsersByProject from "../../types/usersByProject";
import getUsersByProject from "../../services/getUsersByProject";

interface Column {
  id:
    | "nome"
    | "id"
  label: string;
  minWidth?: number;
  align?: "center";
}

export interface UsuarioProjetosProps {
  projectId: string | undefined
}

const columns: readonly Column[] = [
  { id: "nome", label: "Nome", minWidth: 170 },
  { id: "id", label: "Atribuidas", minWidth: 100 }
];

export default function DataTableUsuarioProjetos(props: UsuarioProjetosProps) {
  const [users, setUsers] = React.useState<UsersByProject[] | null>(null);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    const fetchUsers = async () => {
      if (props.projectId) {
        const fetchedUsers = await getUsersByProject(props.projectId);
        setUsers(fetchedUsers);
      }
    };

    fetchUsers();
  }, [props.projectId]); // Fetch data only when props.projectId changes

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
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
      {users &&
        users
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, index) => (
            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
              {columns.map((column) => {
                const value = row.nomeUsuario;
                return (
                  <TableCell
                    key={column.id}
                    align={column.align || "left"}
                  >
                    {column.id === "nome" ? (
                      <Link
                        to={`/dados-usuario/${row.idUsuario}`}
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
          ))}
    </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users ? users.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}