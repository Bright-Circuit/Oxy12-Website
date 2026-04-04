'use client'

import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Link from 'next/link'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact Us', href: '/contact' },
  ]
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawerContent = (
    <Box sx={{ width: 250 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '10px 15px',
        }}
      >
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{
                color: '#000',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                  color: 'primary.main',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  '& .MuiTypography-root': {
                    fontWeight: 500,
                    fontSize: '16px',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ padding: '10px 15px', marginTop: '10px' }}>
          <Button
            component={Link}
            href="/contact"
            fullWidth
            sx={{
              color: '#ffffff',
              backgroundColor: 'primary.main',
              borderRadius: '10px',
              padding: '10px 20px',
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#e56a2e',
              },
            }}
          >
            Start a Project
          </Button>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="relative"
        sx={{
          backgroundColor: '#ffffff',
          boxShadow: 'none',
          padding: '10px 0',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 20px',
            }}
          >
            {/* Logo */}
            <Box>
              <img src="/images/logo/logo.png" alt="OXY12 Logo" style={{ height: '50px' }} />
            </Box>

            {/* Navigation Items - Desktop Only */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                gap: '10px',
                flex: 1,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: '#000',
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 500,
                    position: 'relative',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-5px',
                      left: 0,
                      width: '0%',
                      height: '2px',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Desktop Button */}
            <Button
              component={Link}
              href="/contact"
              sx={{
                display: { xs: 'none', md: 'block' },
                color: '#ffffff',
                backgroundColor: 'primary.main',
                borderRadius: '10px',
                padding: '10px 30px',
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 500,
                position: 'relative',
                '&:hover': {
                  backgroundColor: '#e56a2e',
                },
              }}
            >
              Start a Project
            </Button>

            {/* Mobile Hamburger Menu - Mobile Only */}
            <IconButton
              sx={{ display: { xs: 'block', md: 'none' }, color: '#000' }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon sx={{ fontSize: '28px', color: 'primary.main' }} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  )
}
