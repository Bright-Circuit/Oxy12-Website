'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Box, Container, Typography, Button, Stack, Grid, Paper } from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import CodeIcon from '@mui/icons-material/Code'
import ApiIcon from '@mui/icons-material/Api'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import StarIcon from '@mui/icons-material/Star'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

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
  const [currentIndex, setCurrentIndex] = useState(1)

  // Refs for scroll animations
  const featuresRef = useRef(null)
  const whoWeAreRef = useRef(null)
  const servicesRef = useRef(null)
  const ctaRef = useRef(null)
  const testimonialsRef = useRef(null)

  // Check if sections are in view
  const featuresInView = useInView(featuresRef)
  const whoWeAreInView = useInView(whoWeAreRef)
  const servicesInView = useInView(servicesRef)
  const ctaInView = useInView(ctaRef)
  const testimonialsInView = useInView(testimonialsRef)

  const testimonials = [
    {
      id: 1,
      rating: 5.0,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      author: 'Test 1',
      title: 'CEO at ABC',
      avatar: '/images/avatar-1.jpg',
    },
    {
      id: 2,
      rating: 5.0,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      author: 'Test 2',
      title: 'CEO at ABC',
      avatar: '/images/avatar-2.jpg',
    },
    {
      id: 3,
      rating: 5.0,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      author: 'Test 3',
      title: 'CEO at ABC',
      avatar: '/images/avatar-3.jpg',
    },
    {
      id: 4,
      rating: 5.0,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      author: 'Test 4',
      title: 'CEO at ABC',
      avatar: '/images/avatar-4.jpg',
    },
    {
      id: 5,
      rating: 5.0,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      author: 'Test 5',
      title: 'CEO at ABC',
      avatar: '/images/avatar-5.jpg',
    },
  ]

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const getVisibleTestimonials = () => {
    const prev = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    const next =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    return [testimonials[prev], testimonials[currentIndex], testimonials[next]]
  }

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 'auto', sm: '80vh', md: '120vh' },
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          marginTop: { xs: '70px', sm: '70px', md: '60px', lg: '80px', xl: '20px' },
          background: 'url(/images/hero-images/hero.png) center center/cover no-repeat',
          padding: { xs: '50px 10px', sm: '50px 20px', md: '40px 0', lg: '20px 0' },
          '@keyframes fadeInUp': {
            from: {
              opacity: 0,
              transform: 'translateY(30px)',
            },
            to: {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
          '@keyframes float': {
            '0%, 100%': {
              transform: 'translateY(0px)',
            },
            '50%': {
              transform: 'translateY(-20px)',
            },
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        />

        {/* Floating Shapes */}
        {/* Shape 1 - Top Left */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: { xs: '40px', md: '80px' },
            height: { xs: '40px', md: '80px' },
            borderRadius: '50%',
            backgroundColor: 'rgba(250, 131, 43, 0.1)',
            pointerEvents: 'none',
            animation: 'float 4s ease-in-out infinite',
            zIndex: 1,
          }}
        />

        {/* Shape 2 - Top Right */}
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            right: '8%',
            width: { xs: '50px', md: '100px' },
            height: { xs: '50px', md: '100px' },
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            backgroundColor: 'rgba(250, 131, 43, 0.08)',
            pointerEvents: 'none',
            animation: 'float 5s ease-in-out infinite reverse',
            zIndex: 1,
          }}
        />

        {/* Shape 3 - Bottom Left */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '10%',
            width: { xs: '60px', md: '120px' },
            height: { xs: '60px', md: '120px' },
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            backgroundColor: 'rgba(250, 131, 43, 0.07)',
            pointerEvents: 'none',
            animation: 'float 6s ease-in-out infinite',
            zIndex: 1,
          }}
        />

        {/* Shape 4 - Bottom Right */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            right: '5%',
            width: { xs: '45px', md: '90px' },
            height: { xs: '45px', md: '90px' },
            borderRadius: '50%',
            backgroundColor: 'rgba(250, 131, 43, 0.09)',
            pointerEvents: 'none',
            animation: 'float 4.5s ease-in-out infinite reverse',
            zIndex: 1,
          }}
        />

        {/* Hero Content */}
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: { xs: 2.5, md: 4 },
              position: 'relative',
              zIndex: 10,
            }}
          >
            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '36px', sm: '62px', md: '82px', lg: '98px' },
                fontWeight: 700,
                lineHeight: { xs: 1.3, md: 1.2 },
                color: '#1a2855',
                letterSpacing: '-1px',
                margin: 0,
                animation: 'fadeInUp 0.8s ease-out 0.2s both',
              }}
            >
              Transforming Visions
              <br />
              into Conversion
              <br />
              <Box
                component="span"
                sx={{
                  color: 'primary.main',
                }}
              >
                Websites
              </Box>
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '14px', sm: '14px', md: '16px' },
                color: '#333333',
                lineHeight: 1.6,
                maxWidth: { xs: '100%', md: '500px' },
                fontWeight: 400,
                animation: 'fadeInUp 0.8s ease-out 0.4s both',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </Typography>

            {/* Button Group */}
            <Stack
              direction={{ xs: 'row', sm: 'row' }}
              spacing={{ xs: 2, sm: 2.5 }}
              sx={{
                justifyContent: 'center',
                width: { xs: '100%', sm: 'auto' },
                animation: 'fadeInUp 0.8s ease-out 0.6s both',
              }}
            >
              <Button
                variant="contained"
                sx={{
                  padding: { xs: '12px 20px', sm: '12px 40px', md: '12px 40px' },
                  fontSize: { xs: '14px', sm: '14px', md: '16px' },
                  fontWeight: 600,
                  backgroundColor: 'primary.main',
                  color: 'white',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#e56a2e',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 16px rgba(255, 122, 61, 0.3)',
                  },
                }}
              >
                Get Started
              </Button>

              <Button
                variant="outlined"
                sx={{
                  padding: { xs: '10px 20px', sm: '12px 40px', md: '12px 40px' },
                  fontSize: { xs: '14px', sm: '14px', md: '16px' },
                  fontWeight: 600,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  borderRadius: '10px',
                  border: '2px solid',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#ff7a3d',
                    color: 'white',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 16px rgba(255, 122, 61, 0.3)',
                  },
                }}
              >
                Explore More
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        ref={featuresRef}
        sx={{
          bgcolor: 'secondary.main',
          padding: { xs: '60px 20px', md: '100px 20px' },
          position: 'relative',
          '@keyframes slideInUp': {
            from: {
              opacity: 0,
              transform: 'translateY(50px)',
            },
            to: {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
          '@keyframes slideInLeft': {
            from: {
              opacity: 0,
              transform: 'translateX(-50px)',
            },
            to: {
              opacity: 1,
              transform: 'translateX(0)',
            },
          },
          '@keyframes slideInRight': {
            from: {
              opacity: 0,
              transform: 'translateX(50px)',
            },
            to: {
              opacity: 1,
              transform: 'translateX(0)',
            },
          },
          '@keyframes scaleInUp': {
            from: {
              opacity: 0,
              transform: 'scale(0.9) translateY(30px)',
            },
            to: {
              opacity: 1,
              transform: 'scale(1) translateY(0)',
            },
          },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 3, md: 2 }} alignItems="center">
            {/* Left Content */}
            <Grid item xs={12} md={4}>
              <Box sx={{ animation: featuresInView ? 'slideInLeft 0.8s ease-out' : 'none' }}>
                <Typography
                  sx={{
                    fontSize: { xs: '28px', sm: '32px', md: '50px' },
                    fontWeight: 700,
                    color: 'white',
                    lineHeight: 1.3,
                    marginBottom: { xs: '20px', md: '30px' },
                  }}
                >
                  Build your Best <br></br>Product with us!
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    padding: { xs: '10px 20px', md: '12px 40px' },
                    fontSize: { xs: '14px', md: '16px' },
                    fontWeight: 600,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderRadius: '8px',
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#e56a2e',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 16px rgba(255, 122, 61, 0.3)',
                    },
                  }}
                >
                  Let's Talk
                </Button>
              </Box>
            </Grid>

            {/* Right Content - Cards */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={{ xs: 2, md: 3 }} alignItems="stretch">
                {/* Card 1 - Customer Engagement */}
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      background: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.96)',
                      borderRadius: '16px',
                      padding: { xs: '20px', md: '30px' },
                      minHeight: { xs: '240px', md: '280px' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease',
                      animation: featuresInView ? 'scaleInUp 0.8s ease-out 0.1s both' : 'none',
                      '&:hover': {
                        border: '1px solid rgba(255, 122, 61, 0.5)',
                        boxShadow: '0 8px 24px rgba(255, 122, 61, 0.15)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: '55px', md: '65px' },
                        height: { xs: '55px', md: '65px' },
                        mt: { xs: '-50px', md: '-60px' },
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // marginBottom: '15px',
                      }}
                    >
                      <BusinessIcon sx={{ color: 'primary.main', fontSize: { xs: '24px', md: '28px' } }} />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: '18px', md: '22px' },
                          fontWeight: 700,
                          color: 'white',
                          marginBottom: '12px',
                        }}
                      >
                        Customer Engagement
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: '13px', md: '14px' },
                          color: 'rgba(255, 255, 255, 0.7)',
                          lineHeight: 1.6,
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Card 2 - 24 Hour Support (Highlighted) */}
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      background: 'white',
                      borderRadius: '16px',
                      padding: { xs: '20px', md: '40px 30px' },
                      minHeight: { xs: '240px', md: '280px' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 20px 60px rgba(0, 26, 77, 0.3)',
                      transform: { xs: 'translateY(0)', md: 'translateY(-20px)' },
                      animation: featuresInView ? 'scaleInUp 0.8s ease-out 0.2s both' : 'none',
                      '&:hover': {
                        transform: { xs: 'translateY(0)', md: 'translateY(-28px)' },
                        boxShadow: '0 30px 80px rgba(0, 26, 77, 0.4)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: '55px', md: '65px' },
                        height: { xs: '55px', md: '65px' },
                        mt: { xs: '-50px', md: '-70px' },
                        backgroundColor: 'primary.main',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // marginBottom: '15px',
                      }}
                    >
                      <SupportAgentIcon
                        sx={{ color: 'white', fontSize: { xs: '28px', md: '32px' } }}
                      />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: '18px', md: '22px' },
                          fontWeight: 700,
                          color: '#001a4d',
                          marginBottom: '12px',
                        }}
                      >
                        We Provide 24 Hour Support
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: '13px', md: '14px' },
                          color: '#666666',
                          lineHeight: 1.6,
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Card 3 - Generate More Sale Easily */}
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      background: 'transparent',
                      border: '1px solid rgb(255, 255, 255)',
                      borderRadius: '16px',
                      padding: { xs: '20px', md: '30px' },
                      minHeight: { xs: '240px', md: '280px' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease',
                      animation: featuresInView ? 'scaleInUp 0.8s ease-out 0.3s both' : 'none',
                      '&:hover': {
                        border: '1px solid rgba(255, 122, 61, 0.5)',
                        boxShadow: '0 8px 24px rgba(255, 122, 61, 0.15)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: '55px', md: '65px' },
                        height: { xs: '55px', md: '65px' },
                        mt: { xs: '-50px', md: '-60px' },
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '15px',
                      }}
                    >
                      <TrendingUpIcon sx={{ color: 'primary.main', fontSize: { xs: '24px', md: '28px' } }} />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: '18px', md: '22px' },
                          fontWeight: 700,
                          color: 'white',
                          marginBottom: '12px',
                        }}
                      >
                        Generate More Sale Easily
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: '13px', md: '14px' },
                          color: 'rgba(255, 255, 255, 0.7)',
                          lineHeight: 1.6,
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Who We Are Section */}
      <Box
        ref={whoWeAreRef}
        sx={{
          backgroundColor: '#ffffff',
          padding: { xs: '60px 10px', md: '100px 20px' },
          position: 'relative',
          '@keyframes slideInLeft': {
            from: { opacity: 0, transform: 'translateX(-50px)' },
            to: { opacity: 1, transform: 'translateX(0)' },
          },
          '@keyframes slideInRight': {
            from: { opacity: 0, transform: 'translateX(50px)' },
            to: { opacity: 1, transform: 'translateX(0)' },
          },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            {/* Left - Image Placeholder */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '350px', md: '450px' },
                  borderRadius: '24px',
                  overflow: 'hidden',
                  animation: whoWeAreInView ? 'slideInLeft 0.8s ease-out' : 'none',
                }}
              >
                {/* Background gray box */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#CCCCCC',
                    borderRadius: '24px',
                  }}
                />

                {/* Orange overlay element */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '30px',
                    right: '30px',
                    width: { xs: '180px', md: '220px' },
                    height: { xs: '140px', md: '180px' },
                    backgroundColor: 'primary.main',
                    borderRadius: '20px',
                  }}
                />

                {/* Image - placeholder for user's image */}
                <Box
                  component="img"
                  src="/images/about-image.jpg"
                  alt="About us"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    // display: 'none', // Hide until user provides image
                  }}
                />
              </Box>
            </Grid>

            {/* Right - Content */}
            <Grid item xs={12} md={6}>
              <Box sx={{ animation: whoWeAreInView ? 'slideInRight 0.8s ease-out' : 'none' }}>
                {/* "Who We Are" Label */}
                <Typography
                  sx={{
                    fontSize: { xs: '16px', md: '18px' },
                    fontWeight: 600,
                    color: 'primary.main',
                    marginBottom: '16px',
                    letterSpacing: '0.5px',
                  }}
                >
                  Who We Are
                </Typography>

                {/* Heading */}
                <Typography
                  sx={{
                    fontSize: { xs: '32px', sm: '45px', md: '50px', lg: '60px' },
                    fontWeight: 700,
                    color: '#000000',
                    lineHeight: 1.3,
                    marginBottom: '24px',
                  }}
                >
                  We are building business for your Digital Economy
                </Typography>

                {/* First Paragraph */}
                <Typography
                  sx={{
                    fontSize: { xs: '15px', md: '16px' },
                    color: '#333333',
                    lineHeight: 1.7,
                    marginBottom: '20px',
                    fontWeight: 400,
                  }}
                >
                  In today's digital-first world, success depends on how effectively your
                  business connects, communicates, and grows online. We help turn your vision
                  into powerful digital solutions that drive real results.
                </Typography>

                {/* Second Paragraph */}
                <Typography
                  sx={{
                    fontSize: { xs: '15px', md: '16px' },
                    color: '#333333',
                    lineHeight: 1.7,
                    marginBottom: '32px',
                    fontWeight: 400,
                  }}
                >
                  Our focus is on creating modern, scalable, and high-performing digital
                  experiences tailored to your unique business needs. From concept to launch,
                  we ensure every solution is built with strategy, creativity, and technology
                  working together.
                </Typography>

                {/* Explore More Button */}
                <Button
                  sx={{
                    padding: '12px 40px',
                    fontSize: '16px',
                    fontWeight: 600,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderRadius: '10px',
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#e56a2e',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 16px rgba(255, 122, 61, 0.3)',
                    },
                  }}
                >
                  Explore More
                </Button>
              </Box>
            </Grid>
          </Grid>
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
                color: 'primary.main',
                marginBottom: '12px',
                letterSpacing: '0.5px',
              }}
            >
              Services
            </Typography>

            {/* Title and Button in a row */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', md: 'center' },
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: '20px', md: '0' },
              }}
            >
              {/* Heading */}
              <Typography
                sx={{
                  fontSize: { xs: '32px', sm: '45px', md: '50px', lg: '60px' },
                  fontWeight: 700,
                  color: '#000000',
                  lineHeight: 1.2,
                }}
              >
                Services & Solutions
              </Typography>

              {/* See All Services Button */}
              <Button
                sx={{
                  padding: '12px 32px',
                  fontSize: '16px',
                  fontWeight: 600,
                  backgroundColor: 'primary.main',
                  color: 'white',
                  borderRadius: '10px',
                  textTransform: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#e56a2e',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 16px rgba(255, 122, 61, 0.3)',
                  },
                }}
              >
                See All Services
              </Button>
            </Box>
          </Box>

          {/* Service Cards */}
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
                    backgroundColor: 'primary.main',
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

            {/* Card 2 - Custom Software (Featured/Highlighted) */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: 'secondary.main',
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
                  transform: { xs: 'none', md: 'translateY(-20px)' },
                  '&:hover': {
                    boxShadow: '0 16px 50px rgba(0, 26, 77, 0.35)',
                    transform: { xs: 'translateY(-4px)', md: 'translateY(-28px)' },
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
                  <ApiIcon sx={{ color: 'primary.main', fontSize: '36px' }} />
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
                    backgroundColor: 'primary.main',
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

      {/* CTA Section - Ready to Start Your Next Project */}
      <Box
        ref={ctaRef}
        sx={{
          backgroundColor: '#ffffff',
          padding: { xs: '50px 10px', md: '80px 20px' },
          position: 'relative',
          '@keyframes scaleInUp': {
            from: { opacity: 0, transform: 'scale(0.9) translateY(30px)' },
            to: { opacity: 1, transform: 'scale(1) translateY(0)' },
          },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              backgroundColor: 'secondary.main',
              borderRadius: { xs: '20px', md: '32px' },
              padding: { xs: '50px 30px', sm: '70px 40px', md: '100px 60px' },
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: { xs: '350px', md: '450px' },
              animation: ctaInView ? 'scaleInUp 0.8s ease-out' : 'none',
            }}
          >
            {/* Main Heading */}
            <Typography
              sx={{
                fontSize: { xs: '32px', sm: '45px', md: '50px', lg: '60px' },
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: '24px',
              }}
            >
              Ready to Start Your Next Project?
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: { xs: '16px', md: '18px' },
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.8,
                marginBottom: '40px',
                maxWidth: '600px',
              }}
            >
              We are currently accepting new projects for the upcoming quarter.
              <br />
              Let's build something exceptional together.
            </Typography>

            {/* CTA Button */}
            <Button
              sx={{
                padding: '12px 48px',
                fontSize: '16px',
                fontWeight: 600,
                backgroundColor: 'primary.main',
                color: 'white',
                borderRadius: '10px',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#e56a2e',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 16px rgba(255, 122, 61, 0.3)',
                },
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box
        ref={testimonialsRef}
        sx={{
          backgroundColor: '#ffffff',
          padding: { xs: '60px 20px', md: '80px 20px' },
          position: 'relative',
          '@keyframes fadeInUp': {
            from: { opacity: 0, transform: 'translateY(30px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        <Container maxWidth="xl">
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', marginBottom: { xs: '50px', md: '80px' }, animation: testimonialsInView ? 'fadeInUp 0.8s ease-out' : 'none' }}>
            {/* "Testimonials" Label */}
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'primary.main',
                marginBottom: '12px',
                letterSpacing: '0.5px',
              }}
            >
              Testimonials
            </Typography>

            {/* Heading */}
            <Typography
              sx={{
                fontSize: { xs: '40px', sm: '50px', md: '56px' },
                fontWeight: 700,
                color: '#000000',
                lineHeight: 1.2,
              }}
            >
              Happy Clients
            </Typography>
          </Box>

          {/* Carousel Container */}
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 2, md: 4 },
              animation: testimonialsInView ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none',
            }}
          >
            {/* Previous Button */}
            <Button
              onClick={handlePrev}
              sx={{
                display: { xs: 'none', md: 'flex' },
                minWidth: 'auto',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                border: '2px solid #E0E0E0',
                color: '#333333',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'primary.main',
                  color: 'primary.main',
                },
              }}
            >
              <ChevronLeftIcon />
            </Button>

            {/* Cards Container */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: { xs: 3, md: 4 },
                width: '100%',
                maxWidth: '1200px',
              }}
            >
              {getVisibleTestimonials().map((testimonial, index) => {
                const isCenter = index === 1
                return (
                  <Box
                    key={testimonial.id}
                    sx={{
                      backgroundColor: isCenter ? 'secondary.main' : '#ffffff',
                      borderRadius: '20px',
                      padding: { xs: '30px 25px', md: '40px 30px' },
                      minHeight: '380px',
                      display: { xs: index === 1 ? 'flex' : 'none', md: 'flex' },
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.5s ease',
                      transform: isCenter ? 'scale(1.05)' : 'scale(1)',
                      opacity: index === 0 || index === 2 ? 0.6 : 1,
                      boxShadow: isCenter
                        ? '0 12px 40px rgba(0, 26, 77, 0.25)'
                        : '0 12px 40px rgba(49, 55, 66, 0.25)',
                    }}
                  >
                    {/* Rating */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '20px',
                      }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          sx={{
                            color: 'primary.main',
                            fontSize: '20px',
                          }}
                        />
                      ))}
                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: 600,
                          color: isCenter ? '#FFFFFF' : '#333333',
                          marginLeft: '8px',
                        }}
                      >
                        {testimonial.rating}
                      </Typography>
                    </Box>

                    {/* Testimonial Text */}
                    <Typography
                      sx={{
                        fontSize: '15px',
                        color: isCenter ? 'rgba(255, 255, 255, 0.85)' : '#666666',
                        lineHeight: 1.8,
                        marginBottom: '24px',
                        flex: 1,
                        fontStyle: 'italic',
                      }}
                    >
                      " {testimonial.text} "
                    </Typography>

                    {/* Author Info */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        paddingTop: '20px',
                        borderTop: isCenter
                          ? '1px solid rgba(255, 255, 255, 0.1)'
                          : '1px solid #E0E0E0',
                      }}
                    >
                      {/* Avatar */}
                      <Box
                        sx={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          backgroundColor: '#CCCCCC',
                          flexShrink: 0,
                        }}
                      />

                      {/* Author Details */}
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '16px',
                            fontWeight: 600,
                            color: isCenter ? '#FFFFFF' : '#000000',
                          }}
                        >
                          {testimonial.author}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            color: isCenter
                              ? 'rgba(255, 255, 255, 0.7)'
                              : '#999999',
                          }}
                        >
                          {testimonial.title}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )
              })}
            </Box>

            {/* Next Button */}
            <Button
              onClick={handleNext}
              sx={{
                display: { xs: 'none', md: 'flex' },
                minWidth: 'auto',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                border: '2px solid #E0E0E0',
                color: '#333333',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'primary.main',
                  color: 'primary.main',
                },
              }}
            >
              <ChevronRightIcon />
            </Button>
          </Box>

          {/* Mobile Navigation Buttons */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
              gap: '16px',
              marginTop: '30px',
            }}
          >
            <Button
              onClick={handlePrev}
              sx={{
                minWidth: 'auto',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#F0F0F0',
                border: 'none',
                color: '#333333',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              onClick={handleNext}
              sx={{
                minWidth: 'auto',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#F0F0F0',
                border: 'none',
                color: '#333333',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              <ChevronRightIcon />
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}
