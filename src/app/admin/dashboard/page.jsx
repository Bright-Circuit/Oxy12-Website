'use client';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '../../../components/common/Card';
import { useAdmin } from '../../../hooks/useAdmin';

export default function AdminDashboardPage() {
  const { dashboard, isLoadingDashboard } = useAdmin();

  const stats = dashboard || {
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <Typography variant="h6" color="text.secondary">
              Total Users
            </Typography>
            <Typography variant="h3" sx={{ mt: 2 }}>
              {stats.totalUsers}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <Typography variant="h6" color="text.secondary">
              Total Orders
            </Typography>
            <Typography variant="h3" sx={{ mt: 2 }}>
              {stats.totalOrders}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <Typography variant="h6" color="text.secondary">
              Total Revenue
            </Typography>
            <Typography variant="h3" sx={{ mt: 2 }}>
              ${stats.totalRevenue.toFixed(2)}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <Typography variant="h6" color="text.secondary">
              Pending Orders
            </Typography>
            <Typography variant="h3" sx={{ mt: 2 }}>
              {stats.pendingOrders}
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                No recent activity
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
