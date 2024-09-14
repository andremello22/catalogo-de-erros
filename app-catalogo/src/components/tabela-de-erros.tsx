import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

interface Column {
  id: 'id' | 'modelo' | 'defeito' | 'cod' | 'descricao';
  label: string;
  minWidth?: number;
  align?: 'right';
}

const columns: readonly Column[] = [
  { id: 'id', label: 'ID', minWidth: 50, align: 'right' },
  { id: 'modelo', label: 'Modelo', minWidth: 170 },
  { id: 'defeito', label: 'Defeito', minWidth: 100 },
  { id: 'cod', label: 'Código', minWidth: 170, align: 'right' },
  { id: 'descricao', label: 'Descrição', minWidth: 500, align: 'right' },
];

interface Data {
  id: number;
  modelo: string;
  defeito: string;
  cod: string;
  descricao: string;
}

function createData(id: number, modelo: string, defeito: string, cod: string, descricao: string): Data {
  return { id, modelo, defeito, cod, descricao };
}

const rows = [
  createData(1, 'Modelo A', 'Erro 001', '1324171354', 'Defeito no sistema de aquecimento.'),
  createData(2, 'Modelo B', 'Erro 002', '140350036', 'Falta de toner no cartucho.'),
  createData(3, 'Modelo C', 'Erro 003', '60483973', 'Problema no sensor de papel.'),
  createData(4, 'Modelo D', 'Erro 004', '327167434', 'Falha no carregamento de bandeja.'),
  createData(5, 'Modelo E', 'Erro 005', '3760213', 'Erro de comunicação com a rede.'),
  createData(6, 'Modelo F', 'Erro 006', '25475400', 'Superaquecimento detectado.'),
  createData(7, 'Modelo G', 'Erro 007', '83019200', 'Falha no fusor.'),
  createData(8, 'Modelo H', 'Erro 008', '4857000', 'Problema no cartucho de tinta.'),
  createData(9, 'Modelo I', 'Erro 009', '126577691', 'Erro no rolo de transporte de papel.'),
  createData(10, 'Modelo J', 'Erro 010', '126317000', 'Sensor de toner não detectado.'),
];

export default function TabelaDEErros() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSelectRow = (id: number) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((rowId) => rowId !== id) : [...prevSelected, id]
    );
  };

  const isRowSelected = (id: number) => selectedRows.includes(id);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="tabela de erros">
          <TableHead>
            <TableRow>
              {/* Checkboxes hidden */}
              <TableCell padding="checkbox" sx={{ visibility: 'hidden' }}>
                <Checkbox />
              </TableCell>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              const isSelected = isRowSelected(row.id);
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.id}
                  selected={isSelected}
                  onClick={() => handleSelectRow(row.id)}
                >
                  {/* Checkboxes hidden */}
                  <TableCell padding="checkbox" sx={{ visibility: 'hidden' }}>
                    <Checkbox checked={isSelected} />
                  </TableCell>
                  {columns.map((column) => {
                    const value = row[column.id as keyof Data];
                    return (
                      <TableCell key={column.id} align={column.align}>
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
