'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Box, Container, Typography, Grid, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { projects, categories } from '../../../data/project'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

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
  // State for filtering
  const [activeCategory, setActiveCategory] = useState('All Projects')

  // Refs for scroll animations
  const worksRef = useRef(null)
  const projectsRef = useRef(null)

  // Check if sections are in view
  const worksInView = useInView(worksRef)
  const projectsInView = useInView(projectsRef)

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All Projects'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <>
      {/* Our Works Section */}
      <Box ref={worksRef}>
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
              animation: worksInView ? 'fadeInUp 0.8s ease-out' : 'none'
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
              Our Works
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
              Transforming Visions <br></br>
              <span style={{ color: '#FA832B' }}>into Reality.</span>
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                color: '#666666',
                maxWidth: '700px',
                lineHeight: 1.6
              }}
            >
              We curate digital experiences that blend kinetic energy with architectural precision. Explore our latest milestones in web and app innovation.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box
        ref={projectsRef}
        sx={{
          backgroundColor: '#FFFFFF',
          padding: { xs: '60px 15px', md: '100px 20px' },
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
          {/* Filter Buttons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: { xs: 1, md: 3 },
              marginBottom: { xs: '50px', md: '80px' },
              animation: projectsInView ? 'slideInUp 0.8s ease-out' : 'none',
            }}
          >
            {categories.map((category, index) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                sx={{
                  padding: { xs: '6px 15px', md: '8px 28px' },
                  borderRadius: '50px',
                  fontSize: { xs: '12px', md: '14px' },
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: activeCategory === category ? '#FA832B' : '#fa852b2a',
                  color: activeCategory === category ? 'white' : 'primary.main',
                  '&:hover': {
                    backgroundColor: activeCategory === category ? '#E67E1F' : '#D9D9D9',
                    transform: 'translateY(-4px)',
                  },
                  textTransform: 'none',
                }}
              >
                {category}
              </Button>
            ))}
          </Box>

          {/* Projects Grid */}
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Box
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    padding: 2,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    animation: projectsInView ? `scaleInUp 0.8s ease-out ${0.1 + (index % 3) * 0.1}s both` : 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    border: '2px solid #fa852b3d',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 20px 50px rgba(250, 131, 43, 0.15)',
                    },
                  }}
                >
                  {/* Project Image Container */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      paddingTop: '70%', // 70% aspect ratio
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Placeholder for project image */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
                      />

                    </Box>
                  </Box>

                  {/* Content Container */}
                  <Box
                    sx={{
                      // padding: { xs: '24px', md: '20px' },
                      px: { xs: '0px', md: '0px' },
                      py: { xs: '20px', md: '24px' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      flexGrow: 1,
                    }}
                  >
                    {/* Category Badge and Link Icon Row */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '16px',
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          backgroundColor: '#ff712a1d',
                          color: '#FA832B',
                          padding: '6px 14px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '600',
                          // textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {project.category}
                      </Box>
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '32px',
                            height: '32px',
                            backgroundColor: '#FFF5F0',
                            borderRadius: '50%',
                            color: '#FA832B',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundColor: '#FA832B',
                              color: 'white',
                            },
                          }}
                        >
                          <OpenInNewIcon sx={{ fontSize: '16px' }} />
                        </Box>
                      </Link>
                    </Box>

                    {/* Project Title */}
                    <Typography
                      sx={{
                        fontSize: { xs: '18px', md: '20px' },
                        fontWeight: '700',
                        color: '#000000',
                        marginBottom: '12px',
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </Typography>

                    {/* Project Description */}
                    <Typography
                      sx={{
                        fontSize: { xs: '14px', md: '15px' },
                        color: '#666666',
                        lineHeight: 1.6,
                        fontWeight: '400',
                      }}
                    >
                      {project.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}
