'use client';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '../../components/common/Button';

export default function UnauthorizedPage() {
  const handleLoginRedirect = () => {
    window.location.href = process.env.NEXT_PUBLIC_LOGIN_URL;
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50vh',
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: 'error.main' }}>
          401
        </Typography>
        <Typography variant="h4" gutterBottom>
          Unauthorized
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          You need to be logged in to access this page.
        </Typography>
        <Button variant="contained" onClick={handleLoginRedirect} sx={{ mt: 2 }}>
          Sign In
        </Button>
      </Box>
    </Container>
  );
}
