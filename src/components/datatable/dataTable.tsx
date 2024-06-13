import React, { useState, useEffect } from "react";
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
import getAllProjects from "../../services/getAllProjects";
import ProjectData from "../../types/projectData";
import { usePageData } from "../../context/PageDataContext";
import Grid from "@mui/material/Grid";

interface Column {
  id:
    | "nomeProjeto"
    | "qtdAlteracao"
    | "qtdApontamentos"
    | "qtdGradeFeita"
    | "qtdGradeAndamento"
    | "qtdGradePendente";
  label: string;
  minWidth?: number;
  align?: "right";
}

const columns: readonly Column[] = [
  { id: "nomeProjeto", label: "Projeto", minWidth: 170 },
  { id: "qtdAlteracao", label: "Alterações", minWidth: 100 },
  {
    id: "qtdApontamentos",
    label: "Apontamentos",
    minWidth: 170,
  },
  {
    id: "qtdGradeFeita",
    label: "Grades Feitas",
    minWidth: 170,
  },
  {
    id: "qtdGradeAndamento",
    label: "Grades em Andamento",
    minWidth: 170,
  },
  {
    id: "qtdGradePendente",
    label: "Grades Pendentes",
    minWidth: 170,
  },
];

const DataTable = () => {
  const { setData } = usePageData();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProjects();
        if (data !== undefined) {
          setRows(data);
          setData(data); // Set the data in the context
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setData]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <Grid item xs={10} md={10}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 500 }}>
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
                            {column.id === "nomeProjeto" ? (
                              <Link
                                to={`/dados-projeto/${row.id}`}
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
    </Grid>
  );
};

export default DataTable;
