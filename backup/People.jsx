import React from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const iconMap = {
    linkedin: LinkedInIcon,
    twitter: TwitterIcon,
};

const facilitator = [
    {
        name: "Mr. Ismail Akbani",
        description:
            "Experienced facilitator guiding startup teams through ideation and execution.",
        social: {
            linkedin: "https://www.linkedin.com/in/ismail-akbani",
            twitter: "https://x.com/ismail-akbani",
        },
    },
];

const mentors = [
    {
        name: "Prof. (Dr.) Satyendra Patnaik",
        position: "Mentor",
        description:
            "Expert in business strategy and startup growth with decades of academic experience.",
        social: { linkedin: "https://www.linkedin.com/in/satyendra-patnaik" },
    },
    {
        name: "Prof. (Dr.) Surendra N. Rahamatkar",
        position: "Mentor",
        description:
            "Specialist in entrepreneurship and technology innovation.",
        social: { linkedin: "https://www.linkedin.com/in/surendra-rahamatkar" },
    },
    {
        name: "Prof. (Dr.) Sushant Singh",
        position: "Mentor",
        description: "Advisor on technology and business process optimization.",
        social: { linkedin: "https://www.linkedin.com/in/sushant-singh" },
    },
];

const advisors = [
    {
        name: "Shri Abinash Mishra, IAS",
        position: "Advisor",
        description:
            "Provides guidance on government partnerships and regulations.",
        social: { linkedin: "https://www.linkedin.com/in/abinash-mishra" },
    },
    {
        name: "Mr. Sweekar Pawar",
        position: "Advisor",
        description:
            "Mentor and business advisor with extensive startup ecosystem experience.",
        social: { linkedin: "https://www.linkedin.com/in/sweekar-pawar" },
    },
];

function People() {
    const renderSocialLinks = (social) =>
        Object.entries(social).map(([key, url]) => {
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
        });

    const renderSection = (title, members) => (
        <Box sx={{ mb: { xs: 5, md: 6 } }}>
            <Typography
                variant="h4"
                sx={{
                    mb: { xs: 3, md: 5 },
                    fontWeight: 700,
                    textAlign: "center",
                }}
            >
                {title}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: { xs: 3, md: 4 },
                }}
            >
                {members.map((member, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: "1 1 250px",
                            maxWidth: 300,
                            p: 4,
                            borderRadius: 4,
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.2)",
                            backdropFilter: "blur(15px)",
                            color: "#fff",
                            textAlign: "center",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-5px) scale(1.05)",
                                boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
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
                            sx={{ fontWeight: 700, mb: 0.5 }}
                        >
                            {member.name}
                        </Typography>
                        {member.position && (
                            <Typography
                                variant="subtitle2"
                                sx={{ mb: 2, color: "rgba(255,255,255,0.7)" }}
                            >
                                {member.position}
                            </Typography>
                        )}
                        <Typography
                            sx={{ mb: 2, lineHeight: 1.6, fontSize: "0.95rem" }}
                        >
                            {member.description}
                        </Typography>
                        <Box>{renderSocialLinks(member.social)}</Box>
                    </Box>
                ))}
            </Box>
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
                overflow: "hidden",
            }}
        >
            <Box sx={{ maxWidth: 1200, mx: "auto" }}>
                {renderSection("Meet Our Facilitator", facilitator)}
                {renderSection("Meet Our Mentors", mentors)}
                {renderSection("Meet Our Advisors", advisors)}
            </Box>
        </Box>
    );
}

export default People;
