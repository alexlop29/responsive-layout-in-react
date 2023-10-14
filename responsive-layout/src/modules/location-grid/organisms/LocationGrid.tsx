import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Button } from "@mui/material";
import { StyledGrid, StyledButton } from "../atoms";

const LocationGrid = () => {
  return (
    <StyledGrid container spacing={2}>
      <Grid xs={3} lg={1}>
        <StyledButton>10454</StyledButton>
      </Grid>
      <Grid xs={3} lg={1}>
        <StyledButton>Harlem 117th St</StyledButton>
      </Grid>
      <Grid xs={6} lg={5}></Grid>
      <Grid lg={1} sx={{ display: { xs: 'none', lg: 'flex' }}}>
        <StyledButton>Registry</StyledButton>
      </Grid>
      <Grid lg={1} sx={{ display: { xs: 'none', lg: 'flex' }}}>
        <StyledButton>Weekly Ad</StyledButton>
      </Grid>
      <Grid lg={1} sx={{ display: { xs: 'none', lg: 'flex' }}}>
        <StyledButton>RedCard</StyledButton>
      </Grid>
      <Grid lg={1} sx={{ display: { xs: 'none', lg: 'flex' }}}>
        <StyledButton>Target Circle</StyledButton>
      </Grid>
      <Grid lg={1} sx={{ display: { xs: 'none', lg: 'flex' }}}>
        <StyledButton>Find Stores</StyledButton>
      </Grid>
    </StyledGrid>
  );
};

export default LocationGrid;
