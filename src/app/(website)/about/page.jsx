"use client";

import React, { useState, useRef, useEffect } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";

// Custom hook for scroll animations
const useInView = (ref, options = {}) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        ...options,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
};

export default function About() {
  // Refs for scroll animations
  const aboutRef = useRef(null);
    const ctaRef = useRef(null)
  

  const whoWeAreRef = useRef(null);
  const statsRef = useRef(null);
  const processRef = useRef(null);

  const whoWeAreInView = useInView(whoWeAreRef);
  const statsInView = useInView(statsRef);
  const processInView = useInView(processRef);
    const ctaInView = useInView(ctaRef)


  // Check if sections are in view
  const aboutInView = useInView(aboutRef);

  const handleClickGetStarted = () => {
  window.location.href = '/contact'
}


  return (
    <>
      {/* About Hero/Intro Section */}
      <Box
        ref={aboutRef}
        sx={{
          backgroundColor: "#FFFFFF",
          py: { xs: 5, md: 8, lg: 10 },
          pt: { xs: 15, md: 20, lg: 20 },
          paddingLeft: { xs: "20px", md: "20px" },
          paddingRight: { xs: "20px", md: "20px" },
          position: "relative",
          "@keyframes fadeInUp": {
            from: {
              opacity: 0,
              transform: "translateY(30px)",
            },
            to: {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
          "@keyframes slideInDown": {
            from: {
              opacity: 0,
              transform: "translateY(-30px)",
            },
            to: {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: { xs: "20px", md: "30px" },
            }}
          >
            {/* "Who We Are" Label */}
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 600,
                color: "#FA832B",
                letterSpacing: "0.5px",
                animation: aboutInView ? "slideInDown 0.8s ease-out" : "none",
              }}
            >
              Who We Are
            </Typography>

            {/* Main Heading */}
            <Typography
              sx={{
                fontSize: { xs: "36px", sm: "52px", md: "72px", lg: "80px" },
                fontWeight: 700,
                lineHeight: 1.2,
                animation: aboutInView
                  ? "fadeInUp 0.8s ease-out 0.2s both"
                  : "none",
              }}
            >
              About{" "}
              <Box
                component="span"
                sx={{
                  color: "#FA832B",
                }}
              >
                Oxy12
              </Box>
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: "16px",
                color: "#333333",
                lineHeight: 1.8,
                maxWidth: { xs: "100%", md: "600px" },
                fontWeight: 400,
                animation: aboutInView
                  ? "fadeInUp 0.8s ease-out 0.4s both"
                  : "none",
              }}
            >
              Oxy12 is a kinetic design and engineering studio focused on
              curating high-end digital experiences that move at the speed of
              modern commerce.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Who We Are Section */}
      <Box
        ref={whoWeAreRef}
        sx={{
          backgroundColor: "#ffffff",
          padding: { xs: "60px 10px", md: "100px 20px" },
          position: "relative",
          "@keyframes slideInLeft": {
            from: { opacity: 0, transform: "translateX(-50px)" },
            to: { opacity: 1, transform: "translateX(0)" },
          },
          "@keyframes slideInRight": {
            from: { opacity: 0, transform: "translateX(50px)" },
            to: { opacity: 1, transform: "translateX(0)" },
          },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            {/* Left - Image Placeholder */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "350px", md: "450px" },
                  borderRadius: "24px",
                  overflow: "hidden",
                  animation: whoWeAreInView
                    ? "slideInLeft 0.8s ease-out"
                    : "none",
                }}
              >
                {/* Image - placeholder for user's image */}
                <Box
                  component="img"
                  src="/images/about/about.jpg"
                  alt="About us"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>

            {/* Right - Content */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  animation: whoWeAreInView
                    ? "slideInRight 0.8s ease-out"
                    : "none",
                }}
              >
                {/* "Who We Are" Label */}
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    fontWeight: 600,
                    color: "primary.main",
                    marginBottom: "16px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Who We Are
                </Typography>

                {/* Heading */}
                <Typography
                  sx={{
                    fontSize: {
                      xs: "32px",
                      sm: "45px",
                      md: "50px",
                      lg: "60px",
                    },
                    fontWeight: 700,
                    color: "#000000",
                    lineHeight: 1.3,
                    marginBottom: "24px",
                  }}
                >
                  We are building business for your Digital Economy
                </Typography>

                {/* First Paragraph */}
                <Typography
                  sx={{
                    fontSize: { xs: "15px", md: "16px" },
                    color: "#333333",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                    fontWeight: 400,
                  }}
                >
                  OXY12 is a full-service digital technology company dedicated
                  to transforming businesses through innovative solutions.
                  Founded in 2018, we have grown into a team of 30+ skilled
                  professionals committed to delivering excellence.
                </Typography>

                {/* Second Paragraph */}
                <Typography
                  sx={{
                    fontSize: { xs: "15px", md: "16px" },
                    color: "#333333",
                    lineHeight: 1.7,
                    marginBottom: "32px",
                    fontWeight: 400,
                  }}
                >
                  We specialize in web development, mobile applications,
                  e-commerce platforms, UI/UX design, ERP systems, and POS
                  solutions. Our approach combines cutting-edge technology with
                  strategic thinking to solve complex business challenges.
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "15px", md: "16px" },
                    color: "#333333",
                    lineHeight: 1.7,
                    marginBottom: "32px",
                    fontWeight: 400,
                  }}
                >
                  With over 50 successful projects executed across various
                  industries, we take pride in our ability to deliver scalable,
                  secure, and user-centric solutions that drive business growth.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        ref={statsRef}
        sx={{
          backgroundColor: 'secondary.main',
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
          '@keyframes scaleInUp': {
            from: {
              opacity: 0,
              transform: 'scale(0.95) translateY(30px)',
            },
            to: {
              opacity: 1,
              transform: 'scale(1) translateY(0)',
            },
          },
        }}
      >
        <Container maxWidth="xl">
          {/* Stats Grid - 4 columns on desktop, responsive on mobile */}
          <Grid container spacing={{ xs: 3, sm: 2, md: 3 }} alignItems="stretch">
            {/* Stat 1 - Projects Delivered */}
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  background: 'transparent',
                  border: '1px solid #ffffff55',
                  borderRadius: '16px',
                  padding: { xs: '30px', md: '40px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  minHeight: '200px',
                  transition: 'all 0.3s ease',
                  animation: statsInView ? 'scaleInUp 0.8s ease-out 0.1s both' : 'none',
                  '&:hover': {
                    background: 'rgba(0, 200, 255, 0.08)',
                    border: 'none',
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                {/* Number */}
                <Typography
                  sx={{
                    fontSize: { xs: '48px', md: '56px' },
                    fontWeight: 700,
                    color: 'primary.main',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  50+
                </Typography>

                {/* Label */}
                <Typography
                  sx={{
                    fontSize: { xs: '16px', md: '18px' },
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  Projects Delivered
                </Typography>
              </Box>
            </Grid>

            {/* Stat 2 - Team Members */}
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  background: 'transparent',
                  border: '1px solid #ffffff55',
                  borderRadius: '16px',
                  padding: { xs: '30px', md: '40px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  minHeight: '200px',
                  transition: 'all 0.3s ease',
                  animation: statsInView ? 'scaleInUp 0.8s ease-out 0.2s both' : 'none',
                  '&:hover': {
                    background: 'rgba(0, 200, 255, 0.08)',
                    border: 'none',
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                {/* Number */}
                <Typography
                  sx={{
                    fontSize: { xs: '48px', md: '56px' },
                    fontWeight: 700,
                    color: 'primary.main',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  30+
                </Typography>

                {/* Label */}
                <Typography
                  sx={{
                    fontSize: { xs: '16px', md: '18px' },
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  Team Members
                </Typography>
              </Box>
            </Grid>

            {/* Stat 3 - Happy Clients */}
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  background: 'transparent',
                  border: '1px solid #ffffff55',
                  borderRadius: '16px',
                  padding: { xs: '30px', md: '40px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  minHeight: '200px',
                  transition: 'all 0.3s ease',
                  animation: statsInView ? 'scaleInUp 0.8s ease-out 0.2s both' : 'none',
                  '&:hover': {
                    background: 'rgba(0, 200, 255, 0.08)',
                    border: 'none',
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                {/* Number */}
                <Typography
                  sx={{
                    fontSize: { xs: '48px', md: '56px' },
                    fontWeight: 700,
                    color: 'primary.main',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  100%
                </Typography>

                {/* Label */}
                <Typography
                  sx={{
                    fontSize: { xs: '16px', md: '18px' },
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  Happy Clients
                </Typography>
              </Box>
            </Grid>

            {/* Stat 4 - Years of Excellence */}
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                 background: 'transparent',
                  border: '1px solid #ffffff55',
                  borderRadius: '16px',
                  padding: { xs: '30px', md: '40px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  minHeight: '200px',
                  transition: 'all 0.3s ease',
                  animation: statsInView ? 'scaleInUp 0.8s ease-out 0.2s both' : 'none',
                  '&:hover': {
                    background: 'rgba(0, 200, 255, 0.08)',
                    border: 'none',
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                {/* Number */}
                <Typography
                  sx={{
                    fontSize: { xs: '48px', md: '56px' },
                    fontWeight: 700,
                    color: 'primary.main',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  6
                </Typography>

                {/* Label */}
                <Typography
                  sx={{
                    fontSize: { xs: '16px', md: '18px' },
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  Years of Excellence
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Development Process Section */}
      <Box
        ref={processRef}
        sx={{
          backgroundColor: '#FFFFFF',
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
          '@keyframes scaleInUp': {
            from: {
              opacity: 0,
              transform: 'scale(0.95) translateY(30px)',
            },
            to: {
              opacity: 1,
              transform: 'scale(1) translateY(0)',
            },
          },
        }}
      >
        <Container maxWidth="xl">
          {/* Section Header */}
          <Box
            sx={{
              textAlign: 'center',
              marginBottom: { xs: '60px', md: '80px' },
              animation: processInView ? 'slideInUp 0.8s ease-out' : 'none',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '32px', sm: '45px', md: '50px', lg: '60px' },
                fontWeight: 700,
                color: '#000000',
                lineHeight: 1.3,
              }}
            >
              Our Development Process
            </Typography>
          </Box>

          {/* Process Cards Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
            {/* Card 1 - Discovery & Planning (Light) */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  background: '#F9F9F9',
                  borderRadius: '16px',
                  padding: { xs: '30px', md: '40px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  minHeight: '280px',
                  transition: 'all 0.3s ease',
                  animation: processInView ? 'scaleInUp 0.8s ease-out 0.1s both' : 'none',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                {/* Number Badge */}
                <Box
                  sx={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#FA832B',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'white',
                    }}
                  >
                    01
                  </Typography>
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: { xs: '18px', md: '20px' },
                    fontWeight: 700,
                    color: '#000000',
                    marginBottom: '16px',
                  }}
                >
                  Discovery & Planning
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: '14px', md: '15px' },
                    color: '#333333',
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  We understand your business goals and create a comprehensive project plan.
                </Typography>
              </Box>
            </Grid>

            {/* Card 2 - Design & Wireframing (Dark - Featured) */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  bgcolor: 'secondary.main',
                  borderRadius: '16px',
                  padding: { xs: '30px', md: '40px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  minHeight: '280px',
                  transition: 'all 0.3s ease',
                  animation: processInView ? 'scaleInUp 0.8s ease-out 0.2s both' : 'none',
                  transform: { xs: 'translateY(0)', md: 'translateY(20px)' },
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(250, 131, 43, 0.25)',
                    transform: { xs: 'translateY(-8px)', md: 'translateY(12px)' },
                  },
                }}
              >
                {/* Number Badge */}
                <Box
                  sx={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#FA832B',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'white',
                    }}
                  >
                    02
                  </Typography>
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: { xs: '18px', md: '20px' },
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '16px',
                  }}
                >
                  Design & Wireframing
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: '14px', md: '15px' },
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  Our designers create beautiful wireframes and UI designs based on your requirements.
                </Typography>
              </Box>
            </Grid>

            {/* Card 3 - Development (Light) */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  background: '#F9F9F9',
                  borderRadius: '16px',
                  padding: { xs: '30px', md: '40px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  minHeight: '280px',
                  transition: 'all 0.3s ease',
                  animation: processInView ? 'scaleInUp 0.8s ease-out 0.3s both' : 'none',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                {/* Number Badge */}
                <Box
                  sx={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#FA832B',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'white',
                    }}
                  >
                    03
                  </Typography>
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: { xs: '18px', md: '20px' },
                    fontWeight: 700,
                    color: '#000000',
                    marginBottom: '16px',
                  }}
                >
                  Development
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: '14px', md: '15px' },
                    color: '#333333',
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  Our developers build your solution using the latest technologies and best practices.
                </Typography>
              </Box>
            </Grid>

            {/* Card 4 - Testing & QA (Dark - Featured) */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  bgcolor: 'secondary.main',
                  borderRadius: '16px',
                  padding: { xs: '30px', md: '40px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  minHeight: '280px',
                  transition: 'all 0.3s ease',
                  animation: processInView ? 'scaleInUp 0.8s ease-out 0.4s both' : 'none',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(250, 131, 43, 0.25)',
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                {/* Number Badge */}
                <Box
                  sx={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#FA832B',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'white',
                    }}
                  >
                    04
                  </Typography>
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: { xs: '18px', md: '20px' },
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '16px',
                  }}
                >
                  Testing & QA
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: '14px', md: '15px' },
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  Rigorous testing ensures your solution is bug-free and performs optimally.
                </Typography>
              </Box>
            </Grid>

            {/* Card 5 - Deployment (Light) */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  background: '#F9F9F9',
                  borderRadius: '16px',
                  padding: { xs: '30px', md: '40px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  minHeight: '280px',
                  transition: 'all 0.3s ease',
                  animation: processInView ? 'scaleInUp 0.8s ease-out 0.5s both' : 'none',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                {/* Number Badge */}
                <Box
                  sx={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#FA832B',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'white',
                    }}
                  >
                    05
                  </Typography>
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: { xs: '18px', md: '20px' },
                    fontWeight: 700,
                    color: '#000000',
                    marginBottom: '16px',
                  }}
                >
                  Deployment
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: '14px', md: '15px' },
                    color: '#333333',
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  We deploy your solution to production with minimal downtime.
                </Typography>
              </Box>
            </Grid>

            {/* Card 6 - Support & Maintenance (Dark - Featured) */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  bgcolor: 'secondary.main',
                  borderRadius: '16px',
                  padding: { xs: '30px', md: '40px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  minHeight: '280px',
                  transition: 'all 0.3s ease',
                  animation: processInView ? 'scaleInUp 0.8s ease-out 0.6s both' : 'none',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(250, 131, 43, 0.25)',
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                {/* Number Badge */}
                <Box
                  sx={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#FA832B',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'white',
                    }}
                  >
                    06
                  </Typography>
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: { xs: '18px', md: '20px' },
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '16px',
                  }}
                >
                  Support & Maintenance
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: '14px', md: '15px' },
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  Ongoing support and updates to keep your solution running smoothly.
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
                  onClick={handleClickGetStarted}
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
    </>
  );
}
