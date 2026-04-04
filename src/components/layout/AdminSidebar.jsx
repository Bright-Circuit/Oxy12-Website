'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import { useStore } from '../../store/useStore';

const drawerWidth = 260;

  const menuItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: <DashboardIcon /> },
  { label: 'Users', href: '/admin/users', icon: <PeopleIcon /> },
  { label: 'Products', href: '/admin/products', icon: <ShoppingBagIcon /> },
  { label: 'Orders', href: '/admin/orders', icon: <ListAltIcon /> },
  { label: 'Settings', href: '/admin/settings', icon: <SettingsIcon /> },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { sidebarOpen } = useStore();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sidebarOpen ? drawerWidth : 0,
        flexShrink: 0,
        display: { xs: 'none', md: 'block' },
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          top: '64px',
          height: 'calc(100% - 64px)',
        },
      }}
    >
      <Box sx={{ overflow: 'auto', pt: 2 }}>
        <Typography variant="h6" sx={{ px: 2, mb: 2, fontWeight: 700 }}>
          Admin Panel
        </Typography>
        <Divider />
        <List>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  selected={isActive}
                  sx={{
                    mx: 1,
                    my: 0.5,
                    borderRadius: 1,
                    '&.Mui-selected': {
                      bgcolor: 'primary.main',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                      '& .MuiListItemIcon-root': {
                        color: 'white',
                      },
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}
