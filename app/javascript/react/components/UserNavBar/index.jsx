import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function UserNavBar(props) {
  const { logout } = useContext(AuthContext);

  return (
    <Grid display="flex">
      <AppBar position="relative">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" color="inherit">
            Mini Project
          </Typography>
          <Button
            position="right"
            variant="h6"
            color="inherit"
            onClick={logout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default UserNavBar;
