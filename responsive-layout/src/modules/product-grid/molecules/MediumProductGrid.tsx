import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

const MediumProductGrid = () => {
  return (
    <Grid
      container
      paddingLeft={{ md: "10%" }}
      paddingRight={{ md: "10%" }}
      paddingTop={{ md: "0%" }}
      sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
    >
      <Grid md={12}>
        <img src="/medium_target_deal.jpeg" width={"100%"} height={"200px"} />
      </Grid>
    </Grid>
  );
};

export default MediumProductGrid;
