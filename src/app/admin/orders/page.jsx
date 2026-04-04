'use client';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Button from '../../../components/common/Button';
import { useAdmin } from '../../../hooks/useAdmin';

export default function AdminOrdersPage() {
  const { orders, isLoadingOrders } = useAdmin();

  const getStatusColor = (status) => {
    const colors = {
      pending: 'warning',
      processing: 'info',
      shipped: 'primary',
      delivered: 'success',
      cancelled: 'error',
    };
    return colors[status] || 'default';
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Order Management
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Chip
                    label={order.status}
                    color={getStatusColor(order.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>{new Date(order.createdAt).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    href={`/admin/orders/${order.id}`}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}
