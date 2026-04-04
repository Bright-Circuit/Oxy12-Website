'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useCurrentUser } from '../../../../hooks/useAuth';
import { useCart } from '../../../../hooks/useCart';

export default function LoginSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/';
  console.log("Redirected URL",redirectUrl)
  const { user, isLoading: isLoadingUser } = useCurrentUser();
  const { mergeCart, isMergingCart } = useCart();

  useEffect(() => {
    console.log("Redirected URL1",redirectUrl,isLoadingUser)
    console.log("User1",user)
    if (user) {
      console.log("UUID1",user.uuid)
    }
    if (!isLoadingUser && user) {
      console.log("Redirected URL",redirectUrl,isLoadingUser)
      console.log("User",user)
      console.log("UUID",user.uuid)
      // User is authenticated, merge cart if customer
      if (user.uuid) {
        // Customer with UUID - merge cart
        mergeCart(user.uuid, {
          onSuccess: () => {
            // Redirect after successful merge
            setTimeout(() => {
              router.push(redirectUrl);
            }, 500);
          },
          onError: () => {
            // Still redirect even if merge fails
            setTimeout(() => {
              router.push(redirectUrl);
            }, 500);
          },
        });
      } else {
        // No UUID (admin/reseller) - just redirect
        setTimeout(() => {
          router.push(redirectUrl);
        }, 500);
      }
    } else if (!isLoadingUser && !user) {
      // Not authenticated - redirect to login
      const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL || 'http://localhost:3004/auth/login';
      window.location.href = `${loginUrl}?redirect=${encodeURIComponent(redirectUrl)}`;
    }
  }, [user, isLoadingUser, mergeCart, router, redirectUrl]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: '#F7F7F7',
        gap: 3,
      }}
    >
      <CircularProgress size={48} sx={{ color: '#FF8C42' }} />
      <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
        {isMergingCart ? 'Syncing your cart...' : 'Completing login...'}
      </Typography>
      <Typography variant="body2" sx={{ color: '#666' }}>
        Please wait while we prepare your account
      </Typography>
    </Box>
  );
}
