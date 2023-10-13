import React from 'react'
import { AppBar, Container, Toolbar, Box } from '@mui/material'
import { StyledButton, StyledAppBar } from '../atoms';

const SmallLocationBanner = () => {
  const preferences = ['10454', 'Harlem 117th St'];

  return (
    <StyledAppBar position='fixed' elevation={0} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <Container>
        <Toolbar>
          <Box display="flex" justifyContent="flex-end">
            {preferences.map((preference) => (
              <StyledButton
                key={preference}
              >
                {preference}
              </StyledButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  )
}

export default SmallLocationBanner
