import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Topbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const navLinks = ["About", "Team", "Sponsors", "Contact"];

    return (
        <AppBar
            position="absolute"
            sx={{
                background: "rgba(0, 0, 0, 0)",
                boxShadow: 0,
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box
                    component="img"
                    src="logos/secondaryLogo.png"
                    alt="Main Logo"
                    sx={{
                        height: 40,
                        width: 120,
                        objectFit: "cover",
                        borderRadius: 5,
                        boxShadow: 5,
                        cursor: "pointer",
                    }}
                />

                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        gap: 4,
                        flexGrow: 1,
                        justifyContent: "center",
                    }}
                >
                    {navLinks.map((link) => (
                        <Typography
                            key={link}
                            variant="body1"
                            sx={{
                                cursor: "pointer",
                                "&:hover": { color: "#ccc" },
                            }}
                        >
                            {link}
                        </Typography>
                    ))}
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Button
                        variant="contained"
                        sx={{
                            textTransform: "none",
                            borderRadius: 5,
                            background:
                                "linear-gradient(45deg, #6a11cb, #2575fc)",
                            "&:hover": {
                                background:
                                    "linear-gradient(45deg, #2575fc, #6a11cb)",
                            },
                        }}
                    >
                        Register
                    </Button>

                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            {navLinks.map((link) => (
                                <MenuItem key={link} onClick={handleMenuClose}>
                                    {link}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Topbar;
