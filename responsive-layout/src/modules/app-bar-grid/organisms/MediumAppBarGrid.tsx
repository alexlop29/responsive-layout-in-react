import { Grid, IconButton, Button, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { StyledButton } from "../atoms";

const MediumAppBarGrid = () => {
  return (
    <Grid
      container
      alignItems="center"
      direction={"row"}
      padding={"2%"}
      sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
    >
      <Grid md={1}>
        <Button>
          <img src="/TargetLogo.jpg" height={"38px"} />
        </Button>
      </Grid>
      <Grid md={1}>
        <IconButton>
          <MenuIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid md={6}>
        <TextField
          label={"What can we help you find?"}
          size="small"
          fullWidth
          variant="filled"
        />
      </Grid>
      <Grid xs={3} alignItems="center" justifyContent="center" direction={"row"} 
      paddingLeft={"10%"}>
        <StyledButton>
          <AccountCircleIcon />
          Sign In
        </StyledButton>
      </Grid>
      <Grid xs={1}>
        <StyledButton>
          <ShoppingCartIcon />
        </StyledButton>
      </Grid>
    </Grid>
  );
};

export default MediumAppBarGrid;
