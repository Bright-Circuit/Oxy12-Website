'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import AdminSidebar from '../../components/layout/AdminSidebar';
import Topbar from '../../components/layout/Topbar';
import { useStore } from '../../store/useStore';
import { ROLES } from '../../lib/roles';
import Loader from '../../components/common/Loader';
import { useHydration } from '../../hooks/useHydration';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const hydrated = useHydration();
  const { user, isAuthenticated } = useStore();

  useEffect(() => {
    if (hydrated && (!isAuthenticated || !user || user.role !== ROLES.ADMIN)) {
      console.log('Admin redirect:', { hydrated, isAuthenticated, user, role: user?.role });
      window.location.href = process.env.NEXT_PUBLIC_LOGIN_URL;
    }
  }, [hydrated, user, isAuthenticated, router]);

  if (!hydrated) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Loader />
      </Box>
    );
  }

  if (!isAuthenticated || !user || user.role !== ROLES.ADMIN) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AdminSidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Topbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: 'background.default' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
