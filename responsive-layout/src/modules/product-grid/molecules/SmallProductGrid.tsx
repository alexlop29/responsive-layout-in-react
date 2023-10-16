import Grid from "@mui/material/Unstable_Grid2";

const ProductGrid = () => {
  return (
    <Grid
      container
      paddingLeft={{ md: "10%" }}
      paddingRight={{ md: "10%" }}
      paddingTop={{ md: "0%" }}
      sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
    >
      <Grid xs={12}>
        <img src="/target_deal.jpg" width={"100%"} />
      </Grid>
    </Grid>
  );
};

export default ProductGrid;
