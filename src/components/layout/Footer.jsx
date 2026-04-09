import React from 'react'
import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function Footer() {
  const companyLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
  ]

  const serviceLinks = [
    { label: 'Web Development', href: '#' },
    { label: 'Mobile App Development', href: '#' },
    { label: 'E-Commerce Solutions', href: '#' },
    { label: 'UI/UX Designs', href: '#' },
    { label: 'POS Systems', href: '#' },
    { label: 'ERP Systems', href: '#' },
  ]

  const socialIcons = [
    { icon: FacebookIcon, label: 'Facebook', href: '#' },
    { icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
    { icon: GitHubIcon, label: 'GitHub', href: '#' },
  ]

  return (
    <Box
      sx={{
        backgroundColor: '#F9F9F9',
        paddingTop: { xs: '40px', md: '60px' },
        paddingBottom: { xs: '20px', md: '20px' },
      }}
    >
      <Container maxWidth="xl" sx={{ paddingX: { xs: '20px', md: '40px' } }}>
        {/* Main Footer Content */}
        <Box sx={{ marginBottom: { xs: '40px', md: '60px' } }}>
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="flex-start">
            {/* Column 1 - Logo & Description */}
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                {/* Logo */}
                <Box sx={{ marginBottom: '20px' }}>
                  <img
                    src="/images/logo/logo.png"
                    alt="Oxy12 Logo"
                    style={{ height: '50px' }}
                  />
                </Box>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: '13px', md: '14px' },
                    fontWeight: 400,
                    color: '#333333',
                    lineHeight: 1.7,
                    marginBottom: '24px',
                    maxWidth: '300px',
                  }}
                >
                  Transforming businesses through innovative digital solutions. We deliver scalable, secure, and user-centric technology.
                </Typography>

                {/* Social Icons */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: '12px',
                  }}
                >
                  {socialIcons.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Link
                        key={index}
                        href={social.href}
                        sx={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: 'primary.main',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#e56a2e',
                            transform: 'translateY(-3px)',
                          },
                        }}
                      >
                        <IconComponent sx={{ fontSize: '20px' }} />
                      </Link>
                    );
                  })}
                </Box>
              </Box>
            </Grid>

            {/* Column 2 - Company Links */}
            <Grid item xs={12} sm={6} md={2.5}>
              <Box>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#000000',
                    marginBottom: '20px',
                  }}
                >
                  Company
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      sx={{
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#333333',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: 'primary.main',
                          paddingLeft: '4px',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Column 3 - Services Links */}
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#000000',
                    marginBottom: '20px',
                  }}
                >
                  Services
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {serviceLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      sx={{
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#333333',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: 'primary.main',
                          paddingLeft: '4px',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Column 4 - Contact */}
            <Grid item xs={12} sm={6} md={2.5}>
              <Box>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#000000',
                    marginBottom: '20px',
                  }}
                >
                  Contact
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Phone */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Box
                      sx={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <PhoneIcon sx={{ color: 'white', fontSize: '18px' }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#333333',
                      }}
                    >
                      071 195 0429
                    </Typography>
                  </Box>

                  {/* Email */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Box
                      sx={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <EmailIcon sx={{ color: 'white', fontSize: '18px' }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#333333',
                      }}
                    >
                      oxy2twelve@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Divider */}
        <Divider
          sx={{
            marginBottom: { xs: '24px', md: '30px' },
            backgroundColor: '#e0e0e0',
          }}
        />

        {/* Footer Bottom */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: '16px', md: '0' },
            paddingBottom: { xs: '20px', md: '20px' },
          }}
        >
          {/* Copyright */}
          <Typography
            sx={{
              fontSize: { xs: '13px', md: '14px' },
              fontWeight: 400,
              color: '#333333',
            }}
          >
            Copyright @ 2026. Alright Reserved. Develop By Oxy12.
          </Typography>

          {/* Policy Links */}
          <Box
            sx={{
              display: 'flex',
              gap: { xs: '20px', md: '40px' },
              justifyContent: 'center',
            }}
          >
            <Link
              href="#"
              sx={{
                fontSize: '14px',
                fontWeight: 400,
                color: '#333333',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                fontSize: '14px',
                fontWeight: 400,
                color: '#333333',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Terms of Use
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
