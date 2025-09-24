import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

const iconMap = {
    linkedin: LinkedInIcon,
    instagram: InstagramIcon,
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    whatsapp: WhatsAppIcon,
    youtube: YouTubeIcon,
};

const contacts = [
    {
        name: "Techstars Startup Weekend Dhamtari",
        social: {
            linkedin: "https://www.linkedin.com/company/swdhamtari/",
            instagram: "https://www.instagram.com/swdhamtari/",
            twitter: "https://x.com/swdhamtari",
            facebook:
                "https://www.facebook.com/people/Techstars-Startup-Weekend-Dhamtari/61579267094881/",
            whatsapp: "https://chat.whatsapp.com/HBBhkwgDIht6nUmQYBxyzY",
        },
    },
    {
        name: "VikaasGarh",
        social: {
            linkedin: "https://www.linkedin.com/company/vikaasgarh",
            instagram: "https://www.instagram.com/vikaasgarh.official",
            youtube: "https://www.youtube.com/@VikaasGarh.official",
            twitter: "https://x.com/vikaasgarh",
        },
    },
];

function Contact() {
    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 10, md: 10 },
                px: { xs: 5, md: 10 },
                background: "url(section.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                color: "#fff",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
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
                    position: "relative",
                    zIndex: 2,
                    maxWidth: 1200,
                    mx: "auto",
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 6 }}>
                    Contact Us
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 4,
                    }}
                >
                    {contacts.map((contact, index) => (
                        <Box
                            key={index}
                            sx={{
                                flex: "1 1 280px",
                                maxWidth: 320,
                                p: 4,
                                borderRadius: 5,
                                background: "rgba(255,255,255,0.05)",
                                backdropFilter: "blur(15px)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                textAlign: "center",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-5px) scale(1.03)",
                                    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                                    background: "rgba(255,255,255,0.1)",
                                },
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, mb: 2 }}
                            >
                                {contact.name}
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                    gap: 1,
                                }}
                            >
                                {Object.entries(contact.social).map(
                                    ([key, url]) => {
                                        const Icon = iconMap[key];
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
                                    }
                                )}
                            </Box>
                        </Box>
                    ))}
                </Box>

                <Box
                    sx={{
                        mt: 8,
                        py: 4,
                        borderTop: "1px solid rgba(255,255,255,0.2)",
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        General Enquiries
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 3 }}>
                        connect@vikaasgarh.com
                    </Typography>

                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Partnerships & Collaborations
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                        meer@vikaasgarh.com
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;
