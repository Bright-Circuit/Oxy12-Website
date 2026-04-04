'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import CustomerSidebar from '../../components/layout/CustomerSidebar';
import Topbar from '../../components/layout/Topbar';
import { useStore } from '../../store/useStore';
import { ROLES } from '../../lib/roles';
import Loader from '../../components/common/Loader';
import { useHydration } from '../../hooks/useHydration';

export default function CustomerLayout({ children }) {
  const router = useRouter();
  const hydrated = useHydration();
  const { user, isAuthenticated } = useStore();

  useEffect(() => {
    if (hydrated && (!isAuthenticated || !user || user.role !== ROLES.CUSTOMER)) {
      console.log('Customer redirect:', { hydrated, isAuthenticated, user, role: user?.role });
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

  if (!isAuthenticated || !user || user.role !== ROLES.CUSTOMER) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CustomerSidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Topbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: 'background.default' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
