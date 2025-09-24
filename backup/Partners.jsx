import React from "react";
import { Box, Typography, Link } from "@mui/material";

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

function Partners() {
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
                color: "#fff",
                textAlign: "center",
            }}
        >
            <Box sx={{ maxWidth: 1200, mx: "auto" }}>
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
            </Box>
        </Box>
    );
}

export default Partners;
