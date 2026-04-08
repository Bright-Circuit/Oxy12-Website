'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import {
  Phone,
  Email,
  Public,
  Send,
} from '@mui/icons-material';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
    <Box
      sx={{
        backgroundColor: '#ffffff',
        padding: { xs: '60px 15px', sm: '100px 20px', md: '20px 20px' },
        minHeight: { xs: '500px', sm: '700px', md: '750px' },
        pt: { xs: '150px', sm: '80px', md: '100px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* "Connect With Us" Label */}
          <Typography
            sx={{
              fontSize: { xs: '16px', md: '18px' },
              fontWeight: 600,
              color: 'primary.main',
              marginBottom: { xs: '20px', md: '30px' },
              letterSpacing: '0.5px',
              // textTransform: 'uppercase',
            }}
          >
            Connect With Us
          </Typography>

          {/* Main Heading - Part 1 */}
          <Typography
            sx={{
              fontSize: { xs: '36px', sm: '62px', md: '75px', lg: '75px' },
              fontWeight: 700,
              color: '#000000',
              lineHeight: 1.2,
            }}
          >
            Let's Build <br></br> Something
          </Typography>

          {/* Main Heading - Part 2 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'column' },
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: { xs: '30px', md: '40px' },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '36px', sm: '50px', md: '72px' },
                fontWeight: 700,
                color: 'primary.main',
                lineHeight: 1.2,
              }}
            >
              Extraordinary
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '36px', sm: '50px', md: '72px' },
                fontWeight: 700,
                color: '#000000',
                lineHeight: 1.1,
              }}
            >
              Together
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px', md: '18px' },
              color: '#333333',
              lineHeight: 1.8,
              maxWidth: { xs: '100%', sm: '600px', md: '750px' },
              fontWeight: 400,
            }}
          >
            We believe in curation over automation. Share your vision and let's
            craft a digital experience that moves at the speed of your ambition.
          </Typography>
        </Box>
      </Container>
    </Box>

      {/* Contact Form & Details Section */}
      <Box
        sx={{
          backgroundColor: '#ffffff',
          padding: { xs: '20px 15px', sm: '20px 20px', md: '50px 20px' },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems="flex-start"
          >
            {/* Left - Inquiry Form */}
            <Grid item xs={12} md={6}>
              <Box sx={{bgcolor: '#fff',
                boxShadow: '0 12px 40px rgba(30, 34, 42, 0.08)',
                borderRadius: '16px',
                padding: { xs: '40px 30px', md: '50px' },
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography
                  sx={{
                    fontSize: { xs: '28px', md: '36px' },
                    fontWeight: 700,
                    color: '#000000',
                    marginBottom: '40px',
                  }}
                >
                  Inquiry Form
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Name Field */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#000000',
                        marginBottom: '8px',
                      }}
                    >
                      Name
                    </Typography>
                    <TextField
                      fullWidth
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      placeholder="Your Name"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                          backgroundColor: '#F5F5F5',
                          height: '50px',
                          '& fieldset': {
                            border: 'none',
                          },
                          '&:hover fieldset': {
                            border: 'none',
                          },
                          '&.Mui-focused fieldset': {
                            border: 'none',
                          },
                        },
                        '& .MuiOutlinedInput-input::placeholder': {
                          color: '#999999',
                          opacity: 1,
                        },
                      }}
                    />
                  </Box>

                  {/* Email Field */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#000000',
                        marginBottom: '8px',
                      }}
                    >
                      Email Address
                    </Typography>
                    <TextField
                      fullWidth
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      placeholder="Your Email"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                          backgroundColor: '#F5F5F5',
                          height: '50px',
                          '& fieldset': {
                            border: 'none',
                          },
                          '&:hover fieldset': {
                            border: 'none',
                          },
                          '&.Mui-focused fieldset': {
                            border: 'none',
                          },
                        },
                        '& .MuiOutlinedInput-input::placeholder': {
                          color: '#999999',
                          opacity: 1,
                        },
                      }}
                    />
                  </Box>

                  {/* Message Field */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#000000',
                        marginBottom: '8px',
                      }}
                    >
                      Message
                    </Typography>
                    <TextField
                      fullWidth
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                      placeholder="Your Message"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                          backgroundColor: '#F5F5F5',
                          '& fieldset': {
                            border: 'none',
                          },
                          '&:hover fieldset': {
                            border: 'none',
                          },
                          '&.Mui-focused fieldset': {
                            border: 'none',
                          },
                        },
                        '& .MuiOutlinedInput-input::placeholder': {
                          color: '#999999',
                          opacity: 1,
                        },
                      }}
                    />
                  </Box>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: { xs: '100%', sm: '220px' },
                      padding: '12px 32px',
                      fontSize: '16px',
                      fontWeight: 600,
                      backgroundColor: 'primary.main',
                      color: 'white',
                      borderRadius: '10px',
                      textTransform: 'none',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 16px rgba(255, 122, 61, 0.3)',
                      },
                    }}
                  >
                    {submitted ? 'Message Sent!' : 'Send Message'}
                    <Send sx={{ fontSize: '18px' }} />
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Right - Contact Details */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: 'secondary.main',
                  borderRadius: '16px',
                  padding: { xs: '40px 30px', md: '50px' },
                  minHeight: { xs: 'auto', md: '500px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '28px', md: '32px' },
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: { xs: '40px', md: '60px' },
                  }}
                >
                  Reach out Directly
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '30px', md: '40px' } }}>
                  {/* Phone */}
                  <Box sx={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Phone sx={{ fontSize: '28px', color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: 600,
                          color: '#ffffff',
                          marginBottom: '4px',
                        }}
                      >
                        Phone
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '16px',
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontWeight: 400,
                        }}
                      >
                        071 195 0429
                      </Typography>
                    </Box>
                  </Box>

                  {/* Email */}
                  <Box sx={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Email sx={{ fontSize: '28px', color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: 600,
                          color: '#ffffff',
                          marginBottom: '4px',
                        }}
                      >
                        Email Address
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '16px',
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontWeight: 400,
                          wordBreak: 'break-all',
                        }}
                      >
                        oxy2welve@gmail.com
                      </Typography>
                    </Box>
                  </Box>

                  {/* Website */}
                  <Box sx={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Public sx={{ fontSize: '28px', color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: 600,
                          color: '#ffffff',
                          marginBottom: '4px',
                        }}
                      >
                        Website
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '16px',
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontWeight: 400,
                        }}
                      >
                        www.oxy12.com
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
