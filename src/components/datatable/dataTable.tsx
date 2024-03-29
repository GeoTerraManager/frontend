import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import LinearProgress from '@mui/material/LinearProgress';


interface Column {
  id: 'projeto' | 'revisor' | 'andamento' | 'inicio' | 'fim';
  label: string;
  minWidth?: number;
  align?: 'right';
}

const columns: readonly Column[] = [
  { id: 'projeto', label: 'Projeto', minWidth: 170 },
  { id: 'revisor', label: 'Revisor', minWidth: 100 },
  {
    id: 'andamento',
    label: 'Andamento',
    minWidth: 170,
  },
  {
    id: 'inicio',
    label: 'Início',
    minWidth: 170,
  },
  {
    id: 'fim',
    label: 'Fim',
    minWidth: 170,
  },
];

interface Data {
  projeto: string;
  revisor: string;
  andamento: string | React.ReactNode; // Alterado para aceitar componentes
  inicio: string;
  fim: string;
}

function createData(
  projeto: string,
  revisor: string,
  andamento: React.ReactNode,
  inicio: string,
  fim: string
): Data {
  return { projeto, revisor, andamento, inicio, fim };
}

const rows = [
  createData('Project A', 'John Doe', <LinearProgress variant="determinate" value={50} />, '2024-03-01', '2024-03-15'),
  createData('Project B', 'Jane Smith', <LinearProgress variant="determinate" value={100} />, '2024-02-15', '2024-03-10'),
  createData('Project C', 'Alice Johnson', <LinearProgress variant="determinate" value={25} />, '2024-03-20', '2024-04-05'),
  createData('Project D', 'Bob Williams', <LinearProgress variant="determinate" value={75} />, '2024-02-10', '2024-03-25'),
  createData('Project E', 'Emily Brown', <LinearProgress variant="determinate" value={90} />, '2024-01-15', '2024-02-28'),
  createData('Project F', 'David Davis', <LinearProgress variant="determinate" value={10} />, '2024-03-05', '2024-04-20'),
  createData('Project G', 'Emma Wilson', <LinearProgress variant="determinate" value={40} />, '2024-02-28', '2024-04-15'),
  createData('Project H', 'James Jones', <LinearProgress variant="determinate" value={60} />, '2024-01-20', '2024-03-10'),
  createData('Project I', 'Olivia Martinez', <LinearProgress variant="determinate" value={80} />, '2024-03-10', '2024-04-30'),
  createData('Project J', 'William Taylor', <LinearProgress variant="determinate" value={15} />, '2024-02-05', '2024-03-15'),
  createData('Project K', 'Sophia Anderson', <LinearProgress variant="determinate" value={35} />, '2024-01-25', '2024-03-20'),
  createData('Project L', 'Michael Brown', <LinearProgress variant="determinate" value={50} />, '2024-02-15', '2024-04-05'),
  createData('Project M', 'Liam Wilson', <LinearProgress variant="determinate" value={70} />, '2024-03-20', '2024-05-05'),
  createData('Project N', 'Mia Taylor', <LinearProgress variant="determinate" value={20} />, '2024-02-10', '2024-03-25'),
  createData('Project O', 'Ethan Johnson', <LinearProgress variant="determinate" value={55} />, '2024-01-15', '2024-02-28'),
  createData('Project P', 'Ava Brown', <LinearProgress variant="determinate" value={85} />, '2024-03-05', '2024-04-20'),
  createData('Project Q', 'Noah Davis', <LinearProgress variant="determinate" value={30} />, '2024-02-28', '2024-04-15'),
];

export default function DataTable() {
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
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || 'left'}
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
                        <TableCell key={column.id} align={column.align || 'left'}>
                          {value}
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
