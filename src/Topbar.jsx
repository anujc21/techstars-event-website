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

    const handleScrollToRegistration = () => {
        const registrationSection = document.getElementById(
            "registration-section"
        );
        if (registrationSection) {
            registrationSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navLinks = ["About", "Contact"];

    return (
        <AppBar
            position="fixed"
            sx={{
                background: "rgba(33, 33, 33, 0.08)",
                backdropFilter: "blur(5px)",
                boxShadow: 0,
                borderBottom: "rgba(33, 33, 33, 0.8)",
            }}
        >
            <Toolbar
                sx={{
                    height: {
                        md: 70,
                    },
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 0,
                    px: { xs: 2, sm: 3, md: 3 },
                    py: { xs: 1, md: 0 },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 0.5, sm: 1 },
                        flexWrap: "wrap",
                        justifyContent: { xs: "center", md: "flex-start" },
                        width: { xs: "100%", md: "auto" },
                    }}
                >
                    <Box
                        component="img"
                        src="logos/govtLogo.png"
                        alt="Main Logo"
                        sx={{
                            background: "#fff",
                            height: { xs: 40, md: 50 },
                            width: { xs: 40, md: 50 },
                            objectFit: "contain",
                            borderRadius: "50%",
                            boxShadow: 5,
                            cursor: "pointer",
                        }}
                    />
                    <Box
                        component="img"
                        src="logos/techstarsLogo.png"
                        alt="Techstars Logo"
                        sx={{
                            background: "#fff",
                            p: 0.5,
                            height: { xs: 30, md: 40 },
                            width: { xs: 80, md: 120 },
                            objectFit: "contain",
                            borderRadius: 5,
                            boxShadow: 5,
                            cursor: "pointer",
                        }}
                    />
                    <Box
                        component="img"
                        src="logos/mainLogo.png"
                        alt="Main Logo"
                        sx={{
                            height: { xs: 30, md: 40 },
                            width: { xs: 80, md: 120 },
                            objectFit: "cover",
                            borderRadius: 5,
                            boxShadow: 5,
                            cursor: "pointer",
                        }}
                    />
                </Box>

                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 500,
                        color: "#333",
                        background: "rgba(255, 255, 255, 0.8)",
                        px: 2,
                        py: 0.5,
                        borderRadius: "20px 0 20px 0",
                        display: { xs: "none", md: "block" },
                    }}
                >
                    3rd November, 2025
                </Typography>

                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    {navLinks.map((link) => (
                        <Typography
                            key={link}
                            variant="body1"
                            sx={{
                                cursor: "pointer",
                                "&:hover": { color: "#ccc" },
                                background: "rgba(33, 33, 33, 0.2)",
                                borderRadius: 5,
                                px: 1.5,
                                py: 0.5,
                            }}
                        >
                            {link}
                        </Typography>
                    ))}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleScrollToRegistration}
                        sx={{
                            textTransform: "none",
                            borderRadius: 5,
                            color: "#fff",
                        }}
                    >
                        Register
                    </Button>
                </Box>

                <Box
                    sx={{
                        display: { xs: "flex", md: "none" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        mt: 1,
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleScrollToRegistration}
                        sx={{
                            textTransform: "none",
                            borderRadius: 5,
                            color: "#fff",
                        }}
                    >
                        Register
                    </Button>

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
            </Toolbar>
        </AppBar>
    );
}

export default Topbar;
