import Grid from "@mui/material/Unstable_Grid2";
import { StyledGrid, StyledButton } from "../atoms";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";

const LocationBannerGrid = () => {
  return (
    <StyledGrid container alignItems="center" paddingLeft={"2%"}>
      <Grid xs={2} md={1}>
        <StyledButton>
          <LocationOnIcon fontSize="small" style={{ marginRight: "4px" }} />
          10454
        </StyledButton>
      </Grid>
      <Grid xs={2} md={1}>
        <StyledButton style={{ textTransform: "none" }}>
          <BusinessIcon fontSize="small" style={{ marginRight: "4px" }} />
          Harlem 117th St
        </StyledButton>
      </Grid>
      <Grid xs={8} md={5}></Grid>
      <Grid md={1} sx={{ display: { xs: "none", md: "flex" } }}>
        <StyledButton style={{ textTransform: "none" }}>Registry</StyledButton>
      </Grid>
      <Grid md={1} sx={{ display: { xs: "none", md: "flex" } }}>
        <StyledButton style={{ textTransform: "none" }}>Weekly Ad</StyledButton>
      </Grid>
      <Grid md={1} sx={{ display: { xs: "none", md: "flex" } }}>
        <StyledButton style={{ textTransform: "none" }}>RedCard</StyledButton>
      </Grid>
      <Grid md={1} sx={{ display: { xs: "none", md: "flex" } }}>
        <StyledButton style={{ textTransform: "none" }}>
          Target Circle
        </StyledButton>
      </Grid>
      <Grid md={1} sx={{ display: { xs: "none", md: "flex" } }}>
        <StyledButton style={{ textTransform: "none" }}>
          Find Stores
        </StyledButton>
      </Grid>
    </StyledGrid>
  );
};

export default LocationBannerGrid;
