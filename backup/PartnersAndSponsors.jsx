import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const globalPartners = [
    {
        name: "Google Startup",
        url: "https://startup.google.com",
        logo: "/logos/google.png",
    },
    { name: "Brex", url: "https://www.brex.com", logo: "/logos/brex.png" },
    {
        name: "HSBC Innovation Banking",
        url: "https://www.hsbcinnovationbanking.com",
        logo: "/logos/hsbc.png",
    },
    { name: "Deel", url: "https://www.deel.com", logo: "/logos/deel.png" },
    { name: "Mercury", url: "https://mercury.com", logo: "/logos/mercury.png" },
];

const mediaPartners = [
    {
        name: "Startup News",
        url: "https://startupnews.fyi",
        logo: "/logos/google.png",
    },
];

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

function PartnersAndSponsors() {
    const renderPartnerRow = (partners) => (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 3,
                mb: 6,
            }}
        >
            {partners.map((partner, index) => (
                <Link
                    key={index}
                    href={partner.url}
                    target="_blank"
                    sx={{ textDecoration: "none" }}
                >
                    <Box
                        sx={{
                            p: 2,
                            borderRadius: 3,
                            background: "rgba(255,255,255,0.05)",
                            backdropFilter: "blur(10px)",
                            transition: "all 0.3s ease",
                            "&:hover": { transform: "scale(1.05)" },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 160,
                            minHeight: 100,
                        }}
                    >
                        <Box
                            component="img"
                            src={partner.logo}
                            alt={partner.name}
                            sx={{
                                maxWidth: "100%",
                                maxHeight: 80,
                                objectFit: "contain",
                            }}
                        />
                    </Box>
                </Link>
            ))}
        </Box>
    );

    const renderPartnerPlaceholder = (level, key) => (
        <Box key={key} sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                {level} Partners
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                Our {level.toLowerCase()} partners will be revealed soon
            </Typography>
        </Box>
    );

    const renderSocialLinks = (social) =>
        Object.entries(social).map(([key, url]) => {
            const Icon = socialIcons[key];
            return (
                <IconButton
                    key={key}
                    component="a"
                    href={url}
                    target="_blank"
                    sx={{ color: "#fff" }}
                >
                    <Icon />
                </IconButton>
            );
        });

    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 6, md: 8 },
                px: { xs: 3, md: 10 },
                background:
                    "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(section1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                color: "#fff",
                textAlign: "center",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    zIndex: 1,
                }}
            />

            <Box
                sx={{
                    maxWidth: 1200,
                    mx: "auto",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 5 }}>
                    Meet Our Partners
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                    Global Partners
                </Typography>
                {renderPartnerRow(globalPartners)}

                {["Country", "State", "Local"].map((level, idx) =>
                    renderPartnerPlaceholder(level, idx)
                )}

                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                    Media Partners
                </Typography>
                {renderPartnerRow(mediaPartners)}

                <Box
                    sx={{
                        mt: 6,
                        py: 4,
                        borderTop: "1px solid rgba(255,255,255,0.2)",
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Want to partner with Techstars Startup Weekend Dhamtari?
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{ color: "rgba(255,255,255,0.7)" }}
                    >
                        Write to us at{" "}
                        <Link
                            href="mailto:meer@vikaasgarh.com"
                            color="secondary.main"
                            underline="hover"
                        >
                            meer@vikaasgarh.com
                        </Link>
                    </Typography>
                </Box>

                <Box sx={{ mt: 10 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 6 }}>
                        Meet Our Sponsors
                    </Typography>

                    <Box
                        sx={{
                            p: { xs: 4, md: 6 },
                            borderRadius: 4,
                            background: "rgba(255,255,255,0.05)",
                            backdropFilter: "blur(15px)",
                            mb: 8,
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-5px) scale(1.02)",
                            },
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 700, mb: 2 }}
                        >
                            {titleSponsor.name}
                        </Typography>
                        <Typography
                            sx={{
                                mb: 3,
                                lineHeight: 1.6,
                                color: "rgba(255,255,255,0.8)",
                            }}
                        >
                            {titleSponsor.description}
                        </Typography>
                        <Link
                            href={titleSponsor.website}
                            target="_blank"
                            underline="hover"
                            sx={{
                                display: "block",
                                mb: 2,
                                color: "secondary.main",
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
                            borderTop: "1px solid rgba(255,255,255,0.2)",
                        }}
                    >
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Want to sponsor Techstars Startup Weekend Dhamtari?
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ color: "rgba(255,255,255,0.7)" }}
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
        </Box>
    );
}

export default PartnersAndSponsors;
