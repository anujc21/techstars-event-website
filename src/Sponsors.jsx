import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const titleSponsor = {
    name: "District Administration Dhamtari, Government of Chhattisgarh",
    description:
        "Supporting innovation and entrepreneurship in Dhamtari by sponsoring Techstars Startup Weekend.",
    website: "https://dhamtari.gov.in",
    social: {
        instagram: "https://instagram.com/dhamtari",
        twitter: "https://x.com/dhamtari",
    },
};

const socialIcons = {
    instagram: InstagramIcon,
    twitter: TwitterIcon,
};

function Sponsors() {
    const renderSocialLinks = (social) =>
        Object.entries(social).map(([key, url]) => {
            const Icon = socialIcons[key];
            return (
                <IconButton
                    key={key}
                    component="a"
                    href={url}
                    target="_blank"
                    sx={{ color: "#429541" }}
                >
                    <Icon />
                </IconButton>
            );
        });

    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 6, md: 10 },
                px: { xs: 3, md: 10 },
                background: "rgba(0, 255, 0, 0.1)",
                color: "#000",
                textAlign: "center",
                position: "relative",
            }}
        >
            <Box sx={{ maxWidth: 1000, mx: "auto" }}>
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, mb: 6, color: "#000" }}
                >
                    Meet Our Sponsors
                </Typography>

                <Box
                    sx={{
                        p: { xs: 4, md: 6 },
                        borderRadius: 4,
                        background: "#fff",
                        border: "2px solid #66cc66",
                        boxShadow: "0 0 0 4px rgba(102, 204, 102, 0.15)",
                        mb: 8,
                        transition: "all 0.3s ease",
                        "&:hover": {
                            transform: "translateY(-5px) scale(1.05)",
                            boxShadow: "0 0 0 6px rgba(102, 204, 102, 0.3)",
                        },
                        textAlign: "center",
                        color: "#000",
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                        {titleSponsor.name}
                    </Typography>
                    <Typography sx={{ mb: 3, lineHeight: 1.6, color: "#000" }}>
                        {titleSponsor.description}
                    </Typography>
                    <Link
                        href={titleSponsor.website}
                        target="_blank"
                        underline="hover"
                        sx={{
                            display: "block",
                            mb: 2,
                            color: "#429541",
                            fontWeight: 500,
                        }}
                    >
                        Visit Website
                    </Link>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 1,
                        }}
                    >
                        {renderSocialLinks(titleSponsor.social)}
                    </Box>
                </Box>

                <Box
                    sx={{
                        mt: 6,
                        py: 4,
                        borderTop: "1px solid rgba(0,0,0,0.1)",
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 2, color: "#000" }}>
                        Want to sponsor Techstars Startup Weekend Dhamtari?
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{ color: "rgba(0,0,0,0.7)" }}
                    >
                        Write to us at{" "}
                        <Link
                            href="mailto:meer@vikaasgarh.com"
                            color="secondary.main"
                            underline="hover"
                        >
                            meer@vikaasgarh.com
                        </Link>{" "}
                        or refer to the official sponsorship deck.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Sponsors;
