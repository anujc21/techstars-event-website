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
                background: "rgba(0, 255, 0, 0.1)",
                color: "#000",
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
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 8 }}>
                    Meet Our Team
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 10,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: 5,
                        }}
                    >
                        {teamMembers.map((member, index) => (
                            <Box
                                key={index}
                                sx={{
                                    flex: "1 1 320px",
                                    maxWidth: 500,
                                    p: 4,
                                    borderRadius: 5,
                                    background: "#fff",
                                    border: "2px solid #66cc66",
                                    boxShadow:
                                        "0 0 0 4px rgba(102,204,102,0.15)",
                                    color: "#000",
                                    textAlign: "center",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform:
                                            "translateY(-5px) scale(1.03)",
                                        boxShadow:
                                            "0 0 0 6px rgba(102,204,102,0.3)",
                                    },
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: 120,
                                        height: 120,
                                        mb: 2,
                                        mx: "auto",
                                        bgcolor: "#66cc66",
                                        fontSize: "1.7rem",
                                        color: "#fff",
                                    }}
                                    src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_incoming&w=740&q=80"
                                />

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
                                        sx={{ mb: 1, color: "rgba(0,0,0,0.7)" }}
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
                                                    sx={{ color: "#429541" }}
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
                            width: 500,
                            height: {
                                xs: 300,
                                md: 500,
                            },
                            alignSelf: "center",
                            background: "url(team.svg)",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Team;
