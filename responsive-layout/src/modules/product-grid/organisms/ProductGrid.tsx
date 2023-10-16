import Grid from "@mui/material/Unstable_Grid2";

const ProductGrid = () => {
  return (
    <Grid
      container
      paddingLeft={{ md: "10%" }}
      paddingRight={{ md: "10%" }}
      paddingTop={{ md: "0%" }}
    >
      <Grid xs={12}>
        <img 
          src="/target_deal.jpg"
        />
      </Grid>
    </Grid>
  );
};

export default ProductGrid;
