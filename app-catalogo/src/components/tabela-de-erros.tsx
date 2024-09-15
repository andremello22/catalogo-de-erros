import React, { useEffect, useState } from 'react';
import { useSelecionado } from './global';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Radio from '@mui/material/Radio';
import { getItems } from './db'; // Função que busca os dados dinâmicos



// Definição das colunas da tabela
const columns: { id: string; label: string; minWidth?: number; align?: 'right' | 'center' | 'left' }[] = [
  { id: 'id', label: 'ID', minWidth: 50, align: 'right' },
  { id: 'modelo', label: 'Modelo', minWidth: 170 },
  { id: 'defeito', label: 'Defeito', minWidth: 100 },
  { id: 'cod', label: 'Código', minWidth: 170, align: 'right' },
  { id: 'descricao', label: 'Descrição', minWidth: 500, align: 'right' },]

export  function TabelaDEErros() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [items, setItems] = useState<any[]>([]); // Itens dinâmicos
  const { selectedId, setSelectedId } = useSelecionado();
  // Carregar dados do IndexedDB
  useEffect(() => {
    const loadItems = async () => {
      const allItems = await getItems();
      setItems(allItems); // Definir os itens dinâmicos no estado
    };
    loadItems();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSelectRow = (id: number) => {
    setSelectedId(id); // Atualiza o estado com o ID do item selecionado
  };

 

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="tabela de erros">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                {/* Radio buttons for row selection */}
              </TableCell>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => {
              const isSelected = row.id === selectedId
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.id}
                  onClick={() => handleSelectRow(row.id)}
                >
                  <TableCell padding="checkbox">
                    <Radio
                      checked={isSelected}
                      onChange={() => handleSelectRow(row.id)}
                      value={row.id}
                    />
                  </TableCell>
                  {columns.map((column) => {
                    const value = row[column.id.toString() as keyof typeof row];
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
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
   
  );
  
}
