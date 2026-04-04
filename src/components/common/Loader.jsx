'use client';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export default function Loader({
  size = 50,
  color = 'inherit',
  text = 'Loading',
  fullScreen = false,
}) {
  if (fullScreen) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          width: '100%',
          backgroundColor: '#000000',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          gap: 3,
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
          '@keyframes pulse': {
            '0%, 100%': {
              opacity: 1,
            },
            '50%': {
              opacity: 0.5,
            },
          },
        }}
      >
        {/* Spinner */}
        <CircularProgress 
          size={size} 
          sx={{
            color: '#ffffff',
            position: 'relative',
            zIndex: 1,
          }}
        />
        
        {/* Loading Text */}
        {text && (
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 300,
              letterSpacing: '2px',
              color: '#ffffff',
              textTransform: 'uppercase',
              position: 'relative',
              zIndex: 1,
              animation: 'pulse 1.5s ease-in-out infinite',
            }}
          >
            {text}
          </Typography>
        )}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        gap: 2,
        backgroundColor: '#000000',
        borderRadius: '12px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        '@keyframes pulse': {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.5,
          },
        },
      }}
    >
      <CircularProgress 
        size={size} 
        sx={{
          color: '#ffffff',
        }}
      />
      {text && (
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 300,
            letterSpacing: '1px',
            color: '#cccccc',
            textTransform: 'uppercase',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
}
