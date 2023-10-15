import Grid from "@mui/material/Unstable_Grid2";
import { StyledGrid, StyledButton } from "../atoms";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";

const LocationBannerGrid = () => {
  return (
    <StyledGrid container alignItems="center" paddingLeft={"2%"}>
      <Grid xs={2} lg={1}>
        <StyledButton>
          <LocationOnIcon fontSize="small" style={{ marginRight: "4px" }} />
          10454
        </StyledButton>
      </Grid>
      <Grid xs={2} lg={1}>
        <StyledButton style={{ textTransform: "none" }}>
          <BusinessIcon fontSize="small" style={{ marginRight: "4px" }} />
          Harlem 117th St
        </StyledButton>
      </Grid>
      <Grid xs={8} lg={5}></Grid>
      <Grid lg={1} sx={{ display: { xs: "none", lg: "flex" } }}>
        <StyledButton style={{ textTransform: "none" }}>Registry</StyledButton>
      </Grid>
      <Grid lg={1} sx={{ display: { xs: "none", lg: "flex" } }}>
        <StyledButton style={{ textTransform: "none" }}>Weekly Ad</StyledButton>
      </Grid>
      <Grid lg={1} sx={{ display: { xs: "none", lg: "flex" } }}>
        <StyledButton style={{ textTransform: "none" }}>RedCard</StyledButton>
      </Grid>
      <Grid lg={1} sx={{ display: { xs: "none", lg: "flex" } }}>
        <StyledButton style={{ textTransform: "none" }}>
          Target Circle
        </StyledButton>
      </Grid>
      <Grid lg={1} sx={{ display: { xs: "none", lg: "flex" } }}>
        <StyledButton style={{ textTransform: "none" }}>
          Find Stores
        </StyledButton>
      </Grid>
    </StyledGrid>
  );
};

export default LocationBannerGrid;
