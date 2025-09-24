import { useState, useEffect } from "react";
import { Box, Typography, Card } from "@mui/material";

function About() {
    const calculateTimeLeft = () => {
        const eventDate = new Date("2025-11-03T00:00:00");
        const now = new Date();
        const difference = eventDate - now;

        return difference > 0
            ? {
                  days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                  hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                  minutes: Math.floor((difference / 1000 / 60) % 60),
                  seconds: Math.floor((difference / 1000) % 60),
              }
            : { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const countdownItems = [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
    ];

    const aboutCards = [
        {
            type: "image",
            src: "/about.svg",
            style: {
                flex: "400px 1 1",
                height: {
                    xs: 300,
                    sm: 500,
                },
                alignSelf: "center",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            },
        },
        {
            type: "card",
            title: "What is Techstars?",
            paragraphs: [
                "Building the World’s Most Powerful Network for Founders. Techstars is the original mentorship-driven accelerator. We are a global network that supports founders, mentors, investors, and partners in building the future of business.",
                "Whether you're launching a company, mentoring the next generation of founders, investing in startups, or driving innovation in your industry or community, Techstars is where breakthroughs begin.",
                "Since 2006, we've helped launch and grow thousands of companies, including dozens of unicorns like Chainalysis, Zipline, DataRobot, Alloy, and more, by combining capital, mentorship, partnerships, and community-building initiatives across more than 150 countries.",
            ],
        },
        {
            type: "card",
            title: "What is Techstars Startup Weekend Dhamtari?",
            paragraphs: [
                "Startup Weekend is a 54-hour event where developers, designers, marketers, and startup enthusiasts come together to share ideas, form teams, and launch startups.",
                "It is a global movement, facilitated by Techstars, fostering entrepreneurial spirit, collaboration, and innovation across communities.",
                "Participants leave with real-world experience, a tested business concept, and valuable connections to mentors and peers.",
            ],
        },
        {
            type: "card",
            title: "What is VikaasGarh?",
            paragraphs: [
                "VikaasGarh is a community initiative focused on empowering local entrepreneurs and innovators.",
                "By providing mentorship, resources, and networking opportunities, VikaasGarh helps turn ideas into viable businesses.",
                "The platform supports continuous learning, collaboration, and growth within the startup ecosystem.",
            ],
        },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 10, md: 10 },
                px: { xs: 3, md: 10 },
                background: "#fff",
                textAlign: "center",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "#000",
            }}
        >
            <Box>
                <Typography
                    variant="h4"
                    sx={{ mb: 2, fontWeight: "bold", letterSpacing: 1 }}
                >
                    Countdown to Startup Weekend
                </Typography>
                <Typography variant="h6" sx={{ mb: 6, fontWeight: 400 }}>
                    3rd November, 2025
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: { xs: 2, md: 4 },
                    }}
                >
                    {countdownItems.map((item) => (
                        <Box
                            key={item.label}
                            sx={{
                                minWidth: 120,
                                px: 4,
                                py: 3,
                                borderRadius: 3,
                                background: "#f9f9f9",
                                textAlign: "center",
                                color: "#000",
                                border: "2px solid #66cc66",
                                boxShadow:
                                    "0 0 0 4px rgba(102, 204, 102, 0.15)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-5px) scale(1.05)",
                                    boxShadow:
                                        "0 0 0 6px rgba(102, 204, 102, 0.3)",
                                },
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 700,
                                    fontFamily: "'Roboto Mono', monospace",
                                    background:
                                        "linear-gradient(90deg, #00b33c, #66ff66)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    transition: "0.3s",
                                }}
                            >
                                {item.value.toString().padStart(2, "0")}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    mt: 1,
                                    letterSpacing: 1,
                                    textTransform: "uppercase",
                                    fontWeight: 500,
                                    color: "#000",
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box
                sx={{
                    mt: 10,
                    mb: 3,
                    width: "100%",
                    display: "flex",
                    color: "#000",
                    flexDirection: "column",
                    zIndex: 2,
                    maxWidth: 1200,
                }}
            >
                <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
                    About Us
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "stretch",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: { xs: 5, sm: 5, md: 6 },
                    }}
                >
                    {aboutCards.map((card, index) =>
                        card.type === "image" ? (
                            <Box
                                key={index}
                                sx={{
                                    ...card.style,
                                    backgroundImage: `url(${card.src})`,
                                }}
                            />
                        ) : (
                            <Card
                                key={index}
                                variant="outlined"
                                sx={{
                                    background: "#f9f9f9",
                                    textAlign: "start",
                                    p: 5,
                                    color: "#000",
                                    borderRadius: "50px 0 50px 0",
                                    border: "2px solid #66cc66",
                                    boxShadow:
                                        "0 0 0 4px rgba(102, 204, 102, 0.15)",
                                    flex: "350px 1 1",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform:
                                            "translateY(-5px) scale(1.02)",
                                        boxShadow:
                                            "0 0 0 6px rgba(102, 204, 102, 0.3)",
                                    },
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{ fontWeight: "bold", mb: 3 }}
                                >
                                    {card.title}
                                </Typography>
                                {card.paragraphs.map((p, idx) => (
                                    <Typography
                                        key={idx}
                                        variant="body1"
                                        sx={{ my: 2 }}
                                    >
                                        {p}
                                    </Typography>
                                ))}
                            </Card>
                        )
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default About;
