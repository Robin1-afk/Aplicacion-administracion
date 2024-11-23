import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NumericFormat } from 'react-number-format';
import Dot from 'components/@extended/Dot';
import ProductService from '../../service/ProductService';

// Component for Status Indicator
function OrderStatus({ status }) {
  let color, title;
  switch (status) {
    case 0:
      color = 'warning';
      title = 'Pending';
      break;
    case 1:
      color = 'success';
      title = 'Approved';
      break;
    case 2:
      color = 'error';
      title = 'Rejected';
      break;
    default:
      color = 'primary';
      title = 'None';
  }
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
}

// Main Table Component
export default function OrderTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    ProductService.getProducts()
      .then((data) => {
        const formattedRows = data.map((item, index) => ({
          tracking_no: item.id || index,
          name: item.nombre_negocio,
          fat: item.total_order || 0,
          carbs: item.status || 0,
          protein: item.total_amount || 0,
        }));
        setRows(formattedRows);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          '& td, & th': { whiteSpace: 'nowrap' },
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tracking No1.</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Total Order</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="right">Total Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.tracking_no}>
                <TableCell>
                  <Link color="secondary">{row.tracking_no}</Link>
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell>
                  <OrderStatus status={row.carbs} />
                </TableCell>
                <TableCell align="right">
                  <NumericFormat value={row.protein} displayType="text" thousandSeparator prefix="$" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
