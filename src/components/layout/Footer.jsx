import React from 'react'
import { Box, Container, Typography, Divider } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LanguageIcon from '@mui/icons-material/Language'

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#F9F9F9',
        paddingTop: { xs: '60px', md: '80px' },
        paddingBottom: { xs: '40px', md: '60px' },
      }}
    >
      <Container maxWidth="xl">
        {/* Logo Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: { xs: '50px', md: '60px' },
          }}
        >
          <Box>
            <img
              src="/images/logo/logo.png"
              alt="Oxy12 Logo"
              style={{ height: '60px' }}
            />
          </Box>
        </Box>

        {/* Contact Information */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: { xs: '30px', md: '0px' },
            justifyItems: 'center',
            marginBottom: { xs: '50px', md: '60px' },
          }}
        >
          {/* Phone */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <Box
              sx={{
                width: '50px',
                height: '50px',
                backgroundColor: 'primary.main',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <PhoneIcon sx={{ color: 'white', fontSize: '24px' }} />
            </Box>
            <Typography
              sx={{
                fontSize: { xs: '15px', md: '16px' },
                fontWeight: 500,
                color: '#333333',
              }}
            >
              071 195 0429
            </Typography>
          </Box>

          {/* Email */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <Box
              sx={{
                width: '50px',
                height: '50px',
                backgroundColor: 'primary.main',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <EmailIcon sx={{ color: 'white', fontSize: '24px' }} />
            </Box>
            <Typography
              sx={{
                fontSize: { xs: '15px', md: '16px' },
                fontWeight: 500,
                color: '#333333',
              }}
            >
              oxy2twelve@gmail.com
            </Typography>
          </Box>

          {/* Website */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <Box
              sx={{
                width: '50px',
                height: '50px',
                backgroundColor: 'primary.main',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <LanguageIcon sx={{ color: 'white', fontSize: '24px' }} />
            </Box>
            <Typography
              sx={{
                fontSize: { xs: '15px', md: '16px' },
                fontWeight: 500,
                color: '#333333',
              }}
            >
              www.oxy12.com
            </Typography>
          </Box>
        </Box>

        {/* Divider */}
        <Divider
          sx={{
            marginBottom: { xs: '40px', md: '50px' },
            backgroundColor: '#E0E0E0',
          }}
        />

        {/* Copyright */}
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '14px', md: '16px' },
              fontWeight: 400,
              color: '#666666',
            }}
          >
            Copyright @ 2026. Alright Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
