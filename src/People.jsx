import React from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const iconMap = {
    linkedin: LinkedInIcon,
    twitter: TwitterIcon,
};

const descriptions = {
    facilitator:
        "Mr. Ismail Akbani is an experienced facilitator guiding startup teams through ideation and execution. He has helped numerous startups structure their ideas into actionable business models and is known for his hands-on mentoring approach. Beyond ideation, he supports teams in execution, strategy, and scaling their ventures effectively.",
    mentors: {
        satyendra:
            "Expert in business strategy and startup growth with decades of academic experience.",
        surendra: "Specialist in entrepreneurship and technology innovation.",
        sushant: "Advisor on technology and business process optimization.",
    },
    advisors: {
        abinash:
            "Provides guidance on government partnerships and regulations.",
        sweekar:
            "Mentor and business advisor with extensive startup ecosystem experience.",
    },
};

const facilitator = [
    {
        name: "Mr. Ismail Akbani",
        position: "Facilitator",
        description: descriptions.facilitator,
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
        description: descriptions.mentors.satyendra,
        social: { linkedin: "https://www.linkedin.com/in/satyendra-patnaik" },
    },
    {
        name: "Prof. (Dr.) Surendra N. Rahamatkar",
        position: "Mentor",
        description: descriptions.mentors.surendra,
        social: { linkedin: "https://www.linkedin.com/in/surendra-rahamatkar" },
    },
    {
        name: "Prof. (Dr.) Sushant Singh",
        position: "Mentor",
        description: descriptions.mentors.sushant,
        social: { linkedin: "https://www.linkedin.com/in/sushant-singh" },
    },
];

const advisors = [
    {
        name: "Shri Abinash Mishra, IAS",
        position: "Advisor",
        description: descriptions.advisors.abinash,
        social: { linkedin: "https://www.linkedin.com/in/abinash-mishra" },
    },
    {
        name: "Mr. Sweekar Pawar",
        position: "Advisor",
        description: descriptions.advisors.sweekar,
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
                    sx={{ color: "#429541" }}
                >
                    <Icon />
                </IconButton>
            );
        });

    const renderSection = (
        title,
        members,
        isBig = false,
        isFacilitatorStyle = false
    ) => (
        <Box sx={{ mb: { xs: 5, md: 6 } }}>
            <Typography
                variant="h4"
                sx={{
                    mb: { xs: 3, md: 5 },
                    fontWeight: 700,
                    textAlign: "center",
                    color: "#000",
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
                            flex: isFacilitatorStyle
                                ? { xs: "1 1 100%", md: "1 1 45%" }
                                : isBig
                                ? "1 1 600px"
                                : "1 1 250px",
                            maxWidth: isFacilitatorStyle
                                ? 700
                                : isBig
                                ? 650
                                : 300,
                            p: isBig ? 6 : 4,
                            borderRadius: 4,
                            background: "#fff",
                            border: "2px solid #66cc66",
                            boxShadow: "0 0 0 4px rgba(102, 204, 102, 0.15)",
                            color: "#000",
                            textAlign: "center",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-5px) scale(1.05)",
                                boxShadow: "0 0 0 6px rgba(102, 204, 102, 0.3)",
                            },
                            ...(isFacilitatorStyle && {
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                textAlign: { xs: "center", md: "left" },
                                alignItems: "center",
                                justifyContent: {
                                    xs: "center",
                                    md: "flex-start",
                                },
                                gap: { xs: 2, md: 5 },
                            }),
                        }}
                    >
                        <Avatar
                            sx={{
                                width: isBig || isFacilitatorStyle ? 150 : 80,
                                height: isBig || isFacilitatorStyle ? 150 : 80,
                                mb: isFacilitatorStyle ? { xs: 2, md: 0 } : 2,
                                mx: "auto",
                                flexShrink: isFacilitatorStyle ? 0 : undefined,
                            }}
                            src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_incoming&w=740&q=80"
                        />
                        <Box sx={isFacilitatorStyle ? { flex: 1 } : {}}>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, mb: 0.5 }}
                            >
                                {member.name}
                            </Typography>
                            {member.position && (
                                <Typography
                                    variant="subtitle2"
                                    sx={{ mb: 2, color: "rgba(0,0,0,0.7)" }}
                                >
                                    {member.position}
                                </Typography>
                            )}
                            <Typography
                                sx={{
                                    mb: 2,
                                    lineHeight: 1.6,
                                    fontSize:
                                        isBig || isFacilitatorStyle
                                            ? "1.05rem"
                                            : "0.95rem",
                                }}
                            >
                                {member.description}
                            </Typography>
                            <Box>{renderSocialLinks(member.social)}</Box>
                        </Box>
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
                background: "rgba(0, 255, 0, 0.1)",
                color: "#000",
                overflow: "hidden",
            }}
        >
            <Box sx={{ maxWidth: 1200, mx: "auto" }}>
                {renderSection("Meet Our Facilitator", facilitator, true, true)}
                {renderSection("Meet Our Mentors", mentors)}
                {renderSection("Meet Our Advisors", advisors, true, true)}
            </Box>
        </Box>
    );
}

export default People;
