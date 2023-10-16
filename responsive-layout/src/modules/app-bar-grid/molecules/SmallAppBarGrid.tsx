import Grid from "@mui/material/Unstable_Grid2";
import { Button, IconButton, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { StyledGridItem } from "../atoms/StyledGridItem";
import { StyledButton } from "../atoms";

const SmallAppBarGrid = () => {
  return (
    <Grid
      container
      alignItems="center"
      direction={"row"}
      padding={"2%"}
      sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
    >
      <Grid xs={1}>
        <IconButton>
          <MenuIcon fontSize="large" />
        </IconButton>
      </Grid>
      <StyledGridItem xs={9}>
        <Button>
          <img src="/TargetLogo.jpg" height={"38px"} />
        </Button>
      </StyledGridItem>
      <Grid xs={1}>
        <StyledButton>
          <AccountCircleIcon />
        </StyledButton>
      </Grid>
      <Grid xs={1}>
        <StyledButton>
          <ShoppingCartIcon />
        </StyledButton>
      </Grid>
      <Grid xs={12}>
        <TextField
          label={"What can we help you find?"}
          size="small"
          fullWidth
          variant="filled"
        />
      </Grid>
    </Grid>
  );
};

export default SmallAppBarGrid;
