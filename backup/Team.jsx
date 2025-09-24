import React from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const iconMap = {
    linkedin: LinkedInIcon,
    instagram: InstagramIcon,
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    youtube: YouTubeIcon,
};

const teamMembers = [
    {
        name: "Mr. Meraj Meer",
        roles: [
            "Lead Organizer, Techstars Startup Weekend Dhamtari",
            "Founder & Chief Executive Officer, VikaasGarh",
        ],
        description:
            "Mr. Meer leads the organization of Startup Weekend Dhamtari and drives innovation through VikaasGarh’s ecosystem.",
        social: {
            linkedin: "#",
            instagram: "#",
            facebook: "#",
            twitter: "#",
            youtube: "#",
        },
    },
    {
        name: "Ms. Saniya Sheikh",
        roles: [
            "Co-Lead Organizer & Lead – Financials, Techstars Startup Weekend Dhamtari",
            "Co-Founder & Chief Operating Officer, VikaasGarh",
        ],
        description:
            "Ms. Sheikh manages financial operations and co-organizes Startup Weekend Dhamtari, ensuring smooth execution.",
        social: {
            linkedin: "#",
            instagram: "#",
            facebook: "#",
            twitter: "#",
            youtube: "#",
        },
    },
];

function Team() {
    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 10, md: 12 },
                px: { xs: 5, md: 10 },
                background:
                    "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(section1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#fff",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: 1200,
                    mx: "auto",
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 6 }}>
                    Meet Our Team
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 4,
                    }}
                >
                    {teamMembers.map((member, index) => (
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
                                color: "#fff",
                                textAlign: "center",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-5px) scale(1.03)",
                                    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                                    background: "rgba(255,255,255,0.1)",
                                },
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: 80,
                                    height: 80,
                                    mb: 2,
                                    mx: "auto",
                                    bgcolor: "primary.main",
                                    fontSize: "1.5rem",
                                }}
                            >
                                {member.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .toUpperCase()}
                            </Avatar>

                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, mb: 1 }}
                            >
                                {member.name}
                            </Typography>

                            {member.roles.map((role, i) => (
                                <Typography
                                    key={i}
                                    variant="subtitle2"
                                    sx={{
                                        mb: 1,
                                        color: "rgba(255,255,255,0.7)",
                                    }}
                                >
                                    {role}
                                </Typography>
                            ))}

                            <Typography
                                sx={{
                                    mb: 2,
                                    lineHeight: 1.6,
                                    fontSize: "0.95rem",
                                }}
                            >
                                {member.description}
                            </Typography>

                            <Box>
                                {Object.entries(member.social).map(
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
            </Box>
        </Box>
    );
}

export default Team;
