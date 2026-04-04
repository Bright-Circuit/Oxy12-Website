import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '../components/common/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '400px',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* 404 Heading */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '80px', sm: '120px', md: '150px', lg: '250px' },
              fontWeight: 300,
              letterSpacing: '2px',
              color: '#ffffff',
              lineHeight: 0.9,
              mb: 2,
            }}
          >
            404
          </Typography>

          {/* Page Not Found Title */}
          <Typography
            sx={{
              fontSize: { xs: '28px', sm: '36px', md: '48px' },
              fontWeight: 300,
              letterSpacing: '1px',
              color: '#ffffff',
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Page Not Found
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              color: '#cccccc',
              lineHeight: 1.8,
              maxWidth: '600px',
              mx: 'auto',
              fontWeight: 400,
              letterSpacing: '0.5px',
              mb: 5,
            }}
          >
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </Typography>

          {/* Go Home Button */}
          <Box
            component={Link}
            href="/"
            sx={{
              display: 'inline-block',
              textDecoration: 'none',
            }}
          >
            <Box
              sx={{
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50px',
                padding: '12px 32px',
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 400,
                letterSpacing: '1px',
                transition: 'all 0.4s ease',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%)',
                  pointerEvents: 'none',
                },
                '&:hover': {
                  backgroundColor: 'rgba(155, 89, 182, 0.5)',
                  borderColor: 'rgba(255, 255, 255, 0.6)',
                  boxShadow: '0 12px 40px rgba(155, 89, 182, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Go Home
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
