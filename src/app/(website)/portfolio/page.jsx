'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material'

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
  const worksRef = useRef(null)
  const servicesRef = useRef(null)

  // Check if sections are in view
  const worksInView = useInView(worksRef)
  const servicesInView = useInView(servicesRef)

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
    </>
  )
}
