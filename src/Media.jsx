import React from "react";
import { Box, Typography, Link } from "@mui/material";

const mediaItems = [
    {
        title: "Startup Weekend Dhamtari Kicks Off",
        description:
            "Local startups and entrepreneurs gather to innovate and collaborate at Techstars Startup Weekend Dhamtari.",
        url: "https://example.com/article1",
    },
    {
        title: "Techstars Dhamtari: Success Stories",
        description:
            "Highlights from the winning teams and innovative ideas presented during the weekend.",
        url: "https://example.com/article2",
    },
    {
        title: "Community Engagement and Mentorship",
        description:
            "Learn how mentors and local organizations supported the event to foster entrepreneurship.",
        url: "https://example.com/article3",
    },
];

function Media() {
    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 6, md: 10 },
                px: { xs: 3, md: 10 },
                background: "#fff",
                color: "#000",
                textAlign: "center",
                position: "relative",
            }}
        >
            <Box sx={{ maxWidth: 1200, mx: "auto" }}>
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, mb: 3, color: "#000" }}
                >
                    Media
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{ mb: 6, color: "rgba(0,0,0,0.7)" }}
                >
                    Catch the latest news, updates, and coverage of Techstars
                    Startup Weekend Dhamtari.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 5,
                    }}
                >
                    <Box
                        sx={{
                            width: 500,
                            height: {
                                xs: 300,
                                sm: 500,
                            },
                            alignSelf: "center",
                            background: "url(media.svg)",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: 4,
                        }}
                    >
                        {mediaItems.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    flex: "1 1 300px",
                                    maxWidth: 350,
                                    p: 4,
                                    borderRadius: 4,
                                    background: "#fff",
                                    border: "2px solid #66cc66",
                                    boxShadow:
                                        "0 0 0 4px rgba(102, 204, 102, 0.15)",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform:
                                            "translateY(-5px) scale(1.05)",
                                        boxShadow:
                                            "0 0 0 6px rgba(102, 204, 102, 0.3)",
                                    },
                                    textAlign: "left",
                                    color: "#000",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, mb: 1 }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography sx={{ mb: 2, lineHeight: 1.6 }}>
                                    {item.description}
                                </Typography>
                                <Link
                                    href={item.url}
                                    target="_blank"
                                    underline="hover"
                                    sx={{ color: "#429541", fontWeight: 500 }}
                                >
                                    Read More
                                </Link>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Media;
