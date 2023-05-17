import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Beasiswa
          </Typography>
          <Button
            color="inherit"
            onClick={() => navigate("/")}
            style={{ marginRight: "20px" }}
          >
            Pilihan
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate("/daftar")}
            style={{ marginRight: "20px" }}
          >
            Daftar
          </Button>
          <Button color="inherit" onClick={() => navigate("/hasil")}>
            Hasil
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
