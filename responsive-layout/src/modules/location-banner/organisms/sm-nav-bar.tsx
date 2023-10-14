import React from "react";
import { Container, Box } from "@mui/material";
import { StyledButton, StyledAppBar, StyledBox } from "../atoms";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";

const SmallLocationBanner = () => {
  const preferences = ["10454", "Harlem 117th St"];

  return (
    <Container>
      <StyledAppBar
        elevation={0}
        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
      >
        <Box>
          <StyledButton key={preferences[0]}>
            <LocationOnIcon />
            {preferences[0]}
          </StyledButton>
          <StyledButton key={preferences[1]}>
            <BusinessIcon />
            <div> </div>
            {preferences[1]}
          </StyledButton>
        </Box>
      </StyledAppBar>
    </Container>
  );
};

export default SmallLocationBanner;
