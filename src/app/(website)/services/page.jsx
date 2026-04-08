'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Box, Container, Typography, Grid } from '@mui/material'
import Image from 'next/image'
import CodeIcon from '@mui/icons-material/Code'
import ApiIcon from '@mui/icons-material/Api'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

// Custom hook for scroll animations
const useInView = (ref, options = {}) => {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(entry.target)
      }
    }, {
      threshold: 0.1,
      ...options,
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  return isInView
}

export default function page() {
  // Refs for scroll animations
  const expertiseRef = useRef(null)
  const servicesRef = useRef(null)

  // Check if sections are in view
  const expertiseInView = useInView(expertiseRef)
  const servicesInView = useInView(servicesRef)

  return (
    <>
      {/* Expertise Section */}
      <Box ref={expertiseRef}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              py: { xs: 5, md: 8, lg: 10 },
              pt: { xs: 15, md: 20, lg: 20 },
              gap: 3,
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
              animation: expertiseInView ? 'fadeInUp 0.8s ease-out' : 'none'
            }}
          >
            {/* Subheading */}
            <Typography
              variant="body1"
              sx={{
                color: '#FA832B',
                fontSize: { xs: '16px', md: '18px' },
                fontWeight: '600',
                letterSpacing: '0.5px'
              }}
            >
              Our Expertise
            </Typography>

            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '36px', sm: '62px', md: '70px', lg: '75px' },
                fontWeight: '700',
                lineHeight: 1.2,
              }}
            >
              Comprehensive Solutions <br></br>for the{' '}
              <span style={{ color: '#FA832B' }}>Digital Age.</span>
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                color: '#666666',
                maxWidth: '600px',
                lineHeight: 1.6
              }}
            >
              We blend technical mastery with aesthetic precision to curate digital experiences that define the modern landscape.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          width: '100%',
          py: { xs: 2, sm: 2, md: 2, lg: 0 },
          px: { xs: 0, sm: 2, md: 2, lg: 5 },
          mt: 4,
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: '250px', sm: '350px', md: '450px', lg: '550px' },
              borderRadius: { xs: '8px', md: '12px' },
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
            }}
          >
            <Image
              src="/images/services.png"
              alt="Professional Workspace"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              priority
            />
          </Box>
        </Container>
      </Box>

      {/* Services & Solutions Section */}
      <Box
        ref={servicesRef}
        sx={{
          backgroundColor: '#F9F9F9',
          padding: { xs: '60px 10px', md: '100px 20px' },
          position: 'relative',
          '@keyframes fadeInUp': {
            from: { opacity: 0, transform: 'translateY(30px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        <Container maxWidth="xl">
          {/* Section Header */}
          <Box sx={{ marginBottom: { xs: '50px', md: '80px' }, animation: servicesInView ? 'fadeInUp 0.8s ease-out' : 'none' }}>
            {/* "Services" Label */}
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#FA832B',
                textAlign: 'center',
                marginBottom: '12px',
                letterSpacing: '0.5px',
              }}
            >
              Services
            </Typography>

            {/* Heading */}
            <Typography
              sx={{
                fontSize: { xs: '32px', sm: '45px', md: '50px', lg: '60px' },
                fontWeight: 700,
                color: '#000000',
                textAlign: 'center',
                lineHeight: 1.2,
              }}
            >
              Our Services & Solutions
            </Typography>
          </Box>

          {/* Service Cards Grid */}
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
            {/* Card 1 - Web Development */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: { xs: '40px 30px', md: '50px 35px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  minHeight: '320px',
                  transition: 'all 0.3s ease',
                  animation: servicesInView ? 'fadeInUp 0.8s ease-out 0.1s both' : 'none',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#FA832B',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <CodeIcon sx={{ color: 'white', fontSize: '36px' }} />
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#000000',
                    marginBottom: '16px',
                  }}
                >
                  Web Development
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: '15px',
                    color: '#666666',
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut
                </Typography>
              </Box>
            </Grid>

            {/* Card 2 - Custom Software (Featured) */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: '#00072B',
                  borderRadius: '16px',
                  padding: { xs: '40px 30px', md: '50px 35px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  minHeight: '320px',
                  transition: 'all 0.3s ease',
                  animation: servicesInView ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none',
                  boxShadow: '0 12px 40px rgba(0, 26, 77, 0.25)',
                  '&:hover': {
                    boxShadow: '0 16px 50px rgba(0, 26, 77, 0.35)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <ApiIcon sx={{ color: '#FA832B', fontSize: '36px' }} />
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '16px',
                  }}
                >
                  Custom Software
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut
                </Typography>
              </Box>
            </Grid>

            {/* Card 3 - E-Commerce Solutions */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: { xs: '40px 30px', md: '50px 35px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  minHeight: '320px',
                  transition: 'all 0.3s ease',
                  animation: servicesInView ? 'fadeInUp 0.8s ease-out 0.3s both' : 'none',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#FA832B',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <MonetizationOnIcon sx={{ color: 'white', fontSize: '36px' }} />
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#000000',
                    marginBottom: '16px',
                  }}
                >
                  E-Commerce Solutions
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: '15px',
                    color: '#666666',
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut
                </Typography>
              </Box>
            </Grid>

            {/* Card 4 - Mobile App Development */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: { xs: '40px 30px', md: '50px 35px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  minHeight: '320px',
                  transition: 'all 0.3s ease',
                  animation: servicesInView ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#FA832B',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <PhoneAndroidIcon sx={{ color: 'white', fontSize: '36px' }} />
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#000000',
                    marginBottom: '16px',
                  }}
                >
                  Mobile App Development
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: '15px',
                    color: '#666666',
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut
                </Typography>
              </Box>
            </Grid>

            {/* Card 5 - Custom Software (Featured) */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: '#00072B',
                  borderRadius: '16px',
                  padding: { xs: '40px 30px', md: '50px 35px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  minHeight: '320px',
                  transition: 'all 0.3s ease',
                  animation: servicesInView ? 'fadeInUp 0.8s ease-out 0.5s both' : 'none',
                  boxShadow: '0 12px 40px rgba(0, 26, 77, 0.25)',
                  '&:hover': {
                    boxShadow: '0 16px 50px rgba(0, 26, 77, 0.35)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <ApiIcon sx={{ color: '#FA832B', fontSize: '36px' }} />
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '16px',
                  }}
                >
                  Custom Software
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut
                </Typography>
              </Box>
            </Grid>

            {/* Card 6 - E-Commerce Solutions */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: { xs: '40px 30px', md: '50px 35px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  minHeight: '320px',
                  transition: 'all 0.3s ease',
                  animation: servicesInView ? 'fadeInUp 0.8s ease-out 0.6s both' : 'none',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#FA832B',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <MonetizationOnIcon sx={{ color: 'white', fontSize: '36px' }} />
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#000000',
                    marginBottom: '16px',
                  }}
                >
                  E-Commerce Solutions
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: '15px',
                    color: '#666666',
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
