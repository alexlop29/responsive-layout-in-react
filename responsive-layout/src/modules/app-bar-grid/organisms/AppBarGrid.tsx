import Grid from "@mui/material/Unstable_Grid2";
import { Button, Box, IconButton, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AppBarGrid = () => {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      direction={"row"}
      justifyContent="space-evenly"
    >
      <Grid xs={3}>
        <Box>
          <IconButton>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
      </Grid>
      <Grid xs={3}>
        <Button> Logo Placeholder</Button>
      </Grid>
      <Grid xs={3}>
        <AccountCircleIcon />
      </Grid>
      <Grid xs={3}>
        <ShoppingCartIcon />
      </Grid>
      <Grid xs={12}>
        <TextField label={"What can we help you find?"} size="medium" />
      </Grid>
    </Grid>
  );
};

export default AppBarGrid;
