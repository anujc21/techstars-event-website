import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                background: "#0a0a0a",
                color: "#fff",
                py: { xs: 6, md: 8 },
                px: { xs: 3, md: 10 },
            }}
        >
            <Box
                sx={{
                    maxWidth: 1200,
                    mx: "auto",
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                    gap: 4,
                    textAlign: { xs: "center", sm: "left" },
                    mb: 6,
                }}
            >
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        About
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        <Link href="#" underline="hover" color="inherit">
                            Our Story
                        </Link>
                        <Link href="#" underline="hover" color="inherit">
                            Team
                        </Link>
                        <Link href="#" underline="hover" color="inherit">
                            Contact
                        </Link>
                    </Box>
                </Box>

                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        Resources
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        <Link href="#" underline="hover" color="inherit">
                            FAQ
                        </Link>
                        <Link href="#" underline="hover" color="inherit">
                            Blog
                        </Link>
                        <Link href="#" underline="hover" color="inherit">
                            Events
                        </Link>
                    </Box>
                </Box>

                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        Community
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        <Link href="#" underline="hover" color="inherit">
                            Join Us
                        </Link>
                        <Link href="#" underline="hover" color="inherit">
                            Mentorship
                        </Link>
                        <Link href="#" underline="hover" color="inherit">
                            Partners
                        </Link>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    pt: 4,
                    borderTop: "1px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                    textAlign: { xs: "center", sm: "left" },
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                        component="img"
                        src="logos/secondaryLogo.png"
                        alt="Footer Logo"
                        sx={{
                            height: 40,
                            width: 100,
                            objectFit: "cover",
                            borderRadius: 5,
                        }}
                    />
                    <Typography
                        variant="body2"
                        sx={{ color: "rgba(255,255,255,0.7)" }}
                    >
                        © {new Date().getFullYear()} Techstars Startup Weekend
                        Dhamtari. All rights reserved.
                    </Typography>
                </Box>

                <Box>
                    <IconButton
                        component="a"
                        href="https://twitter.com/"
                        target="_blank"
                        sx={{ color: "#fff" }}
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://instagram.com/"
                        target="_blank"
                        sx={{ color: "#fff" }}
                    >
                        <InstagramIcon />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://linkedin.com/"
                        target="_blank"
                        sx={{ color: "#fff" }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://github.com/"
                        target="_blank"
                        sx={{ color: "#fff" }}
                    >
                        <GitHubIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
